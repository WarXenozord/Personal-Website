import nodemailer from 'nodemailer';

export const sendWithGoogle = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },      
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter.sendMail({
      from: `"Website Contact" <no-reply@juanlibonatti.com>`,
      to: process.env.GMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });
};