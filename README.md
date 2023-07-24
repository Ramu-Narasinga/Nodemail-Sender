# Nodejs-mail-Sender

Send emails easily usiing this library

## Installation

    npm i nodejs-mail-sender --save
    
## Setup environment vairables
Inside a .env file, add the following values. Refer to the demo/.env.example 

    # You can generate dummy credentials at https://ethereal.email/create
    SMTP_NAME=raven.brakus75@ethereal.email
    SMTP_HOST=smtp.ethereal.email
    SMTP_PORT=587
    SMTP_SECURE=false
    SMTP_USERNAME=raven.brakus75@ethereal.email
    SMTP_PASSWORD=j8HgEVCFTn8mC5mzfN
    SMTP_TLS_CIPHERS=false
    
## Usage

    import { Mailer } from "../dist/index.js";

    const mailerUsingStringConf = async () => {

      try {
        console.log("MAILER:", Mailer);

        // You can generate dummy credentials at https://ethereal.email/create
        // sample stmp config url = "smtps://username:password@smtp.example.com/?pool=true"
        let mailer = new Mailer(`smtp://raven.brakus75@ethereal.email:j8HgEVCFTn8mC5mzfN@smtp.ethereal.email`); 

        console.log("mailer in demo:", mailer);

        const mailOptions = {
          to: "test@test.com",
          subject: "Test subject",
          text: "test text",
        }

        await mailer.sendMail(mailOptions);
      } catch(err) {
        console.error("err", err);
      }
    }

    mailerUsingStringConf();

    const mailerUsingOptions = async () => {

      try {

        let mailer = new Mailer(); 

        console.log("mailer in demo:", mailer);

        const mailOptions = {
          to: "test@test.com",
          subject: "Test subject",
          text: "test text",
        }

        await mailer.sendMail(mailOptions);
      } catch(err) {
        console.error("err", err);
      }
    }

    mailerUsingOptions();
    
   ## Todo:
   1. Unit test coverage
   2. Test with popular email service providers like Google, Yahoo
   3. Add a workaround to append emails sent to `Sent Items` folder through bcc

   ## License:
MIT © [Ramu Narasinga](https://ramunarasinga.com)