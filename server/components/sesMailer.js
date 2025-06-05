import nodemailer from 'nodemailer';
import { SESv2Client } from '@aws-sdk/client-sesv2';

const ses = new SESv2Client({
  region: process.env.SES_REGION,
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
  },
});

export const sendWithSES = async ({ name, email, message }) => {
  // v3: no command needed
  const transporter = nodemailer.createTransport({
    SES: { client: ses, aws: { SendEmailCommand: null } }, 
  });

  return transporter.sendMail({
    from: `"Website Contact" <no-reply@${process.env.DOMAIN}>`,
    to: process.env.CONTACT_RECEIVER,
    subject: "New Contact Form Submission",
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  });
};