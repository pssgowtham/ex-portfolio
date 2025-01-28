const Education = ({ data }) => (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 dark:text-white">Education</h2>
        
        <div className="space-y-6">
          {data.education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold dark:text-gray-200">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{edu.university}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
  
  export default Education