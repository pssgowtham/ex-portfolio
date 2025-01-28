const Experience = ({ data }) => (
  <section className="py-20 relative">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Professional Journey
      </h2>
      
      <div className="relative">
        <div className="absolute left-1/2 w-1 bg-gray-200 dark:bg-gray-700 h-full -translate-x-1/2" />
        
        {data.experience.map((exp, index) => (
          <div 
            key={index}
            className={`mb-8 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
          >
            <div className="w-5/12 p-4">
              {index % 2 === 0 && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold dark:text-gray-200">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              )}
            </div>
            
            <div className="w-2/12 flex justify-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full shadow-xl" />
            </div>
            
            <div className="w-5/12 p-4">
              {index % 2 !== 0 && (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold dark:text-gray-200">{exp.role}</h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2">{exp.company}</p>
                  <p className="text-sm text-gray-400">{exp.duration}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;