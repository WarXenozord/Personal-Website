import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());         
app.use(express.json());   

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  console.log('Contact form submitted:', { name, email, message });

  // TODO: send email, save to DB, etc.

  res.json({ success: true, message: 'Message received.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});