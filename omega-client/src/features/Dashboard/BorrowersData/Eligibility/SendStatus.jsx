import React from 'react'
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { Link } from 'react-router-dom';


const SendStatus = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="flex flex-col pl-8 pt-[40px]  w-[982px] gap-4 absolute top-[112px] left-[300px]">
          <div className="flex gap-4">
            <Link to="/borrower-data">
              <div className="text-[20px] font-[400] text-[#808080]">
                Input borrower's data{" "}
              </div>
            </Link>
             <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[400] text-[#808080]">
              Borrower's data preview
            </div>
             <i className="fa-solid fa-chevron-right mt-2"></i>
            <Link to="/borrower-eligibility">
              <div className="text-[20px] font-[400] text-[#808080]">
                Loan Eligibility Status
              </div>
            </Link>
             <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[400] text-[#0267FF]">
              Send Message
            </div>
          </div>
          <h3 className="text-[#0267FF] font-[600] text-[24px] mt-4">
            Send Loan Eligibility Status To Borrower
          </h3>
          <p>
            <i>
              Choose to send the eligibility status and financial advice of the
              borrower via Email or text message
            </i>
          </p>
          <div className="flex flex-col gap-2 mt-12">
            <button className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] flex items-center justify-center gap-4">
              Send Via Gmail
              <img src="assets/eligibility/logos_google-icon.svg" />
            </button>
            <button className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] flex items-center justify-center gap-4">
              Send Via Text Message{" "}
              <img src="assets/eligibility/ic_baseline-email.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendStatus