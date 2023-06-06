import LockIcon from '../../../components/LockIcon';
import Card from '../../../components/Card';
import PasswordBtn from '../../../components/PasswordBtn';
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from '../../../context/Context';
import axios from 'axios';


const VerificationCode = () => {
  const { user } = useContext(Context);
  
    const [otp, setOtp] = useState(['', '', '', '', '']);
    const [formData, setFormData] = useState({
      fiveDigitToken: "",
    });
  
    const handleChange = (e, index) => {
      const newOtp = [...otp];
      newOtp[index] = e.target.value;
      setOtp(newOtp);
      setFormData({fiveDigitToken: parseInt(otp.join(''))})
      console.log(otp)
      console.log(formData)
    };
    const handleSubmit = async (event) => {
      event.preventDefault()
      try {
        const response = await axios.post(
          `/password-reset/${user.adminId}`, formData
        );
        console.log(response.data.data);
        const data = response.data.data;
      } catch (error) {
        console.log(error);
      }
    }
  
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Enter Verification Code</h2>
      <p className="text-xl pb-4">Kindly enter the code sent to your mail</p>
      <div>
        <Card className="p-14 flex flex-col items-center gap-10 ">
          <form onSubmit={handleSubmit}>
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

            <PasswordBtn text="Verify" />
          </form>
        </Card>
      </div>
    </div>
  );
}

export default VerificationCode;
