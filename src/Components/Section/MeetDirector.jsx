import React from 'react';
import { motion } from 'framer-motion';
import toyosiImg from '../../assets/toyosiImg.jpg';
import { Link } from 'react-router-dom';

const MeetDirector = () => {
  // Define the animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start from the bottom
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // Fade in and move up
  };

  return (
    <div className='bg-gray-100'>
      <div className='py-16 mx-5 sm:mx-10'>
        {/* Section Title */}
        <motion.div
          className='border-l-8 border-yellow-400 py-3 '
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
          variants={fadeInUp}
        >
          <h2 className='text-xl font-semibold opacity-95 pl-3'>
            Meet The Mastermind
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center mt-10 sm:mt-16 gap-5'>
          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
            variants={fadeInUp}
          >
            <h3 className='text-xl font-semibold pb-2'>Toyosi Akerele Ogunsiji</h3>
            <p className='text-md leading-10'>
              Toyosi Akerele-Ogunsiji, born Oluwatoyosi Akerele on 8 November 1983, is a Nigerian social entrepreneur and human development expert whose work spans across entrepreneurship, education, youth development, and public leadership. She is the founder and CEO of Rise Networks, a Nigerian-based youth-interest social enterprise.
            </p>
            <p className='text-md leading-10 pb-5'>
              She is the director of the movie called <span className=' font-bold'>MAKE <span className='text-yellow-400'>MATION</span></span>
            </p>
            <Link to='/aboutTheAuthor'>
              <motion.button
                className='bg-yellow-400 py-2 px-5 text-white text-md font-semibold rounded-sm'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
            variants={fadeInUp}
          >
            <img src={toyosiImg} alt="Toyosi Akerele Ogunsiji" className='h-[320px] sm:h-[600px] rounded-md' />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MeetDirector;
