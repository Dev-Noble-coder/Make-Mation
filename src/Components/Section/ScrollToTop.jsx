import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsVisible(false); // Hide button once clicked
  };

  // Show/hide button based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > window.innerHeight) {
        setIsVisible(true); // Show button after scrolling past the hero section
      } else {
        setIsVisible(false); // Hide button at the top of the page
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:right-4 right-2 bg-opacity-85 bg-yellow-400 text-white py-5 px-6 rounded-full shadow-lg transition-opacity duration-300"
          style={{ opacity: isVisible ? '1' : '0' }}
        >
          <FontAwesomeIcon icon={faArrowUp} className='text-3xl' />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
