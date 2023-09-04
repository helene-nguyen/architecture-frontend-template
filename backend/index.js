//~ Dotenv
import 'dotenv/config';

// ~Import Express
import express from 'express';
const app = express();

// serve up production assets
app.use(express.static('../frontend/dist'));

// let the react app to handle any unknown routes
// serve up the index.html if express doesn't recognize the route

import { resolve } from 'path';
const __dirname = resolve('../');

//~ Error 404 NOT Found
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

//~ Launch Server
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
});