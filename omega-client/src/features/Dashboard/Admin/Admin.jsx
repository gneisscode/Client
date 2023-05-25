import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';


const Admin = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar/>
        <div>Admin</div>
      </div>
    </div>
  );
}

export default Admin