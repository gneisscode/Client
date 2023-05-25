import React from 'react'
import PasswordBtn from '../../../components/PasswordBtn'
import SuccessIcon from '../../../components/SuccessIcon'

const ChangeSuccess = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <SuccessIcon />
        <h2 className="text-[#4D4D4D] font-semibold text-4xl text-center w-[639px] h-[117px] mt-[2em] mb-[2em]">Your password change process is successful. You now have a new password.</h2>
        <PasswordBtn text="Log in your account" className="ml-[2em] mt-[2em] w-[589px] h-[61px]" />
    </div>
  )
}

export default ChangeSuccess