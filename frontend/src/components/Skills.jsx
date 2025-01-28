import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skills = ({ data }) => {
  const skillsWithProgress = {
    "Java": 90,
    "Spring Boot": 85,
    "React": 80,
    "AWS": 75
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Technical Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(skillsWithProgress).map(([skill, value]) => (
            <div 
              key={skill}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <CircularProgressbar
                  value={value}
                  text={`${value}%`}
                  styles={{
                    path: { stroke: `rgba(79, 70, 229, ${value / 100})` },
                    text: { fill: '#4f46e5', fontSize: '24px' }
                  }}
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-gray-200">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;