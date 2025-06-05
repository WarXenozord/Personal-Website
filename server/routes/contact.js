import 'dotenv/config'; // Let's try to understand why this is needed someday
import express from "express";
import rateLimit from 'express-rate-limit';

import { sendWithGoogle } from '../components/googleMailer.js';
import { sendWithSES } from '../components/sesMailer.js';

const router = express.Router();

const rateLimitWindow = parseInt(process.env.CONTACT_FORM_RATE_LIMIT_WINDOW
  || '600', 10);
const max_reqs = parseInt(process.env.CONTACT_FORM_MAX || '2', 10);
const contactLimiter = rateLimit({
  windowMs: rateLimitWindow * 1000,
  max: max_reqs,
  message: { error: 'Too many submissions, please try \
    again later.' },
});
const isProd = process.env.NODE_ENV === 'production';

router.post("/contact", contactLimiter, async (req, res) => {
  const { name, email, message, honeypot } = req.body;

  if (honeypot) return res.status(400).json({ error: 'Bot detected' });

  if (!name || !email || !message)
    return res.status(400).json({ error: "Missing fields" });

  try {
    if(isProd){
      await sendWithSES({ name, email, message })
    }else{
      await sendWithGoogle({ name, email, message })
    }
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error sending mail:", err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

export default router;
