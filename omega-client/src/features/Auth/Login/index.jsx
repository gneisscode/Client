import React, { useState } from 'react'
import AuthLayout from '../../../components/AuthLayout'
import Button from '../../../components/Button'
import TextField from '../../../components/TextField'
import { Link } from 'react-router-dom'

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
 
  
  return (
    <AuthLayout>
      <section className='mt-8  justify-center items-center px-28'>
        <div className='cursor-pointer' onClick={() => console.log('clicked')}>
          <img src='/assets/auth/backIcon.svg' alt='' />
        </div>
        <div>
          <h3 className=' mt-2 lg:text-4xl text-white text-center text-[1.5rem] leading-4'>
            Welcome back
          </h3>
          <p className='my-2 text-center text-[#e5e5e5df] text-base font-normal'>
            Log into your account
          </p>
          <p className='my-5 mb-10 text-center text-[#e5e5e5df] text-base font-normal'>
            Don't have an account?
            <span className='font-bold text-white ml-2'>
              <Link to='/login'>Sign up</Link>
            </span>
          </p>

          <div className='text-white'>
      
            <div className='mb-6'>
              <TextField placeholder='Email Address:' />
            </div>
            <div className='mb-2'>
              <TextField placeholder='Password:' />
            </div>
            <div className='flex justify-between items-center'>
            <div></div>
            <div>Forgot Password</div>
            </div>

            <div className='flex items-center gap-2'>
            <div className='bg-[#013E99] '>
            <input className='border border-colour-[#013E99]' type='checkbox'></input>
            </div>
            <div>Always keep me logged in</div>
            </div>
            
            
          </div>

          <div>
            <Button
              className='text-[#012966] mt-20 bg-white'
              onClick={() => console.log('clicked')}
              label='Log In'
            />
          </div>

          <div className='grid grid-cols-3 mt-7 items-center'>
            <hr className='border-[#013E99]' />
            <p className='text-center text-[#e5e5e5df]'>Or continue with</p>
            <hr className='border-[#013E99]' />
          </div>

          <div className='grid grid-cols-3 mt-7 items-center justify-items-center'>
            <img src='/assets/auth/email.svg' alt='' />
            <img src='/assets/auth/google.svg' alt='' />
            <img src='/assets/auth/apple-icon.svg' alt='' />
          </div>
        </div>
      </section>
    </AuthLayout>
  )
}

export default Login
