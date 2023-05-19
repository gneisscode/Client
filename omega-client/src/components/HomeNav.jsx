import React from 'react'
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';


const HomeNav = () => {
  return (
    <div className='flex justify-around h-[112px] w-[full] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8'>
      <div className='flex justify-center items-center'>
        <img src="/assets/omega-logo.png" alt="" />
      </div>

      <ul className='flex gap-[64px] text-xl font-medium justify-center items-center'>
        <li>Home</li>
        <li>About Us</li>
        <li>Service</li>
        <li>Contact Us</li>
      </ul>

      <div className='flex gap-4 justify-center items-center'>
        <SecondaryButton text="Log In" />
        <PrimaryButton text="Sign Up" />
      </div>
    </div>
  );
}

export default HomeNav