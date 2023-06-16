import React, {useEffect, useState} from 'react'
import DashHeader from '../../../components/Dashboard/DashHeader';
import Sidebar from '../../../components/Dashboard/Sidebar';
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


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

useEffect(()=>{
  console.log(addAdmin)
}, [addAdmin])

 const [formErrors, setFormErrors] = useState({
   firstName: "",
   lastName: "",
   email: "",
   phoneNumber: "",
   role: "",
 });
 const [serverError, setServerError] = useState("");
 const [isLoading, setIsLoading] = useState(false);
  const showToastSuccess = () => {
    toast.success("Admin added successfully", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastError = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

 const validateField = (fieldName, value) => {
   let errorMessage = "";

   if (fieldName === "firstName" && !value) {
     errorMessage = "First Name is required";
   } else if (fieldName === "lastName" && !value) {
     errorMessage = "Last Name is required";
   } else if (fieldName === "email" && !value) {
     errorMessage = "Email is required";
   } else if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
     errorMessage = "Email is invalid";
   } else if (fieldName === "role" && !value) {
     errorMessage = "Position is required";
   } else if (fieldName === "phoneNumber" && !value) {
     errorMessage = "Phone Number is required";
   } else if (fieldName === "phoneNumber" && !/^\+\d{1,3}\d{6,14}$/.test(value)) {
     errorMessage = "Phone Number is invalid";
   }


   setFormErrors((prevErrors) => ({
     ...prevErrors,
     [fieldName]: errorMessage,
   }));
 };
const handleAdminInput = (e) => {
  
  const { name, value } = e.target
  setAddAdmin({ ...addAdmin, [name]: value })
  validateField(name, value);
}
const handleSubmit = async (event) => {
  event.preventDefault();
  const errors = {};
  Object.keys(addAdmin).forEach((fieldName) => {
    validateField(fieldName, addAdmin[fieldName]);
    if (formErrors[fieldName]) {
      errors[fieldName] = formErrors[fieldName];
    }
  });

  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    setIsLoading(false);
  } else{ 
    
    try {
      setIsLoading(true);
    const response = await axios.post("/admins/create", addAdmin, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(response.data.data);
    showToastSuccess()
    setIsLoading(false);
  } catch (error) {
    console.log(error.response);
    if (error.response && error.response.data && error.response.data.message) {
      const errorMessage = error.response.data.message;
      setServerError(errorMessage);
      showToastError()
      setIsLoading(false);
    } else {
      setServerError("Network error: Please check your internet connection");
      showToastError()
      setIsLoading(false)
    }
  }}
  
  
}
  return (
    <div className="flex flex-col">
      <ToastContainer />
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

            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[500] text-[#0267FF]">
              Add admin
            </div>
          </div>
          <p className="text-[#0267FF] text-[24px] font-[600] mt-[40px]">
            Add Admin
          </p>
          <p className="my-6 text-[24px] font-[500] ">Admin Information</p>
          {/* {serverError && <p className="text-red-500 mb-4">{serverError}</p>} */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="flex flex-col">
                <input
                  className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-black] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                  name="firstName"
                  value={addAdmin.firstName}
                  onChange={handleAdminInput}
                  type="text"
                  placeholder="First Name"
                />
                {formErrors.firstName && (
                  <p className="text-red-500">{formErrors.firstName}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-black] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                  type="email"
                  name="email"
                  value={addAdmin.email}
                  onChange={handleAdminInput}
                  placeholder="Email Address"
                />
                {formErrors.email && (
                  <p className="text-red-500">{formErrors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-black] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                  type="text"
                  name="lastName"
                  value={addAdmin.lastName}
                  onChange={handleAdminInput}
                  placeholder="Last Name"
                />
                {formErrors.lastName && (
                  <p className="text-red-500">{formErrors.lastName}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-black] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                  type="tel"
                  name="phoneNumber"
                  value={addAdmin.phoneNumber}
                  onChange={handleAdminInput}
                  placeholder="Phone Number e.g. +2348023456909"
                  title="Please enter numbers only"
                />
                {formErrors.phoneNumber && (
                  <p className="text-red-500">{formErrors.phoneNumber}</p>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  className="border w-[462px] h-[60px] py-[18px] pl-[25px] rounded text-[20px] font-[400] text-black] bg-[#FAFCFF] border-[#a09b9b] outline-none"
                  type="text"
                  name="role"
                  value={addAdmin.role}
                  onChange={handleAdminInput}
                  placeholder="Position in company"
                />
                {formErrors.role && (
                  <p className="text-red-500">{formErrors.role}</p>
                )}
              </div>
            </div>
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
              <button
                className="mt-2 bg-[#0267FF] text-[#FFFFFF] text-[24px] font-[600] w-[195px] h-[61px] ml-auto mr-8 p-2 rounded"
                type="submit"
              >
                {isLoading && (
                  <svg
                    aria-hidden="true"
                    class="inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                )}
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