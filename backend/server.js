import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import resumeRouter from './routes/Resume.js';
import contactRouter from './routes/contact.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5006;

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/resume', resumeRouter);
app.use('/api/contact', contactRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});