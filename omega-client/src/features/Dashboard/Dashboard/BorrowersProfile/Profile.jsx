import React from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="w-[982px] pl-[52px] pt-16 absolute top-[112px] left-[300px]">
          <div className="flex bg-blue-100 p-16 justify-between align-middle">
            <div className="flex flex-col">
              <h2 className="font-semibold mb-8">Blessing Effiong</h2>
              <p className="text-[#666666] font-normal text-sm">
                Date: 677/89/9089
              </p>
            </div>
            <div>
              <select className="bg-[#0267FF] text-white p-2">
                <option className="" value="">
                  Change status
                </option>
                <option value="Successful">Successful</option>
                <option value="Pending">Pending</option>
                <option value="Declined">Declined</option>
              </select>
            </div>
          </div>

          <div className="p-16">
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Loan Amount:</h3>
              <p>#5,000,000</p>
            </div>
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Loan Status:</h3>
              <p>Declined</p>
              {/* {status === 'Successful' && <p className='text-green'>{status}</p>}
            {status === 'Pending' && <p className='text-orange'>{status}</p>}
            {status === 'Declined' && <p className='text-red'>{status}</p>} */}
            </div>
            <div className="flex gap-5 mb-8">
              <h3 className="w-32">Admin in charge:</h3>
              <p>Mabel Okeke</p>
            </div>
          </div>

          <div>
            <Link to="/borrower-data">
              <p className="flex p-16 gap-16 text-[#0267FF]">
                View Borrower's Data
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile
