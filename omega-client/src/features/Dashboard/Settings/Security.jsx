import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../components/Modal/modal";
import Button from "../../../components/Button";
import { Context } from "../../../context/Context";
import axios from "axios";

const Security = () => {
  const { user } = useContext(Context);
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: "",
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

     if (fieldName === "email" && !value) {
       errorMessage = "Email is required";
     } else if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
       errorMessage = "Email is invalid";
     }

     setFormErrors((prevErrors) => ({
       ...prevErrors,
       [fieldName]: errorMessage,
     }));
   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const errors = {};
    // setIsLoading(true);

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // setIsLoading(false);
    } else {
      try {

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
            className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
            placeholder="Old Password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleInputChange}
            type="password"
          />
          <input
            className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
            placeholder="New Password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            type="password"
          />
          <input
            className="w-[462px] h-[60px] border border-[#666666] p-4 bg-[#FAFCFF] rounded "
            placeholder="Confirm New Password"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleInputChange}
            type="password"
          />
        </div>
        <button
          className="w-[462px] h-[61px] bg-[#0267FF] text-[24px] font-[600] text-white rounded mb-8"
          type="submit"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default Security;
