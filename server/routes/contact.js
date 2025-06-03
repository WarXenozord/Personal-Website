import express from "express";
import nodemailer from "nodemailer";
import rateLimit from 'express-rate-limit';

const router = express.Router();
const contactLimiter = rateLimit({
  windowMs: 60 * 1000 * 10, // 10 min
  max: 2,
  message: { error: 'Too many submissions, please wait 10 minutes before sending another message.' },
});
const isProd = process.env.NODE_ENV === 'production';

const sendWithGoogle = async ({ name, email, message }) => {
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

const sendWithSES = async ({ name, email, message }) => {
  console.log("to be done")
};

router.post("/contact", contactLimiter, async (req, res) => {
  const { name, email, message, honeypot } = req.body;

  if (honeypot) return res.status(400).json({ error: 'Bot detected' });

  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  try {
    if(isProd){

    }else{
      await sendWithGoogle ({ name, email, message })
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
