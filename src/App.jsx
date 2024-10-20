import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import AboutMovie from './Components/Pages/AboutMovie';
import Gallery from './Components/Pages/GalleryPG';
import AboutAuthor from './Components/Pages/AboutAuthor';

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get the current route path

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to top when path changes
    }, [pathname]); // Run when pathname changes

    return null; // This component doesn't need to render anything
  };

  return (
    <>
      <Router>
        <ScrollToTop /> {/* Handle scroll within App */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutTheMovie" element={<AboutMovie />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutTheAuthor" element={<AboutAuthor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
