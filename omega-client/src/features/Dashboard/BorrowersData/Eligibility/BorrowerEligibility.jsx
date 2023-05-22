import React from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";

const BorrowerEligibility = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />
        <div>BorrowerEligibility</div>
      </div>
    </div>
  );
};

export default BorrowerEligibility;
