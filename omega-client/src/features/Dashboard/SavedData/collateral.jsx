import React from 'react'

const collateral = () => {
  return (
    <div className='flex flex-col ml-[80px]'>
        <div className="mt-[50px] text-[24px] font-[600] text-[#0267FF]">
           Borrower’s Saved Data
        </div>
        <div className="mt-[19px] text-[18px] font-[600] text-[#4D4D4D]">
           collateral Information
        </div>
        <div className="flex gap-[153px] mt-[58px]">
            <div className="flex flex-col gap-[24px]">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Type of Asset"
              />
            </div>
            <div className="flex flex-col gap-[24px] ">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Repayment Term"
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[400px] h-[60px] p-4"
                placeholder="Input credit score"
              />
            </div>
        </div>
        <div className='px-8 mt-12'>
            <textarea
                className='bg-[#EEF5FC] border border-[#0267FF] w-[983px] h-[134px] px-4 py-4 rounded'
                placeholder='Purpose of Loan'
            ></textarea>
        </div>
        <button>Next</button>
    </div>
  )
}

export default collateral