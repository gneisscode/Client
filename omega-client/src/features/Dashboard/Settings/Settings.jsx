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
      <div className="flex relative">
        <Sidebar />
        <div className="flex flex-col pl-[54px] pt-[80px] w-[982px] absolute top-[112px] left-[300px]">
          <div className="text-[24px] text-[#0267FF] font-[600]">Settings</div>

          <div className="flex gap-[56px] mt-[24px]">
            <div
              onClick={() => handlePage(<Profile />)}
              className={`cursor-pointer text-[24px] font-[400] ${
                currentPage.type === Profile
                  ? "border-b-2 border-[#666666] text-[#4D4D4D] "
                  : " text-[#808080]"
              }`}
            >
              Profile
            </div>
            <div
              onClick={() => handlePage(<Notifications />)}
              className={`cursor-pointer text-[24px] font-[400] ${
                currentPage.type === Notifications
                  ? "border-b-2 border-[#666666] text-[#4D4D4D] "
                  : " text-[#808080]"
              }`}
            >
              Notifications
            </div>
            <div
              onClick={() => handlePage(<Security />)}
              className={`cursor-pointer text-[24px] font-[400] ${
                currentPage.type === Security
                  ? "border-b-2 border-[#666666] text-[#4D4D4D] "
                  : " text-[#808080]"
              }`}
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


export default Settings;
