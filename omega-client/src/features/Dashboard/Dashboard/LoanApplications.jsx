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
        <div className="pl-[52px] py-[40px] w-[982px] font-semibold text-gray-600 absolute top-[112px] left-[300px]">
          <div className="grid grid-cols-2 w-[982px]">
            <h4 className="text-blue-600 font-bold text-2xl hover:underline">
              Loan Applications
            </h4>
            <p className="text-2xl justify-self-end mr-20">{"\u2630"} Filter</p>
          </div>
          <div className="mt-10 grid grid-cols-5 p-2 gap-10 bg-blue-100 px-12 hover:border-blue-500 hover:border-2 text-sm w-[982px]">
            <h6>Borrowers Name</h6>
            <h6>Date</h6>
            <h6>Status</h6>
            <h6>Credit Score</h6>
            <h6>Amount</h6>
          </div>
          {data.map((dt) => {
            return (
              <div className="mt-6 grid grid-cols-5 p-2 gap-10 bg-[#FAFCFF] px-12 hover:border-blue-500 hover:border-2 text-sm w-[982px]">
                <p>{dt["Borrowers Name"]}</p>
                <p>{dt.Date}</p>
                <p
                  className={
                    dt.Status === "Successful"
                      ? "text-green-600"
                      : dt.Status === "Pending"
                      ? "text-orange-300"
                      : "text-red-600"
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