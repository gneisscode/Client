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
      <div className="flex ">
        <Sidebar />
        <div>LoanApplications</div>
      </div>
    </div>
  );
}

export default LoanApplications