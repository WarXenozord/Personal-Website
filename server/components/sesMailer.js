import nodemailer from 'nodemailer';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// Create AWS SDK v3 SES client
const ses = new SESClient({
  region: process.env.SES_REGION,
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
  },
});

export const sendWithSES = async ({ name, email, message }) => {
// Create nodemailer transport using AWS SDK v3
const transporter = nodemailer.createTransport({
  SES: { ses, aws: { SendEmailCommand } },
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