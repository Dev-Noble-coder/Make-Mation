import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import Newsletter from '../../Components/Section/Newsletter'
import Footer from '../../Components/Section/Footer'
import AbtMovie from './PGSections/AbtMovie'

const AboutMovie = () => {
  return (
    <>
    <Navbar />
    <Banner name = 'About The Movie' />
    <AbtMovie />
    <Newsletter />
    <Footer />
 
    </>
  )
}

export default AboutMovie
