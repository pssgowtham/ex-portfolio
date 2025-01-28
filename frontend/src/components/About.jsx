const About = ({ data }) => (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">About Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {data.about}
        </p>
      </div>
    </section>
  )
  
  export default About