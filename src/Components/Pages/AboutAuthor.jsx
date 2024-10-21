import React from 'react'
import Navbar from '../Section/Navbar'
import Banner from '../Section/Banner'
import Newsletter from '../../Components/Section/Newsletter'
import Footer from '../../Components/Section/Footer'
import ScrollToTop from '../Section/ScrollToTop'
import Abtauthor from './PGSections/Abtauthor'


const AboutAuthor = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
    <Banner name = 'About The Author' />
    <Abtauthor />
    <Newsletter />
    <Footer />
    </div>
  )
}

export default AboutAuthor
