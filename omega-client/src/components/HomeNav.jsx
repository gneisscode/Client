import React from 'react'
import Button from './Button'

const HomeNav = () => {
  return (
    <div className='hidden lg:flex justify-around h-[112px] w-[100%] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8'>
      <div className='flex justify-center items-center'>
        <img src='/assets/omega-logo.png' alt='' />
      </div>

      <ul className='flex gap-[64px] text-xl font-medium justify-center items-center self-center'>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>

      <div className='flex gap-4 justify-center items-center'>
        <Button
          className=' border border-[#0267FF] text-[#0267FF]'
          label='Log In'
        />
        <Button className='bg-[#0267FF] text-white' label='Sign Up' />
      </div>
    </div>
  )
}

export default HomeNav
