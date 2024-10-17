import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // State to manage the visibility of the sliding menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to manage navbar background color and fixed position
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle closing the menu
  const closeMenu = () => setIsMenuOpen(false);

  // Add scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled more than 50px, set isScrolled to true
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" fixed top-0 w-full z-50">
      {/* Main Navbar */}
      <div className={`flex justify-between sm:justify-around items-center py-5 px-5 transition-colors duration-300 ${isScrolled ? 'fixed top-0 w-full bg-peach shadow-lg bg-white ' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="NavLogo">
          <Link to="/" className="font-bold text-3xl">MAKE MATION</Link>
        </div>

        {/* Links for larger screens */}
        <div className="NavLink hidden sm:block">
          <nav className="flex gap-5 text-xl">
            <Link to="/">Home</Link>
            <Link to="/about-movie">About The Movie</Link>
            <Link to="/about-author">About The Author</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <div className="sm:hidden">
          <FontAwesomeIcon 
            icon={faBars} 
            className="text-2xl cursor-pointer" 
            onClick={() => setIsMenuOpen(true)} // Open menu when clicked
          />
        </div>
      </div>

      {/* Overlay for the sliding menu (shown only when menu is open) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu} // Close the menu when clicking outside
        ></div>
      )}

      {/* Sliding menu (visible only on small screens) */}
      <div className={`fixed top-0 right-0 w-2/3 h-full bg-white z-20 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close button */}
        <div className="flex justify-end p-5">
          <FontAwesomeIcon 
            icon={faTimes} 
            className="text-2xl cursor-pointer"
            onClick={closeMenu} // Close menu when clicked
          />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col pl-5 gap-5 mt-10">
          <Link to="/" className="text-lg" onClick={closeMenu}>Home</Link>
          <Link to="/about-movie" className="text-lg" onClick={closeMenu}>About The Movie</Link>
          <Link to="/about-author" className="text-lg" onClick={closeMenu}>About The Author</Link>
          <Link to="/gallery" className="text-lg" onClick={closeMenu}>Gallery</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
