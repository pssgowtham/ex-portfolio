import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = ({ data }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 animate-gradient-x" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="text-center md:text-left mb-8 md:mb-0"
          >
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {data.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              {data.title}
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all">
                Get in Touch
              </a>
              <button onClick={toggleTheme} className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg">
                {darkMode ? '🌞' : '🌙'}
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            className="w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-2xl"
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;