import express from 'express';
import Resume from '../models/resume.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;