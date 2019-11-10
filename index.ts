// https://dev.mailjet.com/email/guides/send-api-v31/#group-into-a-campaign
// https://dev.mailjet.com/email/reference/send-emails/#v3_1_post_send
// tslint:disable-next-line: no-var-requires
require('dotenv').config();
const dateFns = require('date-fns');
const mailjet = require('node-mailjet');

interface IRecipient { email: string; name: string; }

// tslint:disable-next-line: no-var-requires
const emailRecipients: IRecipient[] = require(process.env.RECIPIENTS_PATH as string);

const CAMPAIGN_NAME = 'TEST';
const EMAIL_SUBJECT = 'WebDev Newsletter {{var:date}}';
const TEMPLATE_ID = Number(process.env.MAIL_JET_TEMPLATE);

const FROM_EMAIL: string = process.env.FROM_EMAIL as string;
const FROM_NAME: string = `${process.env.FROM_FIRST_NAME} ${process.env.FROM_LAST_NAME}`;

const mailjectConnection = mailjet.connect(
    process.env.MAIL_JET_PUBLICKEY,
    process.env.MAIL_JET_PRIVATEKEY,
);

emailRecipients.forEach((recipient) => {
    const request = mailjectConnection.post('send', { version: 'v3.1' })
    .request({
        Globals: {
            From: {
                Email: FROM_EMAIL,
                Name: FROM_NAME,
            },
            Variables: {
                date: dateFns.format(new Date(), 'MMMM d, yyyy'),
            },
            TemplateID: TEMPLATE_ID,
            TemplateLanguage: true,
            Subject: EMAIL_SUBJECT,
            CustomCampaign: CAMPAIGN_NAME,
        },
        Messages: [
            {
                To: [
                    {
                        Email: recipient.email,
                        Name: recipient.name,
                    },
                ],
            },
        ],
    });

    request
        .then((result: any) => {
            console.log(result.body);
        })
        .catch((err: any) => {
            console.log(err.message);
            console.log(err.statusCode);
        });
});
