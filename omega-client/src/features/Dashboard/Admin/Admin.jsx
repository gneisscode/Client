import React from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';
import { Link } from 'react-router-dom';


const Admin = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className="py-[40px] pl-[52px] absolute top-[112px] left-[300px]">
          <h4 className="text-blue-500 font-semibold text-xl">
            Admin Dashboard
          </h4>
          <div className="grid grid-cols-2 mt-3">
            <h3 className="text-green-500 font-semibold">
              Number of Admins (6)
            </h3>
            <Link to="/add-admin" className='justify-self-end'>
              <button className="justify-self-end bg-blue-500 px-3 pb-1 text-white rounded text-lg">
                <span className="text-2xl">{"\u002B"}</span> Add Admin
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="px-8 py-6 border-blue-500 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin1.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Mabel Johnson</h4>
                  <p className="text-xs">Manager</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-green-500 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin2.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Damilola Fanm</h4>
                  <p className="text-xs">Loan Officer</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-red-400 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin3.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Joel Charge</h4>
                  <p className="text-xs">Accountant</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-red-400 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin4.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Robinson Greg</h4>
                  <p className="text-xs">Secretary</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-blue-500 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin5.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Lucas Scott</h4>
                  <p className="text-xs">CEC Member</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-green-500 border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin6.png"
                  alt="admin-img"
                  className="w-[60px] h-[60px]"
                />
                <div className="">
                  <h4 className="text-[18px] font-semibold">Reger Man</h4>
                  <p className="text-xs">CEC Member</p>
                  <p className="text-[13px] mt-3">
                    <span className="">Active</span>
                    <span className="text-lg ml-2 text-green-500">
                      {"\u25CF"}
                    </span>
                  </p>
                </div>
              </div>
              <button className="flex mt-4 bg-blue-200 py-3 px-14 text-xs">
                Send a message
                <img
                  className="w-[15px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin