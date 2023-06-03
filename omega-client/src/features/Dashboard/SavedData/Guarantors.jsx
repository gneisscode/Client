import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'

const Guarantors = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className='flex flex-col ml-[80px] absolute top-[112px] left-[300px]'>
          <div className="mt-[50px] text-[24px] font-[600] text-[#0267FF]">
            Borrower’s Saved Data
          </div>
          <div className="mt-[19px] text-[18px] font-[600] text-[#666666]">
            Guarantors Information
          </div>
          <div className="flex gap-[153px] mt-[58px]">
            <div className="flex flex-col gap-[24px]">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Mr. Hakim Tunde"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Hatun@gmail.com"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="45 cresent Ikeja"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Brother-in-law"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="stocks, Real Estate"
              />
            </div>
            <div className="flex flex-col gap-[24px] ">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="+234675892364"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="20th December 1968"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Social Security Number"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Accountant"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="600,000 Naira"
              />
            </div>
          </div>
          <div className="flex gap-[153px] mt-[58px]">
                <div className="flex flex-col gap-[24px]">
                    <button>Previous</button>
                </div>
                <div className="flex flex-col gap-[24px] ">
                    <button>Ok</button>
                </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Guarantors
