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
                placeholder="Mr. Karim Tunde"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="kartun@gmail.com"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="45 cresent Ikeja"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Unemployed"
              />
            </div>
            <div className="flex flex-col gap-[24px] ">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="+234658767520"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="13th August 1990"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="********"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="10,000 Naira"
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
