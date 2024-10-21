import React from 'react'
import IMG from '../../../assets/IMG.jpg'
import IMG2 from '../../../assets/galleryGridFour.jpg'
import IMG3 from '../../../assets/galleryGridOne.jpg'
import IMG4 from '../../../assets/galleryGridThree.jpg'
import IMG5 from '../../../assets/galleryGridTwo.jpg'
import IMG6 from '../../../assets/IMG2.jpg'
import IMG7 from '../../../assets/IMG3.jpg'
import IMG8 from '../../../assets/IMG4.jpg'
import IMG9 from '../../../assets/imgGridFour.png'
import IMG10 from '../../../assets/imgGridOne.png'
import IMG11 from '../../../assets/imgGridThree.png'
import IMG12 from '../../../assets/imgGridTwo.png'
import IMG13 from '../../../assets/imgOne.jpg'
import IMG14 from '../../../assets/imgThree.jpg'
import IMG15 from '../../../assets/imgTwo.jpg'
import IMG16 from '../../../assets/toyosiImg.jpg'
import IMG17 from '../../../assets/toyosiImg2.jpg'

const images = [IMG, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15, IMG16, IMG17];

const GalleryImages = () => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10 px-5 '>
    {images.map((image, index) => (
      <div key={index} className='relative overflow-hidden z-10'>
        <img
          src={image}
          alt={`Gallery Image ${index + 1}`}
          className='w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 '
        />
      </div>
    ))}
  </div>
  
  )
}

export default GalleryImages
