import express, { Request, Response } from 'express';
import path from 'path';
// Read environment variables from .env file
const ENV_FILE = path.join(__dirname, '../.env');
require('dotenv').config({ path: ENV_FILE });

(async () => {
  const app = express();
  const port = 3000;

  app.get('/', (_req: Request, res: Response) => {
    res.send('API is working!');
  });

  app.listen(port, () => {
    console.log(`Bot API listening at http://localhost:${port}`);
  });
})();
