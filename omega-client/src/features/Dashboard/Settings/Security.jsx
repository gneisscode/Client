import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal/modal";
import Button from "../../../components/Button";
import { Context } from "../../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Security = () => {
  const { user } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [serverError, setServerError] = useState("");

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
      validateField(name, value);
      setServerError("");
      console.log(formData);
    };



   const validateField = (fieldName, value) => {
     let errorMessage = "";

     if (fieldName === "oldPassword" && !value) {
       errorMessage = "Old Password is required";
     } if (fieldName === "newPassword" && !value) {
       errorMessage = "New Password is required";
     }if (fieldName === "confirmNewPassword" && value !== formData.newPassword) {
       errorMessage = "Passwords do not match!";
     }

     setFormErrors((prevErrors) => ({
       ...prevErrors,
       [fieldName]: errorMessage,
     }));
   };

     const showToastError = () => {
       toast.error("Something went wrong!", {
         position: toast.POSITION.TOP_RIGHT,
       });
     };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const errors = {};
    setIsLoading(true);

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsLoading(false);
      showToastError()
    } else {
      try {
        setIsLoading(true);

         const config = {
           headers: {
             Authorization: `Bearer ${user.access_token}`, 
           },
         };
        const response = await axios.put(
          `/admins/${user.adminId}/change-password`,
          formData, config
        );
        console.log(response.data);
        setModal(true);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        showToastError()
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = error.response.data.message;
          setServerError(errorMessage);
        } else {
          setServerError(
            "Network error: Please check your internet connection"
          );
        }
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Modal isOpen={modal} onClose={() => setModal(false)}>
        <section className="w-[500px] bg-slate-200 p-16 flex flex-col items-center justify-center">
          <div className="mb-5">
            <img src="/assets/auth/modalImage.svg" alt="" />
          </div>
          <p className="text-black text-center mb-5">
            Your password has been changed. To confirm, kindly log into your
            account
          </p>
          <Link to="/login" className="link w-64">
            <Button className="text-white bg-[#0267FF] w-64" label="Log In" />
          </Link>
          <Button
            className="text-red border-red-400  w-64"
            label="Cancel"
            onClick={() => setModal(false)}
          />
        </section>
      </Modal>

      <div className="text-[24px] font-[500] text-[#4D4D4D] mt-[40px] mb-[20px]">
        Password Settings
      </div>
      <div className="font-[400] text-[20px] italic text-[#999999]">
        Make sure a strong password is used, this is to ensure maximum security
        of your data
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-[48px] mt-[43px] mb-[111px]">
          <input
            className={`w-[462px] h-[60px] border ${
              formErrors.oldPassword ? "border-red-700" : "border-[#666666]"
            } p-4 bg-[#FAFCFF] rounded outline-none`}
            placeholder="Old Password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleInputChange}
            type="password"
          />
          {formErrors.oldPassword && (
            <p className="text-red-500 self-start">{formErrors.oldPassword}</p>
          )}
          <input
            className={`w-[462px] h-[60px] border ${
              formErrors.newPassword ? "border-red-700" : "border-[#666666]"
            } p-4 bg-[#FAFCFF] rounded outline-none`}
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            type="password"
          />
          {formErrors.newPassword && (
            <p className="text-red-500  self-start">{formErrors.newPassword}</p>
          )}
          <input
            className={`w-[462px] h-[60px] border ${
              formErrors.confirmNewPassword
                ? "border-red-700"
                : "border-[#666666] "
            } p-4 bg-[#FAFCFF] rounded outline-none`}
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleInputChange}
            type="password"
          />
          {formErrors.confirmNewPassword && (
            <p className="text-red-500  self-start">
              {formErrors.confirmNewPassword}
            </p>
          )}
        </div>
        <button
          className="w-[462px] h-[61px] bg-[#0267FF] text-[24px] font-[600] text-white rounded mb-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
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
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Security;
