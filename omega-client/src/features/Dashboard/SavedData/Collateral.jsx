import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Collateral = () => {
  const [borrowerData, setBorrowerData] = useState([])
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
      console.log(response.data.data.borrower)
      setBorrowerData(response.data.data.borrower);
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
      <div className="flex flex-col gap-[16px] absolute top-[-100px]">
        <h3 className="text-[#0267FF] text-[24px] font-[600]">
          Borrower's Saved Data
        </h3>
        <h4 className="text-[#4D4D4D] text-[20px] font-[600]">
          Collateral Information
        </h4>
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-[150px] mt-[58px] ml-[50px]">
          <div className="flex flex-col gap-[24px]">
            <input
              type="text"
              className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
              value={borrowerData.collateralValue}
              placeholder="Cash equivalent"
            />
          </div>
          <div className="flex flex-col gap-[24px] ">
            <input
              type="text"
              className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4"
              value={borrowerData.collateralType}

              placeholder="Lands"
            />
          </div>
        </div>
        <div className="px-12 mt-24 ">
          <textarea
            className="bg-[#EEF5FC] border border-[#0267FF] w-[758px] h-[200px] px-6 py-5 rounded"
            value={borrowerData.collateralInformation}
            placeholder=" Buildings located in Abuja"
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Collateral;
