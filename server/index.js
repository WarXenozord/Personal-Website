import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import contactRoute from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors()); // allow requests from Vite dev server or deployed frontend
app.use(express.json()); // parse JSON body

// Routes
app.use('/api', contactRoute);

// Health check (optional)
app.get('/', (req, res) => {
  res.send('Backend is up');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});