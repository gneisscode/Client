mport React from 'react'

const LoanInfo = () => {
  return (
    <div className='flex flex-col ml-[80px] absolute top-[112px] left-[300px]'>
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
    </div>
  )
}

export default LoanInfo
