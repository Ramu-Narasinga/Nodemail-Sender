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

// mailerUsingStringConf();

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



