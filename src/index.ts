// https://dev.mailjet.com/email/guides/send-api-v31/#group-into-a-campaign
// https://dev.mailjet.com/email/reference/send-emails/#v3_1_post_send
const dateFns = require('date-fns');
const mailjet = require('node-mailjet');

import arrayBatcher from './utils/arrayBatcher';
import {
    CAMPAIGN_NAME,
    EMAIL_CONTENT,
    EMAIL_RECIPIENTS,
    EMAIL_TEMPLATE,
    FROM_EMAIL,
    FROM_NAME,
    PRIVATE_KEY,
    PUBLIC_KEY,
    TEMPLATE_ID
} from './startup';

const currentDate: string = dateFns.format(new Date(), 'MMMM d, yyyy');

const connection = mailjet.connect(PUBLIC_KEY, PRIVATE_KEY);

// Free account only allows sending 50 emails per .post().
arrayBatcher(EMAIL_RECIPIENTS, 50).forEach(recipientBatch => {
    const request = connection.post('send', { version: 'v3.1' }).request({
        Globals: {
            From: {
                Email: FROM_EMAIL,
                Name: FROM_NAME
            },
            Variables: {
                date: currentDate,
                ...EMAIL_CONTENT
            },
            // TemplateID: TEMPLATE_ID,
            HTMLPart: EMAIL_TEMPLATE,
            TemplateLanguage: true,
            Subject: `${EMAIL_CONTENT.subject} ${currentDate}`,
            CustomCampaign: CAMPAIGN_NAME
        },
        Messages: [
            {
                To: recipientBatch.map(recipient => {
                    return {
                        Email: recipient.email,
                        Name: recipient.name
                    };
                })
            }
        ]
    });

    request
        .then((result: { body: any }) => {
            console.log(result.body);
        })
        .catch((err: { message: string; statusCode: string }) => {
            console.log(err.message);
            console.log(err.statusCode);
        });
});
