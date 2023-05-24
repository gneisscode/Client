import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';


const AddAdmin = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar/>
        <div>AddAdmin</div>
      </div>
    </div>
  );
}

export default AddAdmin