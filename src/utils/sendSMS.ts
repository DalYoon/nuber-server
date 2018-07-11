import Twilio from "twilio";

const { TWILIO_SID, TWILIO_PHONE, TWILIO_TOKEN } = process.env;
const twilioClient = Twilio(TWILIO_SID, TWILIO_TOKEN);

export const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to,
    from: TWILIO_PHONE
  });
};

export const sendVerification = (to: string, key: string) =>
  sendSMS(to, `Your Verification Key is: ${key}`);
