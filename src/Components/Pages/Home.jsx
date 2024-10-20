import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import AboutUs from '../Section/AboutUs'
import MeetDirector from '../Section/MeetDirector'
import Gallery from '../Section/Gallery'
import Premiere from '../Section/Premiere'
import Newsletter from '../Section/Newsletter'
import Footer from '../Section/Footer'
import ScrollToTop from '../Section/ScrollToTop'

const Home = () => {
  return (
    <>
    <Navbar />
    <Banner name = 'MAKE MATION' />
    <AboutUs />
    <MeetDirector />
    <Gallery />
    <Premiere />
    <Newsletter />
    <Footer />
    <ScrollToTop />
    </>
  )
}

export default Home
