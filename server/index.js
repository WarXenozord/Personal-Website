import dotenv from 'dotenv';
const envPath = process.env.NODE_ENV === 'production'
  ? '/etc/myapp/.env'
  : './.env';

dotenv.config({ path: envPath });

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import contactRoute from './routes/contact.js';

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'client', 'dist');

//trust reverse proxy
if(process.env.NODE_ENV === 'production')
  app.set('trust proxy', 1);

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api', contactRoute);

// Serve static files from Vite build
app.use(express.static(distPath));

// Serve index.html for any unknown route (for SPA support)
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (${process.env.NODE_ENV })`);
});