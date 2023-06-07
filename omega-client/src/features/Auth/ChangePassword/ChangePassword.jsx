import React, { useState } from "react";
import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";
import PasswordBtn from "../../../components/PasswordBtn";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "axios";

const ChangePassword = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

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
        const response = await axios.put(`/password-reset/${id}`, formData);
        console.log(response.data);
        window.location.replace("/success");
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
    <div className="flex flex-col items-center gap-4 p-10">
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Change Password</h2>
      <p className="text-xl pb-4">Kindly enter your new password</p>
      <div>
        <form onSubmit={handleSubmit}>
          <Card className="p-14 flex flex-col items-center gap-10 ">
            <input
              className={`border ${
                formErrors.password ? "border-red-700" : "border-blue-600"
              } w-[589px] h-[61px] p-6  outline-none`}
              placeholder="New Password:"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              type="password"
            />
            {formErrors.password && (
              <p className="text-red-500  pl-16 self-start">
                {formErrors.password}
              </p>
            )}
            <input
              className={`border ${
                formErrors.confirmPassword
                  ? "border-red-700"
                  : "border-blue-600"
              } w-[589px] h-[61px] p-6 mb-2 outline-none`}
              placeholder="Confirm New Password:"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              type="password"
            />
            {formErrors.confirmPassword && (
              <p className="text-red-500 pl-16 self-start">
                {formErrors.confirmPassword}
              </p>
            )}

            <PasswordBtn text="Change Password" />
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
