import React from 'react'
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";

const BorrowersData = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />
        <div>BorrowersData</div>
      </div>
    </div>
  );
}

export default BorrowersData