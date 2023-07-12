# Nodejs-mail-Sender

Send emails easily usiing this library

## Installation

    npm i nodejs-mail-sender --save
    
## Setup environment vairables
Inside a .env file, add the following values

    "NODEMAIL_SENDER_NAME"="Sender Name"
    "NODEMAIL_SENDER_HOST"="smtp.ethereal.email" // replace with your host
    "NODEMAIL_SENDER_PORT"=587 // replace with your port
    "NODEMAIL_SENDER_SECURE"=false // or false
    "NODEMAIL_SENDER_USERNAME"="username,
    "NODEMAIL_SENDER_PASSWORD"="password,
    "NODEMAIL_SENDER_TLS_CIPHERS"=false // or false
    
## Usage

    import  mailer  from  "nodejs-mail-sender";
    
    const  run = async () => {
	    try {
			let mailOptions = {
		        from: fromEmail
		        replyTo: replyEmail,
		        to: toEmail,
		        subject: testSubject,
		        html: testHtml,
		        text: testText,
		        attachments: [
		              {
		                filename: "header-logo.png",
		                path: process.cwd() + "/public/email/header-logo.png",
		                cid: "header-image",
		              },
	            ],
		      }
	    	await mailer.sendMail(mailOptions);
    	} catch(err) {
	    	console.error(`[Error]:[Run]: Error in sending email:: ${err}`);
    	}
    }
    
    run();
    
   ## Todo:
   1. Unit test coverage
   2. Test with popular email service providers like Google, Yahoo
   3. Add a workaround to append emails sent to `Sent Items` folder through bcc

   ## License:
MIT © [Ramu Narasinga](https://ramunarasinga.com)