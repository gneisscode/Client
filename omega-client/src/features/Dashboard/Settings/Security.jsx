import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../../components/Modal/modal'
import Button from '../../../components/Button'

const Security = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <section className='w-[500px] bg-slate-200 p-16 flex flex-col items-center justify-center'>
          <div className='mb-5'>
            <img src='/assets/auth/modalImage.svg' alt='' />
          </div>
          <p className='text-black text-center mb-5'>
            Your password has been changed. To confirm, kindly log into your
            account
          </p>
          <Link to='/login' className='link w-64'>
            <Button className='text-white bg-[#0267FF] w-64' label='Log In' />
          </Link>
          <Button
            className='text-red border-red-400  w-64'
            label='Cancel'
            onClick={() => setModal(false)}
          />
        </section>
      </Modal>

      <div className='text-[24px] font-[500] text-[#4D4D4D] mt-[40px] mb-[20px]'>
        Password Settings
      </div>
      <div className='font-[400] text-[20px] italic text-[#999999]'>
        Make sure a strong password is used, this is to ensure maximum security
        of your data
      </div>
      <div className='flex flex-col gap-[48px] mt-[43px] mb-[111px]'>
        <input
          type='text'
          className='w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded '
          placeholder='Old Password'
        />
        <input
          type='text'
          className='w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded '
          placeholder='New Password'
        />
        <input
          type='text'
          className='w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded '
          placeholder='Confirm New Password'
        />
      </div>
      <button
        className='w-[462px] h-[61px] bg-[#0267FF] text-[24px] font-[600] text-white rounded mb-8'
        onClick={() => setModal(true)}
      >
        Change Password
      </button>
    </div>
  )
}

export default Security
