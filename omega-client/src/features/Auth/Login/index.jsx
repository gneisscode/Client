import React, { useState } from "react";
import AuthLayout from "../../../components/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [serverError, setServerError] = useState("")

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
     setServerError("");
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";

    if (fieldName === "email" && !value) {
      errorMessage = "Email is required";
    } else if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Email is invalid";
    } else if (fieldName === "password" && !value) {
      errorMessage = "Password is required";
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

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName]);
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName];
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      try {
        const response = await axios.post("/users/login", formData);
        console.log(response.data.data);
        const data = response.data.data;
        const token = data.access_token;
        localStorage.setItem("token", token);
        window.location.replace("/");
      } catch (error) {
        console.log(error);
        const errorMessage = error.response.data.message;
        setServerError(errorMessage)
      }
    }
  };

  return (
    <AuthLayout>
      <section className="mt-8  justify-center items-center px-28">
        <Link to="/">
          <div className="cursor-pointer">
            <img src="/assets/auth/backIcon.svg" alt="" />
          </div>
        </Link>
        <div>
          <h3 className=" mt-2 lg:text-4xl text-white text-center text-[1.5rem] leading-4">
            Welcome back
          </h3>
          <p className="my-2 text-center text-[#e5e5e5df] text-base font-normal">
            Log into your account
          </p>
          <p className="my-5 mb-10 text-center text-[#e5e5e5df] text-base font-normal">
            Don't have an account?
            <span className="font-bold text-white ml-2">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>

          {serverError && <p className="text-red-500">{serverError}</p>}

          <form className="text-white" onSubmit={handleSubmit}>
            <div className="mb-6">
              <TextField
                placeholder="Email Address:"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                className={formErrors.email ? "border-red-700" : ""}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-2">
              <TextField
                placeholder="Password:"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                className={formErrors.password ? "border-red-700" : ""}
              />
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div></div>
              <Link to="/forgot-password">
                <div>Forgot Password</div>
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <div>
                <input
                  className="border border-[#013E99]"
                  type="checkbox"
                ></input>
              </div>
              <div>Always keep me logged in</div>
            </div>

            <div>
              <Button
                className="text-[#012966] mt-20 bg-white"
                type="submit"
                label="Log In"
              />
            </div>
          </form>

          <div className="grid grid-cols-3 mt-7 items-center">
            <hr className="border-[#013E99]" />
            <p className="text-center text-[#e5e5e5df]">Or continue with</p>
            <hr className="border-[#013E99]" />
          </div>

          <div className="grid grid-cols-3 mt-7 items-center justify-items-center">
            <img src="/assets/auth/email.svg" alt="" />
            <img src="/assets/auth/google.svg" alt="" />
            <img src="/assets/auth/apple-icon.svg" alt="" />
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
