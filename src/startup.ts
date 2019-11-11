require('dotenv').config();

const fs = require('fs');
const path = require('path');

import { IRecipient } from './types/IRecipient';
import { IEmailContent } from './types/IEmailContent';

const isProd = (process.env.NODE_ENV || 'dev') === 'prod';

const EMAIL_TEMPLATE = fs.readFileSync(path.dirname(__dirname) + '/src/templates/emailTemplate.mjml', 'utf8')

const CAMPAIGN_NAME: string = isProd
    ? (process.env.MAIL_JET_CAMPAIGN_NAME as string)
    : 'Test Campaign';

// Not sure why .default is needed here.
const EMAIL_CONTENT: IEmailContent = (isProd
    ? require(process.env.EMAIL_CONTENT_PATH as string)
    : require('./emailContent/emailContentDefault')).default;

const EMAIL_RECIPIENTS: IRecipient[] = isProd
    ? require(process.env.RECIPIENTS_PATH as string)
    : require('./emailContent/recipients/recipientsTest');
const FROM_EMAIL: string = process.env.FROM_EMAIL as string;
const FROM_NAME: string = `${process.env.FROM_FIRST_NAME} ${process.env.FROM_LAST_NAME}`;
const PRIVATE_KEY: string = process.env.MAIL_JET_PRIVATEKEY as string;
const PUBLIC_KEY: string = process.env.MAIL_JET_PUBLICKEY as string;
const TEMPLATE_ID = isProd
    ? Number(process.env.MAIL_JET_TEMPLATE)
    : Number(process.env.MAIL_JET_TEMPLATE);

export {
    CAMPAIGN_NAME,
    EMAIL_CONTENT,
    EMAIL_RECIPIENTS,
    EMAIL_TEMPLATE,
    FROM_EMAIL,
    FROM_NAME,
    PRIVATE_KEY,
    PUBLIC_KEY,
    TEMPLATE_ID
};
