import React, { useEffect, useState } from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';
import { Link} from 'react-router-dom';
import axios from "axios";


const Admin = () => {
  let users = JSON.parse(localStorage.getItem("user"))
  const [loading, setLoading] = useState(true);
  let organDetail = users.organisationId._id;
  const [admin, setAdmin] = useState([])
  function fetchAdminData(){
    axios.get(`/admins/?organisationId=${organDetail}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
      )
    .then(response => {
        console.log(response.data.data.admins)
        setAdmin(response.data.data.admins);
        setLoading(false)
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    })
    
  }
  useEffect(() => {
    fetchAdminData()
  }, [])


  function removeNull(value){
    return value !==null;
  }
  let filteredAdmin = admin.filter(removeNull);
  console.log(filteredAdmin)

  const colours = ["#0252CC", "#F29509", "#04AB33" ];
  const getColour = () => colours[Math.floor(Math.random() * colours.length)];

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        {loading === true ? (
          <div
            role="status"
            className=" flex mt-20 justify-center items-center absolute top-[212px] left-[750px]"
          >
            <svg
              aria-hidden="true"
              className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="py-[40px] px-[52px] absolute top-[112px] left-[300px]">
            <h4 className="text-[#0267FF] font-semibold text-[24px]">
              Admin Dashboard
            </h4>
            <div className="grid grid-cols-2 mt-[20px]">
              <h3 className="text-[#04AB33] font-[500] text-[20px]">
                Number of Admins ({filteredAdmin?.length})
              </h3>
              <Link to="/add-admin" className="justify-self-end">
                <button className="justify-self-end bg-[#0267FF] px-3 pb-1 text-[#FFFFFF] rounded text-[20px] font-[500] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
                  <span className="text-2xl">{"\u002B"}</span> Add Admin
                </button>
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10">
              {filteredAdmin &&
                filteredAdmin.length > 0 &&
                filteredAdmin.map((adm) => {
                  return (
                    <div
                      style={{ borderColor: getColour() }}
                      className="px-8 py-6 border rounded-md bg-[#f4f7fc]"
                    >
                      <div className="flex flex-row gap-10">
                        <img
                          src={adm.imageUrl}
                          alt="admin-img"
                          className="w-[67px] h-[67px]"
                        />
                        <div className="text-[#333333]">
                          <h4 className="text-[20px] font-[500]">
                            {adm.firstName} {adm.lastName}
                          </h4>
                          <p className="text-[14px] font-[400] mt-[6px]">
                            {adm.role}
                          </p>
                          {adm.phoneNumber && (
                            <p className="text-[14px] font-[400] mt-[6px] text-blue-500">
                              <span className="text-[#333333]">
                                Phone number:
                              </span>{" "}
                              {adm.phoneNumber}
                            </p>
                          )}
                          {/* <p className="flex text-[14px] font-[400] mt-[18px]">
                              <span className="">Active</span>
                              <img 
                                src='assets/dashboard/Ellipse 67.png'
                                alt='ellipse'
                                className='w-[10px] h-[10px] mt-[7px] ml-[5px]'
                                />
                            </p> */}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin


