import React from 'react'
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";


const SendStatus = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="flex flex-col pl-8 pt-[160px]  w-[982px] gap-4 absolute top-[112px] left-[300px]">
          <h3 className="text-blue-600">
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