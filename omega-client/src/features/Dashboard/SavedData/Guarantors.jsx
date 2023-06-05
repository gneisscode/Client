import React from "react";

const Guarantors = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] absolute top-[-100px] ">
        <h3 className="text-[#0267FF] text-[24px] font-[600]">
          Borrower's Saved Data
        </h3>
        <h4 className="text-[#4D4D4D] text-[20px] font-[600]">
          Guarantor's Information
        </h4>
      </div>
      <div className="flex gap-[153px] mt-[58px] ml-[50px]">
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Mr. Hakim Tunde"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Hatun@gmail.com"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="45 cresent Ikeja"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Brother-in-law"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="stocks, Real Estate"
          />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="+234675892364"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="20th December 1968"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Social Security Number"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Accountant"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="600,000 Naira"
          />
        </div>
      </div>
    </>
  );
};

export default Guarantors;
