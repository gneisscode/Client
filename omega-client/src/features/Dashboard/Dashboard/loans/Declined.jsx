import React from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader';
import Sidebar from '../../../../components/Dashboard/Sidebar';

const Declined = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />

        <div className="lg:w-[938px] lg:h-[fit] bg-[#FAFCFF] border border-[#CCE1FF] ml-[44px] mt-[128px] mb-16">
          Declined
        </div>
      </div>
    </div>
  );
}

export default Declined