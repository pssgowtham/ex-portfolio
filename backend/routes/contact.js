import express from 'express';
const router = express.Router();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from '../models/contact.js';

dotenv.config();

router.post('/', async (req, res) => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    
    // Save the contact message
    const contact = await Contact.create(req.body);
    console.log('Received message:', req.body);

    // Respond with the created contact
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Message sending failed' });
  }
});

export default router;
