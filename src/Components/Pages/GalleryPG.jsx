import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import Newsletter from '../../Components/Section/Newsletter'
import Footer from '../../Components/Section/Footer'
import ScrollToTop from '../Section/ScrollToTop'
import GalleryImages from './PGSections/GalleryImages'



const GalleryPG = () => {
  return (
    <div>
      <ScrollToTop />
    <Navbar />
    <Banner name = 'Gallery Section' />
    <GalleryImages />
    <Newsletter />
    <Footer />
    </div>
  )
}

export default GalleryPG
