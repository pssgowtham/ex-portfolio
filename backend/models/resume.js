import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  role: String,
  company: String,
  location: String,
  duration: String,
  achievements: [String]
});

const educationSchema = new mongoose.Schema({
  degree: String,
  university: String,
  duration: String
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  achievements: [String]
});

const resumeSchema = new mongoose.Schema({
  name: String,
  title: String,
  about: String,
  skills: {
    languages: [String],
    frameworks: [String],
    databases: [String],
    cloud: [String],
    tools: [String]
  },
  experience: [experienceSchema],
  education: [educationSchema],
  projects: [projectSchema]
});

export default mongoose.model('Resume', resumeSchema);