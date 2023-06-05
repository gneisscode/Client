import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-[16px] absolute top-[-100px] ">
        <h3 className="text-[#0267FF] text-[24px] font-[600]">
          Borrower's Saved Data
        </h3>
        <h4 className="text-[#4D4D4D] text-[20px] font-[600]">
          Personal and contact Information
        </h4>
      </div>
      <div className="flex gap-[103px] mt-[58px] ml-[50px] ">
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Mr. Karim  Tunde "
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 "
            placeholder="kartun@gmail.com"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="45 cresent Ikeja"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Unemployed"
          />
        </div>
        <div className="flex flex-col gap-[24px]">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="+234658767520"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="13th August 1990"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="********"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="10,000 Naira"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
