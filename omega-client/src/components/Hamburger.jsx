import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Hamburger = () => {
  const [active, setActive] = useState(false)

  const handleMenu = () => {
    setActive(!active)
  }
  return (
    <div className=' flex  justify-center items-center lg:hidden text-[#0267FF] w-[100%]'>
      {active ? (
        <div className=' flex flex-col w-[100%] h-[100vh] bg-[#ffffff] z-10 items-center mt-4 px-4'>
          <i className='fa-solid fa-xmark self-end' onClick={handleMenu}></i>
          <ul className='flex flex-col gap-[64px] text-xl font-medium justify-center items-center self-center'>
            <Link to='/' className='link'>
              <li>Home</li>
            </Link>

            <Link to='/about' className='link'>
              <li>About Us</li>
            </Link>

            <a href='/services' className='link'>
              Services
            </a>

            <Link to='/contact' className='link'>
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      ) : (
        <div className='flex w-[100%] justify-between items-center px-4 '>
          <div className='flex justify-center items-center self-center w-[100%] mt-2 gap-4'>
            <div className='text-[40px] font-[600] text-[#0252cc]'>Omega</div>
            <img src='/assets/omega-logo.png' alt='' />
          </div>
          <i className='fa-solid fa-bars' onClick={handleMenu}></i>
        </div>
      )}
    </div>
  )
}

export default Hamburger
