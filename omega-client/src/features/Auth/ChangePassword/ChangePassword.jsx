import React, { useState } from "react";
import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";
import PasswordBtn from "../../../components/PasswordBtn";
import { Link, useParams, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const ChangePassword = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
   const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    secret_key: 12345,
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const [serverError, setServerError] = useState("");
    const showToastError = () => {
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
    setServerError("");
    console.log(formData);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const validateField = (fieldName, value) => {
    let errorMessage = "";

    if (fieldName === "password" && !value) {
      errorMessage = "Password is required";
    }
    if (fieldName === "confirmPassword" && value !== formData.password) {
      errorMessage = "Passwords do not match!";
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
    setLoading(true);

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      showToastError()
    } else {
      try {
        const response = await axios.put(`/password-reset/${id}`, formData);
        console.log(response.data);
        window.location.replace("/success");
        setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
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
    <div className="flex flex-col items-center gap-4 p-10">
      <ToastContainer />
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Change Password</h2>
      <p className="text-xl pb-4">Kindly enter your new password</p>
      <div>
        {serverError && (
          <p className="text-red-500 text-center mb-4">{serverError}</p>
        )}
        <form onSubmit={handleSubmit}>
          <Card className="p-14 flex flex-col items-center gap-10 ">
          <div className="relative">
              <input
                className={`border ${
                  formErrors.password ? "border-red-700" : "border-blue-600"
                } w-[589px] h-[61px] p-6 pl-14 outline-none`}
                placeholder="New Password:"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type={passwordVisible ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-gray-500 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
            {formErrors.password && (
              <p className="text-red-500 pl-16 self-start">
                {formErrors.password}
              </p>
            )}
           <div className="relative">
              <input
                className={`border ${
                  formErrors.confirmPassword
                    ? "border-red-700"
                    : "border-blue-600"
                } w-[589px] h-[61px] p-6 mb-2 pl-14 outline-none`}
                placeholder="Confirm New Password:"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                type={confirmPasswordVisible ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={confirmPasswordVisible ? faEyeSlash : faEye}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-lg text-gray-500 cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              />
            </div>
            {formErrors.confirmPassword && (
              <p className="text-red-500 pl-16 self-start">
                {formErrors.confirmPassword}
              </p>
            )}

            <PasswordBtn text="Change Password" loading={loading} />
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
