import React from 'react'
import HomeNav from '../components/HomeNav'

const Error404 = () => {
  return (
    <div>
      <HomeNav/>
      <div className='flex justify-center mt-8'>
        <img src="assets/error/error.png" alt='error' className='w-1/3'/>
      </div>
      <div className='text-center mt-10 leading-4 text-base'>
        <p>We are sorry, the page you are looking for is not available.</p>
        <p>Perhaps you can try a new search.</p>
        <button className='bg-blue-600 mt-24 px-36 py-2 text-white rounded-sm hover:border-purple-500 hover:border-2'>Go Back</button>
      </div>
      </div>
  )
}

export default Error404