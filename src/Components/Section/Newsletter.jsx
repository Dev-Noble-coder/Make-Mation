import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-900 py-20 px-5 sm:px-10 lg:px-20 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Stay Updated on Make Mation</h2>
      <p className="text-gray-300 mb-8 text-xl">
        Subscribe to our newsletter to get the latest updates about the <span className='text-2xl font-bold'>MAKE <span className='text-yellow-400'>MATION</span></span> AI movie premiere and behind-the-scenes stories.
      </p>
      
      <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 w-full sm:w-auto flex-grow text-black rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md transition duration-300 w-full sm:w-auto text-xl"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
