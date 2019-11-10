# mailjet-newsletter
MailJet Setup for Sending Weekly Newsletter

Visit mailjet.com/ to create an account with your credentials and set up templates etc.

Configure your `.env` file in the working directory to include values for the following:
```
FROM_EMAIL
FROM_FIRST_NAME
FROM_LAST_NAME
MAIL_JET_PRIVATEKEY
MAIL_JET_PUBLICKEY
RECIPIENTS_PATH
MAIL_JET_TEMPLATE
```

1. Create a file in your working directory that you assigned to the `RECIPIENTS_PATH` in the `.env` file
1. Add your recipients in an array of `{ name: string; email: string; }` objects. Save the file.


````
npm install
npm start
````

* More docs here: https://dev.mailjet.com/