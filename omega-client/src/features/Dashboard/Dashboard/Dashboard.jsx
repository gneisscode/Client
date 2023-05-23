import React from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />

        <div className="">Dashboard</div>
      </div>
    </div>
  );
};

export default Dashboard;
