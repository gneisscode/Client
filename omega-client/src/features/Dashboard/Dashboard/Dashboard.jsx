import React from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import LoanCard from "../../../components/Dashboard/LoanCard";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex gap-8 ">
        <Sidebar />
        <div className=" max-w-[calc(100% - 323px)] lg:pt-[80px] lg:pl-[49px]">
          <div className="mb-[24px] text-[24px] font-[600] text-[#0267FF]">
            Dashboard
          </div>
          <div className="text-[#4D4D4D] text-[20px] font-[500]">Analysis</div>
          <div className="flex flex-wrap gap-[17px]">
            <Link to="/loans-generated">
              {" "}
              <LoanCard
                status="generated"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-refunded">
              {" "}
              <LoanCard
                status="refunded"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-declined">
              {" "}
              <LoanCard
                status="declined"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-pending">
              <LoanCard
                status="pending"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
