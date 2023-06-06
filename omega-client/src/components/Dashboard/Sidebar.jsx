import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex flex-col lg:h-[100%] lg:min-w-[300px] bg-[#FAFCFF]">
      <div className="flex flex-col justify-center pl-[40px] pt-[80px] gap-[80px]">
        <Link to="/dashboard">
          <div className="flex gap-[10px]">
            <img src="assets/dashboard/dash.svg" alt="" />
            <div className="text-[#0267FF] text-[20px] font-600">Dashboard</div>
          </div>
        </Link>

        <Link to="/borrower-data">
          <div className="flex gap-[10px]">
            <img src="assets/dashboard/borrow.svg" alt="" />
            <div className="text-[#999999] text-[20px] font-600">
              Borrower's Data
            </div>
          </div>
        </Link>

        <Link to="/loan-applications">
          <div className="flex gap-[10px]">
            <img src="assets/dashboard/loans.svg" alt="" />
            <div className="text-[#999999] text-[20px] font-600">
              Loan Applications
            </div>
          </div>
        </Link>

        <Link to="/history">
          <div className="flex gap-[10px]">
            <img src="assets/dashboard/history.svg" alt="" />
            <div className="text-[#999999] text-[20px] font-600">History</div>
          </div>
        </Link>

        <div className="flex gap-[10px]">
          <img src="assets/dashboard/admin.svg" alt="" />
          <div className="text-[#999999] text-[20px] font-600">Admin</div>
        </div>

        <div className="flex gap-[10px]">
          <img src="assets/dashboard/settings.svg" alt="" />
          <div className="text-[#999999] text-[20px] font-600">Settings</div>
        </div>

        <div className="flex gap-[10px]">
          <img src="assets/dashboard/help.svg" alt="" />
          <div className="text-[#999999] text-[20px] font-600">
            Help & Support
          </div>
        </div>

        <div className="flex gap-[10px] mt-[175px] mb-16">
          <img src="assets/dashboard/logout.svg" alt="" />
          <div className="text-[#999999] text-[20px] font-600">Log out</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar