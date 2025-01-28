import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projects = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          Featured Work
        </h2>
        
        <Slider {...settings}>
          {data.projects.map((project, index) => (
            <div key={index} className="p-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold dark:text-gray-200 mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <a href={project.demo} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                      Live Demo
                    </a>
                    <a href={project.code} className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-full hover:bg-blue-50 transition">
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;