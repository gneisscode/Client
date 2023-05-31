import React from 'react'
import LockIcon from '../../../components/LockIcon'
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';


const ForgotPassword = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-[68px] pb-[2em] gap-8">
      <LockIcon />
      <h1 className="ml-[2em] mt-[2em]">Forgot Password</h1>
      <p className="text-xl pb-4">kindly insert your email below, a verification code will be sent to you
        , make sure you enter the correct email
      </p>
      <Card className= "h-[506px]">
        <input className="border border-blue-600 w-[589px] h-[61px] p-6" placeholder="Email Address:"/>
        <PasswordBtn text="Send" className="ml-[2em] mt-[2em]" />
        <p className="text-xl text-blue ml-[2em] mt-[2em]"><Link to='/login'>Back to Sign In</Link></p>
      </Card>
    </div>
  );
}

export default ForgotPassword
