import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Replace with your API endpoint
      const CONTACT_API = `${import.meta.env.VITE_API_URL}/api/contact`;
      await fetch(CONTACT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      alert('Message sent successfully!');
    } catch (error) {
      alert('Error sending message');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8"
        >
          <h2 className="text-4xl font-bold text-center mb-8 dark:text-white">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'dark:border-gray-600'
                } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">Name is required</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'dark:border-gray-600'
                } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">Valid email is required</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                {...register("message", { required: true })}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? 'border-red-500' : 'dark:border-gray-600'
                } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">Message is required</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition-all disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;