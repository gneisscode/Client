import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader'
import Sidebar from '../../../components/Dashboard/Sidebar'

const LoanInfo = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
          <Sidebar />
          <div className='flex flex-col ml-[80px] absolute top-[112px] left-[300px]'>
            <div className="mt-[50px] text-[24px] font-[600] text-[#0267FF]">
              Borrower’s Saved Data
            </div>
            <div className="mt-[19px] text-[18px] font-[600] text-[#4D4D4D]">
              Loan Information
            </div>
            <div className="flex gap-[153px] mt-[58px]">
                <div className="flex flex-col gap-[24px]">
                  <input
                    type="text"
                    className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                    placeholder="Student Loan"
                  />
                  <input
                    type="text"
                    className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                    placeholder="Input Credit report"
                  />
                </div>
                <div className="flex flex-col gap-[24px] ">
                  <input
                    type="text"
                    className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                    placeholder="Automatic transfer"
                  />
                  <input
                    type="text"
                    className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                    placeholder="350"
                  />
                </div>
            </div>
            <div className='px-8 mt-12'>
                <textarea
                    className='bg-[#EEF5FC] border border-[#0267FF] w-[983px] h-[134px] px-4 py-4 rounded'
                    placeholder='For payment of school fees'
                ></textarea>
            </div>
            <div className="flex gap-[153px] mt-[58px]">
                <div className="flex flex-col gap-[24px]">
                    <button>Previous</button>
                </div>
                <div className="flex flex-col gap-[24px] ">
                    <button>Next</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoanInfo
