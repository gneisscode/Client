import React from 'react'
import LockIcon from '../../../components/LockIcon'
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';


const ForgotPassword = () => {
  return (
    <div className=" flex flex-col justify-center items-center pt-[68px] pb-[2em] gap-8">
      <LockIcon />
      <Card>
        <div className="ml-[2em] mt-[2em]">Forgot Password</div>
        <PasswordBtn text="Send" className="ml-[2em] mt-[2em]" />
      </Card>
    </div>
  );
}

export default ForgotPassword