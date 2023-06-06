import React from 'react'
import LockIcon from '../../../components/LockIcon'
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Forgot Password</h2>
      <p className="text-xl pb-4">
        Kindly insert your email below, a verification code will be sent to you,
        make sure you enter the correct email.
      </p>
      <div>
        <Card className="p-14 flex flex-col items-center gap-10 ">
          <input
            className="border border-blue-600 w-[589px] h-[61px] p-6"
            placeholder="Email address:"
          />
          <Link to="/verify">
            <PasswordBtn text="Send" />
          </Link>
          <p className="text-blue-600 p-12 flex flex-col items-centre">
            <Link to="/login">Back to sign in</Link>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword