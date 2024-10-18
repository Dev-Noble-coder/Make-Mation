import React from 'react'
import gGO from '../../assets/galleryGridOne.jpg'
import gGT from '../../assets/galleryGridTwo.jpg'
import gGTh from '../../assets/galleryGridThree.jpg'
import gGFr from '../../assets/galleryGridFour.jpg'
import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div className='py-16 mx-5 sm:mx-10'>
            <div className='border-l-8 border-yellow-400 py-3 sm:py-5' >
                <h2 className='text-3xl sm:text-5xl font-semibold opacity-95 pl-3'>Gallery</h2>
            </div>
            <div className='grid grid-cols-2 gap-5 rounded-md mt-10 sm:mt-16'>
                <div className="relative group">
                    <Link to='/'>
                        <img src={gGO} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
                        <div className=" cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xl sm:text-4xl font-semibold">See more</span>
                        </div>
                    </Link>
                </div>
                <div className="relative group">
                    <Link to='/'>
                        <img src={gGT} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
                        <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xl sm:text-4xl font-semibold">See more</span>
                        </div>
                    </Link >
                </div>
                <div className="relative group">
                    <Link to ='/'>
                        <img src={gGTh} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
                        <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xl sm:text-4xl font-semibold">See more</span>
                        </div>
                    </Link >
                </div>
                <div className="relative group">
                    <Link to='/'>
                        <img src={gGFr} alt="" className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
                        <div className="cursor-pointer absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xl sm:text-4xl font-semibold">See more</span>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Gallery
