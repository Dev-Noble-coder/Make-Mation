import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import Newsletter from '../../Components/Section/Newsletter'
import Footer from '../../Components/Section/Footer'
import AbtMovie from './PGSections/AbtMovie'
import ScrollToTop from '../Section/ScrollToTop'

const AboutMovie = () => {
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Banner name = 'About The Movie' />
    <AbtMovie />
    <Newsletter />
    <Footer />
 
    </>
  )
}

export default AboutMovie
