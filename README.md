# mailjet-newsletter
MailJet Setup for Sending Weekly Newsletter

Visit mailjet.com/ to create an account with your credentials and set up templates etc.

Configure your `.env` file in the working directory to include values for the following:
```
EMAIL_CONTENT_PATH
FROM_EMAIL
FROM_FIRST_NAME
FROM_LAST_NAME
MAIL_JET_CAMPAIGN_NAME
MAIL_JET_PRIVATEKEY
MAIL_JET_PUBLICKEY
MAIL_JET_TEMPLATE
RECIPIENTS_PATH
```
Note: Change the name of the file name of the template to match the one referenced in the `npm run compile` script.

1. Create a file in your working directory that you assigned to the `RECIPIENTS_PATH` in the `.env` file
2. Add your recipients in an array of `{ name: string; email: string; }` objects. Save the file.


````
npm install
npm run compile
npm run start:dev
````

* More docs here: https://dev.mailjet.com/