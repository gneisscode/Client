import LockIcon from '../../../components/LockIcon';
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const VerificationCode = () => {
    const [otp, setOtp] = useState(['', '', '', '', '']);
  
    const handleChange = (e, index) => {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);
    };
  
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Enter Verification Code</h2>
      <p className="text-xl pb-4">Kindly enter the code sent to your mail</p>
      <div>
        <Card className="p-14 flex flex-col items-center gap-10 ">
          <div className="flex justify-center mt-5">
            {otp.map((digit, index) => (
              <input
                key={index}
                className="w-12 h-12 text-3xl border border-blue-300 rounded-full mx-2 text-center"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
          <p className="p-6 mb-10">
            Didn't get the code?{" "}
            <a href="#" className="text-blue-600">
              Resend
            </a>
          </p>

          <Link to="/change-password">
            <PasswordBtn text="Verify" />
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default VerificationCode;
