import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
    return (
        <div className='flex justify-center items-center  text-center py-10 sm:py-16 bg-gray-100  '>
            <div>
               

                <div className='pb-5'>

                    <p className='text-gray-900 text-md'>Copyright © 2024, <span className='text-xl font-bold text-gray-900'>MAKE <span className='text-yellow-400'>MATION</span></span></p>
                </div>
                <div className='sm:flex justify-center gap-1 sm:gap-3 text-md text-gray-900 grid grid-cols-2'>
                    <p className='sm:border-r-2 pr-1 sm:pr-3 border-gray-900'>Legal Policy</p>
                    <p className='sm:border-r-2 pr-1 sm:pr-3 border-gray-900'>Privacy Policy</p>
                    <p className='sm:border-r-2 pr-1 sm:pr-3 border-gray-900'>Manage Cookies</p>
                    <p>Ownership</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
