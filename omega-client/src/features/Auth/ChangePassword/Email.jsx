import React from 'react'
import PasswordBtn from "../../../components/PasswordBtn";
import SuccessIcon from "../../../components/SuccessIcon";
import { Link } from "react-router-dom";

const Email = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <SuccessIcon />
      <h2 className="text-[#4D4D4D] font-semibold text-2xl text-center w-[639px] h-[117px] mt-[2em] mb-[2em]">
        A link has been sent to your email address! Please follow the link sent to continue your password change process.
      </h2>
      <Link to="/login">
        <PasswordBtn
          text="Back to Login"
          className="ml-[2em] mt-[2em] w-[589px] h-[61px]"
        />
      </Link>
    </div>
  );
}

export default Email