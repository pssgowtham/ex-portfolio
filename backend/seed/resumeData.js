import mongoose from 'mongoose';
import Resume from '../models/resume.js';
import dotenv from 'dotenv';

dotenv.config();

const resumeData = {
  name: "Gowtham P",
  title: "Java Developer",
  about: "Dynamic Software Developer with over six years of experience in Java development and backend systems design.",
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++"],
    frameworks: ["Spring Boot", "Hibernate", "React.js", "Angular", "Node.js"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "AWS RedShift"],
    cloud: ["AWS", "GCP", "Docker", "Kubernetes", "Jenkins"],
    tools: ["Git", "JIRA", "Postman", "Power BI", "Spark"]
  },
  experience: [
    {
      role: "Java Developer",
      company: "Credit Karma",
      location: "San Francisco, USA",
      duration: "Dec 2023 – Present",
      achievements: [
        "Implemented Micro-services using SpringBoot and Pivotal Cloud Foundry",
        "Optimized database queries for Postgres and MongoDB",
        "Developed security features using Spring Security"
      ]
    }
    // Add other experiences
  ],
  education: [{
    degree: "M.S. in Software Engineering",
    university: "San Jose State University",
    duration: "Aug 2022 – May 2024"
  }],
  projects: [
    {
      title: "Healthcare Management Platform",
      description: "Web-based platform for managing patient records and appointments",
      technologies: ["Java", "Spring Framework", "Angular", "Oracle"],
      achievements: [
        "Reduced processing times by optimizing database queries",
        "Integrated responsive front-end components with REST APIs"
      ]
    }
    // Add other projects
  ]
};

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Resume.deleteMany();
    await Resume.create(resumeData);
    console.log('Database seeded!');
    process.exit();
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedDatabase();