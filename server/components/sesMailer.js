import nodemailer from 'nodemailer';
import { SESClient } from '@aws-sdk/client-ses';
import { SendRawEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({
  region: process.env.SES_REGION,
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
  },
});

export const sendWithSES = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    SES: { 
      ses, 
      aws: {
        SendRawEmailCommand
      }
    },
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