import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxad6bf0ca35a54663bfcaaefc6b95d655.mailgun.org"
});

const sendEmail = (subject: string, html: string) => {
  const emailData = {
    from: "yeodal.yoon@gmail.com",
    to: "yeodal.yoon@gmail.com",
    subject,
    html
  };

  return mailGunClient.messages().send(emailData);
};

export const sendVerificationEmail = (fullName: string, key: string) => {
  const emailSubject = `Hello ${fullName}, please verify your email!`;
  const emailBody = `Greetings! we are Nuber, please verify your email by clicking <a href="http://nuber.com/verification/${key}/">here</a>`;
  return sendEmail(emailSubject, emailBody);
};
