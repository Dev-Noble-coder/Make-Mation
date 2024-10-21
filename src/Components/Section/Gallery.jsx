import React from 'react';
import { motion } from 'framer-motion';
import gGO from '../../assets/galleryGridOne.jpg';
import gGT from '../../assets/galleryGridTwo.jpg';
import gGTh from '../../assets/galleryGridThree.jpg';
import gGFr from '../../assets/galleryGridFour.jpg';
import { Link } from 'react-router-dom';

const Gallery = () => {
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
  };

  return (
    <div className='py-16 mx-5 sm:mx-10'>
      {/* Title Section */}
      <motion.div
        className='border-l-8 border-yellow-400 py-3 sm:py-5'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
        variants={fadeInUp}
      >
        <h2 className='text-3xl sm:text-5xl font-semibold opacity-95 pl-3'>Gallery</h2>
      </motion.div>

      {/* Gallery Images Section */}
      <div className='grid grid-cols-2 gap-5 rounded-md mt-10 sm:mt-16'>
        {[gGO, gGT, gGTh, gGFr].map((image, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
            variants={fadeInUp}
          >
            <Link to='/gallery'>
              <img 
                src={image} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" 
              />
              <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-xl sm:text-4xl font-semibold">See more</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
