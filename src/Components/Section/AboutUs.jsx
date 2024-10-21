import React from 'react';
import { motion } from 'framer-motion';
import imgGridOne from '../../assets/imgGridOne.png';
import imgGridTwo from '../../assets/imgGridTwo.png';
import imgGridThree from '../../assets/imgGridThree.png';
import imgGridFour from '../../assets/imgGridFour.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const images = [imgGridOne, imgGridTwo, imgGridThree, imgGridFour];

    // Animation variants for scrolling from bottom
    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },  // Starts from the bottom
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } // Fades in and moves up
    };

    return (
        <div className='py-16 mx-5 sm:mx-10 '>
            {/* Section Title */}
            <motion.div 
                className='border-l-8 border-yellow-400 py-3 sm:py-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
                variants={fadeInUp}
            >
                <h2 className='text-3xl sm:text-5xl font-semibold opacity-95 pl-3'>About The Movie</h2>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 mt-10 sm:mt-16 gap-8'>
                {/* Text Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
                    variants={fadeInUp}
                >
                    <h2 className='text-2xl font-semibold pb-2'>Make Mation" – A Film by Toyosi Akerele Ogunsiji</h2>
                    <p className='text-xl leading-10'>
                        Step into a groundbreaking world where artificial intelligence meets human creativity. Directed by visionary filmmaker Toyosi Akerele Ogunsiji, "The AI Revolution" takes you on an unforgettable journey through a future shaped by technology, innovation, and the power of human connection. Experience a cinematic masterpiece like no other, where AI isn't just the story—it’s part of the creation.
                    </p>
                    <p className='text-xl leading-10 mb-5'>
                        In this cinematic masterpiece, audiences will explore a universe where AI evolves beyond mere programming, becoming a collaborator in the artistic process. Through stunning visuals and a compelling narrative, the film challenges our perceptions of what it means to create, highlighting the delicate balance between human intuition and technological advancement.
                    </p>
                    <Link to='/aboutTheMovie'>
                        <motion.button 
                            className='bg-yellow-400 py-5 px-14 text-white text-xl font-semibold rounded-sm'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Image Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
                    variants={fadeInUp}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className="relative overflow-hidden h-64 rounded-sm" // Fixed height
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% in view
                                variants={fadeInUp}
                            >
                                <motion.img
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                                />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default AboutUs;
