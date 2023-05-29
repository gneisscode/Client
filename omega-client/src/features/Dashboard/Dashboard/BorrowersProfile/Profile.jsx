import React from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'

const Profile = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />
    <div>Profile</div>
    </div>
    </div>
  )
}

export default Profile