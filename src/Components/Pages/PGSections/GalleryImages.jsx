import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IMG from '../../../assets/IMG.jpg';
import IMG2 from '../../../assets/galleryGridFour.jpg';
import IMG3 from '../../../assets/galleryGridOne.jpg';
import IMG4 from '../../../assets/galleryGridThree.jpg';
import IMG5 from '../../../assets/galleryGridTwo.jpg';
import IMG6 from '../../../assets/IMG2.jpg';
import IMG7 from '../../../assets/IMG3.jpg';
import IMG8 from '../../../assets/IMG4.jpg';
import IMG9 from '../../../assets/imgGridFour.png';
import IMG10 from '../../../assets/imgGridOne.png';
import IMG11 from '../../../assets/imgGridThree.png';
import IMG12 from '../../../assets/imgGridTwo.png';
import IMG13 from '../../../assets/imgOne.jpg';
import IMG14 from '../../../assets/imgThree.jpg';
import IMG15 from '../../../assets/imgTwo.jpg';
import IMG16 from '../../../assets/toyosiImg.jpg';
import IMG17 from '../../../assets/toyosiImg2.jpg';

const images = [IMG, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17];

const GalleryImages = () => {
  const [visibleImages, setVisibleImages] = useState(Array(images.length).fill(false)); // Track visibility for each image
  const imageRefs = useRef([]); // Array to hold refs for each image

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleImages((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      {
        threshold: 0.1, // 10% of the image is visible before triggering
      }
    );

    imageRefs.current.forEach((image) => {
      if (image) observer.observe(image);
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) observer.unobserve(image);
      });
    };
  }, []);

  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-5'>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className='relative overflow-hidden z-10'
          data-index={index} // Use index to identify each image
          ref={(el) => (imageRefs.current[index] = el)} // Assign each image a ref
          initial={{ opacity: 0, y: 100 }} // Start offscreen from the bottom
          animate={visibleImages[index] ? { opacity: 1, y: 0 } : {}} // Animate when visible
          transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation for each image
        >
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className='w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-sm'
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryImages;
