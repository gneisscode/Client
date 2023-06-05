import React from "react";

const LoanInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] absolute top-[-100px]">
        <h3 className="text-[#0267FF] text-[24px] font-[600]">
          Borrower's Saved Data
        </h3>
        <h4 className="text-[#4D4D4D] text-[20px] font-[600]">
          Loan Information
        </h4>
      </div>
      <div className="flex gap-[153px] mt-[40px] ml-[50px]">
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Student Loan"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Input Credit report"
          />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Automatic transfer"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="350"
          />
        </div>
      </div>
      <div className="px-12 mt-12">
        <textarea
          className="bg-[#EEF5FC] border border-[#0267FF] w-[750px] h-[134px] px-4 py-4 rounded"
          placeholder="For payment of school fees"
        ></textarea>
      </div>
    </>
  );
};

export default LoanInfo;
