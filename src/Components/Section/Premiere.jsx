import React from 'react'
import imgOne from '../../assets/imgOne.jpg'
import { Link } from 'react-router-dom'

const Premiere = () => {
    return (
        <div>
            <div className='bg-gray-100'>
                <div className='py-16 mx-5 sm:mx-10  '>
                    <div className='border-l-8 border-yellow-400 py-3 sm:py-5' >
                        <h2 className='text-3xl sm:text-5xl font-semibold opacity-95 pl-3'>Premiere <span className='font-bold'>MAKE <span className='text-yellow-400'>MATION</span></span>  </h2>
                    </div>
                    <div className='mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2  gap-6'>
                        <div>
                            <h3 className='text-3xl font-semibold pb-2'>Meet The Actors.</h3>
                            <p className='text-xl leading-10'>The premiere of Make Mation, an AI-driven movie, promises to be an exciting and innovative event where technology and storytelling converge in a groundbreaking way. Make Mation isn't just a film; it's a showcase of what artificial intelligence can do in the realm of creativity, producing unique narratives, characters, and visual styles. At the premiere, audiences will have the rare opportunity not only to watch the film but also to meet the actors, adding a special interactive layer to the event. The actors in this movie are a blend of human talent and AI-generated characters, each playing a role in this fusion of reality and machine-driven imagination.</p>
                            <p className='text-2xl font-semibold py-3'>Don't Miss It !!!</p>
                            <Link to= ''>
                            <button className='bg-yellow-400 py-5 px-8 text-white text-xl font-semibold'>Join the Waitlist</button></Link>
                        </div>
                        <div>
                            <img src={imgOne} alt=""  className='rounded-md'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premiere
