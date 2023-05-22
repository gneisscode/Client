import React from 'react'
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";

const SendStatus = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />
        <div>SendStatus</div>
      </div>
    </div>
  );
}

export default SendStatus