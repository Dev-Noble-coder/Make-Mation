import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  // State to manage the visibility of the sliding menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // State to manage navbar background color and fixed position
  const [isScrolled, setIsScrolled] = useState(false);

  // State to manage the text color of links
  const [isLinkBlack, setIsLinkBlack] = useState(false);

  // Function to handle closing the menu
  const closeMenu = () => setIsMenuOpen(false);

  // Add scroll event listener to detect when the user scrolls
  useEffect(() => {
    const handleScroll = () => {
       if(window.scrollY > 20){
        setIsScrolled(true);
        
        setIsLinkBlack(true);
      } else {
        setIsScrolled(false);
         // Change link color back to white
         setIsLinkBlack(false);
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
    <div className="fixed top-0 w-full z-50">
      {/* Main Navbar */}
      <div className={`flex justify-between lg:px-10 items-center py-7 px-5 transition-colors duration-300 ${isScrolled ? 'fixed top-0 w-full bg-peach shadow-lg bg-white lg:px-10 ' : 'bg-transparent'}`}>
        {/* Logo */}
        <div className="NavLogo">
          <Link to="/" className={`font-bold text-3xl ${isScrolled ? 'text-yellow-400' : 'text-yellow-400'}`}>MAKE MATION</Link>
        </div>

        {/* Links for larger screens */}
        <div className={`NavLink hidden lg:block ${isLinkBlack ? 'text-black' : 'text-white'}`}>
          <nav className="flex gap-10 text-xl">
            <Link to="/">Home</Link>
            <Link to="/about-movie">About The Movie</Link>
            <Link to="/about-author">About The Author</Link>
            <Link to="/gallery">Gallery</Link>
          </nav>
        </div>

        {/* Hamburger Icon for smaller screens */}
        <div className="lg:hidden">
          <FontAwesomeIcon 
            icon={faBars} 
            className="text-2xl cursor-pointer bg-yellow-400 text-white px-3 py-3 rounded-full" 
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
      <div className={`fixed top-0 right-0 w-2/3 h-full bg-gray-100 z-20 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Close button */}
        <div className="flex justify-end p-5">
          <FontAwesomeIcon 
            icon={faTimes} 
            className="text-3xl cursor-pointer bg-yellow-400 px-3 py-2 rounded-full text-white"
            onClick={closeMenu} // Close menu when clicked
          />
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col pl-5 text-xl gap-5 mt-10">
          <Link to="/" className="py-3 "  onClick={closeMenu}>Home</Link>
          <Link to="/about-movie" className="py-3" onClick={closeMenu}>About The Movie</Link>
          <Link to="/about-author" className="py-3"   onClick={closeMenu}>About The Author</Link>
          <Link to="/gallery" className="py-3"  onClick={closeMenu}>Gallery</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
