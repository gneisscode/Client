import React, { useState } from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Security from "./Security";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState(<Profile/>); // State to keep track of the current page

  const handlePage = (pageComponent) => {
    setCurrentPage(pageComponent); // Update the current page state
  };

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col pl-[54px] pt-[80px]">
          <div className="text-[24px] text-[#0267FF] font-[600]">Settings</div>

          <div className="flex gap-[56px] mt-[24px]">
            <div
              onClick={() => handlePage(<Profile />)}
              className="cursor-pointer text-[24px] text-[#808080] font-[400]"
            >
              Profile
            </div>
            <div
              onClick={() => handlePage(<Notifications />)}
              className="cursor-pointer text-[24px] text-[#808080] font-[400]"
            >
              Notifications
            </div>
            <div
              onClick={() => handlePage(<Security />)}
              className="cursor-pointer text-[24px] text-[#808080] font-[400]"
            >
              Security
            </div>
          </div>

          <div className="page">{currentPage}</div>
        </div>
      </div>
    </div>
  );
};

// Example page components
const ProfilePage = () => {
  return <div>Profile Page Content</div>;
};

const NotificationsPage = () => {
  return <div>Notifications Page Content</div>;
};

const SecurityPage = () => {
  return <div>Security Page Content</div>;
};

export default Settings;
