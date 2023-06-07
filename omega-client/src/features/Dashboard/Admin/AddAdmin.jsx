import React, {useState} from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import axios from "axios";


const AddAdmin = () => {
  const fileUpload = React.useRef(null);
  const handleClick = event => {
    fileUpload.current.click();
  }
const [addAdmin, setAddAdmin] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  role: "",
  loginURL: "https://omega-prediction-app.netlify.app/login",
});
const handleAdminInput = (e) => {
  const { name, value } = e.target
  setAddAdmin({ ...addAdmin, [name]: value })
}
const handleSubmit = async (event) => {
  event.preventDefault();
  try{
      const response = await axios.post("/admins/create",
      addAdmin,
      { headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`}}
      );
      console.log(response.data.data)
  } catch (error) {
    console.log(error.response)
  }
}
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className=" pl-[52px] py-10 w-[982px] absolute top-[112px] left-[300px]">
          <div className="flex gap-4">
            <Link to="/admin">
              <div className="text-[20px] font-[400] text-[#808080]">
                Admin dashboard
              </div>
            </Link>

            <img src="assets/dashboard/arrowdark.svg" alt="" />
            <div className="text-[20px] font-[500] text-[#333333]">
              Add admin
            </div>
          </div>
          <p className="text-[#0267FF] text-[24px] font-[600] mt-[40px]">
            Add Admin
          </p>
            <p className="my-6 text-[24px] font-[500] ">Admin Information</p>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-2 gap-8 mb-16'>
                  <input
                    className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-[#B3B3B3] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                    name='firstName'
                    value={addAdmin.firstName}
                    onChange={handleAdminInput}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-[#B3B3B3] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                    type="email"
                    name='email'
                    value={addAdmin.email}
                    onChange={handleAdminInput}
                    placeholder="Email Address"
                  />
                  <input
                    className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-[#B3B3B3] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                    type="text"
                    name='lastName'
                    value={addAdmin.lastName}
                    onChange={handleAdminInput}
                    placeholder="Last Name"
                  />
                  <input
                    className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-[#B3B3B3] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                    type="tel"
                    name='phoneNumber'
                    value={addAdmin.phoneNumber}
                    onChange={handleAdminInput}
                    placeholder="Phone Number"
                  />
                  <input
                    className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-[#B3B3B3] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                    type="text"
                    name='role'
                    value={addAdmin.role}
                    onChange={handleAdminInput}
                    placeholder="Position in company"
                  />
              </div>
            <hr className="text-[#B3B3B3]" />
              {/* <div>
                <p className="text-[24px] mt-8 font-[500]">Add Image</p>
                <div className="flex justify-center mt-[60px] text-center">
                  <img
                    className="w-[120px] h-[120px]"
                    src="assets/dashboard/cloud-computing 1.png"
                    alt="admin-img"
                  />
                </div>
                <p className="text-center mt-[40px] font-[500] text-[24px] text-[#666666]">
                  Upload an image to use as profile picture
                </p>
                <p className="text-center font-[400] text-[24px] text-[#666666]">
                  <i>Compatible file type: .jpg, .png, .svg, .bmp or .dxf</i>
                </p>
              </div> */}
              <div className="flex flex-col">
                {/* <button
                  onClick={handleClick}
                  className="mt-12 bg-[#0267FF] text-[#FFFFFF] text-[24px] font-[600] w-[334px] h-[61px] mx-auto rounded"
                >
                  Upload Image
                </button>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  ref={fileUpload}
                /> */}
                <button className="mt-32 bg-[#0267FF] text-[#FFFFFF] text-[24px] font-[600] w-[195px] h-[61px] ml-auto mr-8 p-2 rounded" type='submit'>
                  Save
                </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddAdmin