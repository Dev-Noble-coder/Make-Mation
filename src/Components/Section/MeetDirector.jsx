import React from 'react'
import toyosiImg from '../../assets/toyosiImg.jpg'
import { Link } from 'react-router-dom'

const MeetDirector = () => {
  return (
    <div className='bg-gray-100'>
      <div className='py-16 mx-5 sm:mx-10 '>
            <div className='border-l-8 border-yellow-400 py-3 sm:py-5' >
                <h2 className='text-3xl sm:text-5xl font-semibold opacity-95 pl-3'>Meet The Mastermind</h2>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-2 place-items-center mt-10 sm:mt-16'>
                <div>
                    <h3 className='text-2xl font-semibold pb-2'>Toyosi Akerele Ogunsiji</h3>
                    <p className='text-xl leading-8 sm:leading-10'>Toyosi Akerele-Ogunsiji born Oluwatoyosi Akerele, 8 November 1983 is a Nigerian social entrepreneur and human development expert whose work cuts across entrepreneurship, education, youth development and public leadership. She is the founder and chief executive officer of Rise Networks, a Nigeria-based private and public sector funded clarification needed Youth Interest social enterprise.</p>
                    <p className='text-xl leading-8 sm:leading-10 pb-5'>She is the director of the movie called <span className='text-2xl font-bold'>MAKE <span className='text-yellow-400'>MATION</span></span></p>
                    <Link to='/aboutTheAuthor'><button className='bg-yellow-400 py-5 px-14 text-white text-xl font-semibold rounded-sm'>Learn More</button></Link>
                </div>
                <div>
                    <img src= {toyosiImg} alt="" className=' h-[320px] sm:h-[600px] rounded-md' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MeetDirector
