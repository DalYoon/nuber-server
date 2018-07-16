import Mailgun from "mailgun-js";

const mailGunClient = new Mailgun({
  apiKey: process.env.MAILGUN_API_KEY || "",
  domain: "sandboxad6bf0ca35a54663bfcaaefc6b95d655.mailgun.org"
});
