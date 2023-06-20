import React, { useState } from "react";
import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";
import PasswordBtn from "../../../components/PasswordBtn";
import { Link, useParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const ChangePassword = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");

  const [formData, setFormData] = useState({
    secret_key: 12345,
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    password: "",
    confirmPassword: "",
  });
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
      showToastError();
    } else {
      try {
        const response = await axios.put(`/password-reset/${id}`, formData);
        console.log(response.data);
        window.location.replace("/success");
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        showToastError();
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
            <div className="mb-2 relative">
              <input
                className={`border autofill:bg-none ${
                  formErrors.password ? "border-red-700" : "border-blue-600"
                } w-[589px] h-[61px] p-4  outline-none`}
                placeholder="New Password:"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type={inputType}
              />
              {inputType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash absolute top-[20px] right-[20px] text-[18px] cursor-pointer"
                  onClick={() => setInputType("password")}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye absolute top-[20px] right-[20px] text-[18px] cursor-pointer"
                  onClick={() => setInputType("text")}
                ></i>
              )}
              {formErrors.password && (
                <p className="text-red-500 self-start">{formErrors.password}</p>
              )}
            </div>

            <div className="mb-2 relative">
              <input
                className={`border autofill:bg-none ${
                  formErrors.confirmPassword
                    ? "border-red-700"
                    : "border-blue-600"
                } w-[589px] h-[61px] p-4 mb-2 outline-none`}
                placeholder="Confirm New Password:"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                type={confirmType}
              />

              {confirmType === "text" ? (
                <i
                  className="fa-regular fa-eye-slash absolute top-[20px] right-[20px] text-[18px] cursor-pointer"
                  onClick={() => setConfirmType("password")}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-eye absolute top-[20px] right-[20px] text-[18px] cursor-pointer"
                  onClick={() => setConfirmType("text")}
                ></i>
              )}
              {formErrors.confirmPassword && (
                <p className="text-red-500 self-start">
                  {formErrors.confirmPassword}
                </p>
              )}
            </div>

            <PasswordBtn text="Change Password" loading={loading} />
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
