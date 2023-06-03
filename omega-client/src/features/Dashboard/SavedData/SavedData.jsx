import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'
const SavedData = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className="flex flex-col ml-[80px] absolute top-[112px] left-[300px]">
          <div className="mt-[50px] text-[24px] font-[600] text-[#0267FF]">
            Borrower’s Saved Data{" "}
          </div>
          <div className="mt-[19px] text-[18px] font-[600] text-[#666666]">
            Personal and contact Information
          </div>
          <div className="flex gap-[153px] mt-[58px]">
            <div className="flex flex-col gap-[24px]">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Email"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Address"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Employment Status"
              />
            </div>
            <div className="flex flex-col gap-[24px] ">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Phone Number"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Date Of Birth"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Password"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Loan Amount"
              />
            </div>
          </div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default SavedData