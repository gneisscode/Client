import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";
import PasswordBtn from "../../../components/PasswordBtn";
import React, { useState, useContext, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerificationCode = () => {
  const { user } = useContext(Context);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [formData, setFormData] = useState({
    fiveDigitToken: "",
  });
  const inputRefs = useRef([]);
  const showToastError = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleChange = (e, index) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    const updatedToken = newOtp.join("");
    setFormData({ ...formData, fiveDigitToken: parseInt(updatedToken) });

    if (e.target.value !== "" && index < otp.length - 1) {
      const nextInput = inputRefs.current[index + 1];
      nextInput.focus();
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`/password-reset/${id}`, formData);

      if (response.data === "Token Validated") {
        window.location.replace(`/change-password/${id}`);
      }
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      showToastError();
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        setServerError(errorMessage);
      } else {
        setServerError("Network error: Please check your internet connection");
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <ToastContainer />
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Enter Verification Code</h2>
      <p className="text-xl pb-4">Kindly enter the code sent to your mail</p>
      <div>
        <form onSubmit={handleSubmit}>
          {serverError && (
            <p className="text-red-500 text-center mb-4">{serverError}</p>
          )}
          <Card className="p-14 flex flex-col items-center gap-10 ">
            <div className="flex justify-center mt-5">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref)}
                  id={`otp-${index}`}
                  className="w-12 h-12 text-3xl border border-blue-300 rounded-full mx-2 text-center outline-none"
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
            <PasswordBtn text="Verify" loading={loading} />
          </Card>
        </form>
      </div>
    </div>
  );
};

export default VerificationCode;
