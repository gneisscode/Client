import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Guarantors = () => {
  const [guarantorData, setGuarantorData] = useState([])
  const location = useLocation()
  const id = location.pathname.split("/")[2]


  function getLoanInfo(){
    axios.get(`https://nodebtdev.onrender.com/api/loans?id=${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(response => {
      setGuarantorData(response.data.data.borrower.guarantor)
  })
  .catch(error => {
    console.log(error);
  })
  }
  useEffect(() => {
    getLoanInfo()
  }, [])
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
            value={guarantorData.fullname}
            placeholder="Mr. Hakim Tunde"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            value={guarantorData.email}
            placeholder="Hatun@gmail.com"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            value={guarantorData.address}
            placeholder="45 cresent Ikeja"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            value={guarantorData.relationship}
            placeholder="Brother-in-law"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            value={guarantorData.otherSourcesOfIncome}
            placeholder="stocks, Real Estate"
          />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            value={guarantorData.phoneNumber}
            placeholder="+234675892364"
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="20th December 1968"
            value={guarantorData.age}
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Social Security Number"
            value={guarantorData.socialSecurityNumber}
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="Accountant"
            value={guarantorData.employmentType}
          />
          <input
            type="text"
            className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
            placeholder="600,000 Naira"
            value={guarantorData.incomePerMonth}
          />
        </div>
      </div>
    </>
  );
};

export default Guarantors;
