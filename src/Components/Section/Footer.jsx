import React from 'react'
import 'boxicons/css/boxicons.min.css';

const Footer = () => {
    return (
        <div className='flex justify-center items-center  text-center py-10 sm:py-16 bg-gray-100  '>
            <div>
            <div className="flex justify-center items-center gap-3 pb-8">
            <i className='bx bxl-facebook-circle  text-white bg-yellow-400 p-2 rounded-full text-3xl'></i>
            <i className='bx bxl-instagram  text-white bg-yellow-400 p-2 rounded-full text-3xl'></i>
            <i className='bx bxl-meta  text-white bg-yellow-400 p-2 rounded-full text-3xl'></i>
            <i className='bx bxl-linkedin text-white bg-yellow-400 p-2 rounded-full text-3xl'></i>
            <i className='bx bxl-youtube  text-white bg-yellow-400 p-2 rounded-full text-3xl'></i>
        </div>

                <div className='pb-5'>

                    <p className='text-gray-900 text-xl'>Copyright &copy 2024, <span className='text-2xl font-bold text-gray-900'>MAKE <span className='text-yellow-400'>MATION</span></span></p>
                </div>
                <div className='sm:flex justify-center gap-1 sm:gap-3 text-xl text-gray-900 grid grid-cols-1'>
                    <p className='sm:border-r-2 pr-1 sm:pr-3 border-gray-900'>Legal Policy</p>
                    <p className='sm:border-r-2 pr-1 sm:pr-3 border-gray-900'>Privacy Policy</p>
                    <p>Manage Cookies</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
