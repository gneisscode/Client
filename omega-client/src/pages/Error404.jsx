import React from 'react'
import HomeNav from '../components/HomeNav'
import Hamburger from '../components/Hamburger';

const Error404 = () => {
  return (
    <div>
      <HomeNav/>
      <Hamburger/>
      <div className='flex justify-center mt-8'>
        <img src="assets/error/error.png" alt='error-img' className='w-1/3'/>
      </div>
      <div className=' flex flex-col gap-4 items-center text-center mt-10 leading-4 text-base'>
        <p>We are sorry, the page you are looking for is not available.</p>
        <p>Perhaps you can try a new search.</p>
        <button className='bg-blue-600 mt-20 px-36 py-2 text-white w-[589px] h-[61px] rounded-[4px] hover:border-purple-500 hover:border-2 mb-16'>Go Back</button>
      </div>
      </div>
  )
}

export default Error404