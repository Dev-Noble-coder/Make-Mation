import React, { useState } from 'react';
import imgOne from '../../assets/imgOne.jpg';
import imgTwo from '../../assets/imgTwo.jpg';
import imgThree from '../../assets/imgThree.jpg';

// Sample images for the slider
const images = [
  imgOne,
  imgTwo,
  imgThree,
];

const Banner = ({name}) => {
  // State to manage current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Variables to track swipe start/end positions
  let touchStartX = 0;
  let touchEndX = 0;

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  // Function to set a specific slide using the indicators
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle touch start event to record the starting position
  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  // Handle touch end event to record the ending position and determine swipe direction
  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipeGesture(); // Check the swipe direction
  };

  // Determine swipe direction and switch slides
  const handleSwipeGesture = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left, go to next slide
      nextSlide();
    }

    if (touchEndX - touchStartX > 50) {
      // Swipe right, go to previous slide
      prevSlide();
    }
  };

  return (
    <div 
      className='relative min-h-screen flex justify-center items-center'
      style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
     
      <div className="absolute inset-0 bg-black opacity-60 block z-0"></div>

      {/* Banner Content */}
      <div className='text-center text-white z-10'>
        <div className='max-w-xl px-6'>
          <h2 className=' text-4xl sm:text-5xl lg:text-6xl font-bold mb-5'>{name} </h2>
          <p className='text-base sm:text-xl mb-5'>
            "Experience the future of storytelling—Toyosi's groundbreaking AI-powered movie awaits."
          </p>
          <button className='bg-yellow-500 text-white px-7 py-3 rounded-sm text-xl hover:bg-transparent hover:border hover:border-yellow-400 transition-all'>
            Watch Trailer
          </button>
        </div>
      </div>

      {/* Left Arrow for larger screens */}
      <button
        onClick={prevSlide}
        className='hidden sm:block absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 text-white text-5xl sm:text-7xl z-30'
      >
        &#8249;
      </button>

      {/* Right Arrow for larger screens */}
      <button
        onClick={nextSlide}
        className='hidden sm:block absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 text-white text-5xl sm:text-7xl z-30'
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className='absolute bottom-5 flex justify-center w-full'>
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 mx-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
