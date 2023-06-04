import React, { useState } from 'react'
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";


const LoanApplications = () => {
    const [data, SetData] = useState([
      {
        "Borrowers Name": "Blessing Effiong",
        Date: "15/02/23",
        Status: "Successful",
        "Credit Score": 520,
        Amount: "#5,000,000",
      },

      {
        "Borrowers Name": "Blessing Effiong",
        Date: "15/02/23",
        Status: "Pending",
        "Credit Score": 520,
        Amount: "#5,000,000",
      },

      {
        "Borrowers Name": "Blessing Effiong",
        Date: "15/02/23",
        Status: "Declined",
        "Credit Score": 520,
        Amount: "#5,000,000",
      },
    ]);

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="pl-[52px] py-[40px] w-[982px] font-semibold text-[#666666] absolute top-[112px] left-[300px]">
          <div className="w-[982px]">
            <h4 className="text-[#0267FF] font-[600] text-[24px] w-[208px]">
              Loan Applications
            </h4>
          </div>
          <div className=" justify-center items-center mt-8 grid grid-cols-5 p-2 gap-10 bg-[#E6F0FF] px-12 text-[16px] w-[982px]  h-[51px]">
            <h6>Borrowers Name</h6>
            <h6>Date</h6>
            <h6>Status</h6>
            <h6>Credit Score</h6>
            <h6>Amount</h6>
          </div>
          {data.map((dt) => {
            return (
              <div className=" justify-center items-center mt-6 grid grid-cols-5 p-2 gap-10 bg-[#FAFCFF] px-12 text-[16px] w-[982px] h-[50px] text-[#666666]">
                <p>{dt["Borrowers Name"]}</p>
                <p>{dt.Date}</p>
                <p
                  className={
                    dt.Status === "Successful"
                      ? "text-[#4ED273]"
                      : dt.Status === "Pending"
                      ? "text-[#E48900]"
                      : "text-[#FF2727]"
                  }
                >
                  {dt.Status}
                </p>
                <p>{dt["Credit Score"]}</p>
                <p>{dt.Amount}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default LoanApplications