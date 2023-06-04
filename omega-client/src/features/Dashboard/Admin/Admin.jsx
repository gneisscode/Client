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
          <h4 className="text-[#0267FF] font-semibold text-[24px]">
            Admin Dashboard
          </h4>
          <div className="grid grid-cols-2 mt-[20px]">
            <h3 className="text-[#04AB33] font-[500] text-[20px]">
              Number of Admins (6)
            </h3>
            <Link to="/add-admin" className='justify-self-end'>
              <button className="justify-self-end bg-[#0267FF] px-3 pb-1 text-[#FFFFFF] rounded text-[20px] font-[500]">
                <span className="text-2xl">{"\u002B"}</span> Add Admin
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="px-8 py-6 border-[#0252CC] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin1.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Mabel Johnson</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">Manager</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-[#04AB33] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin2.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Damilola Fanm</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">Loan Officer</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-[#F29509] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin3.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Joel Charge</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">Accountant</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-[#F29509] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin4.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Robison Greg</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">Secretary</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-[#0267FF] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin5.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Lucas Scott</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">CEC Member</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
                  src="assets/dashboard/Vector.png"
                  alt="button-img"
                />
              </button>
            </div>
            <div className="px-8 py-6 border-[#04AB33] border rounded-md bg-[#f4f7fc]">
              <div className="flex flex-row gap-10">
                <img
                  src="assets/dashboard/admin6.png"
                  alt="admin-img"
                  className="w-[67px] h-[67px]"
                />
                <div className="text-[#333333]">
                  <h4 className="text-[20px] font-[500]">Regar Man</h4>
                  <p className="text-[14px] font-[400] mt-[6px]">CEC Member</p>
                  <p className="flex text-[14px] font-[400] mt-[18px]">
                    <span className="">Active</span>
                    <img 
                      src='assets/dashboard/Ellipse 67.png'
                      alt='ellipse'
                      className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                      />
                  </p>
                </div>
              </div>
              <button className="flex mt-4 ml-[10px] bg-[#CCE1FF] py-3 px-14 text-[12px]">
                Send a message
                <img
                  className="w-[16px] h-[16px] ml-2 mt-1"
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