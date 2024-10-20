import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import Newsletter from '../../Components/Section/Newsletter'
import Footer from '../../Components/Section/Footer'


const GalleryPG = () => {
  return (
    <div>
       <Navbar />
    <Banner name = 'Gallery Section' />
    <Newsletter />
    <Footer />
    </div>
  )
}

export default GalleryPG
