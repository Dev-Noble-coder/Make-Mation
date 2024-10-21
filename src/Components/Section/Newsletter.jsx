import React from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
  };

  return (
    <div className="bg-gray-900 py-20 px-5 sm:px-10 lg:px-20 text-center">
      <motion.h2
        className="text-3xl font-bold text-white mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
        variants={fadeInUp}
      >
        Stay Updated on Make Mation
      </motion.h2>
      
      <motion.p
        className="text-gray-300 mb-8 text-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
        variants={fadeInUp}
      >
        Subscribe to our newsletter to get the latest updates about the <span className='text-2xl font-bold'>MAKE <span className='text-yellow-400'>MATION</span></span> AI movie premiere and behind-the-scenes stories.
      </motion.p>
      
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
        <motion.input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-full sm:w-auto flex-grow text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
          variants={fadeInUp}
        />
        <motion.button
          type="submit"
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300 w-full sm:w-auto text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
          variants={fadeInUp}
        >
          Subscribe
        </motion.button>
      </form>
    </div>
  );
}

export default Newsletter;
