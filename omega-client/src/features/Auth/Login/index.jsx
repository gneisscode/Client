import React, { useState, useContext } from "react";
import AuthLayout from "../../../components/AuthLayout";
import Button from "../../../components/Button";
import TextField from "../../../components/TextField";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../../../context/Context";
import { useGoogleLogin } from "@react-oauth/google";
const Login = () => {
  const [inputType, setInputType] = useState("password");
  const { dispatch, isFetching } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });
  const [serverError, setServerError] = useState("");

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

  const showToastSuccess = () => {
    toast.success("Successfully logged in!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastError = () => {
    toast.error("Something went wrong!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    } else {
      try {
        const response = await axios.post("/admins/login", formData);
        console.log(response.data.data);
        const data = response.data.data;
        const token = data.access_token;
        const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expirationTime);
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        showToastSuccess();
        setIsLoading(false);
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
        showToastError();
        setIsLoading(false);
        dispatch({ type: "LOGIN_FAILURE" });
      }
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const formData = {
          token: tokenResponse.access_token,
        };
        const response = await axios.get("/admins/auth-token", formData);
      } catch (error) {
        console.log(error);
      }
      console.log(tokenResponse);
    },
  });

  return (
    <AuthLayout>
      <ToastContainer />
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
            <div className="mb-2 relative">
              <TextField
                placeholder="Password:"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type={inputType}
                className={formErrors.password ? "border-red-700" : ""}
              />
              {inputType === "text" ? (
                <img
                  src="/assets/auth/eye-hidden.png"
                  alt="Hide eye icon"
                  className="absolute top-[12px] right-[12px] cursor-pointer"
                  onClick={() => setInputType("password")}
                />
              ) : (
                <img
                  src="/assets/auth/eye-shown.png"
                  alt="Show eye icon"
                  className="absolute top-[12px] right-[12px] cursor-pointer"
                  onClick={() => setInputType("text")}
                />
              )}
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

            {/* <div className='flex items-center gap-2'>
              <div>
                <input
                  className='border border-[#013E99]'
                  type='checkbox'
                ></input>
              </div>
              <div>Always keep me logged in</div>
            </div> */}

            <div>
              <Button
                className="text-[#012966] mt-20 bg-white hover:bg-blue-600 hover:text-white"
                type="submit"
                label="Log In"
                loading={isLoading}
              />
            </div>
          </form>

          <div className="grid grid-cols-3 mt-7 items-center">
            <hr className="border-[#013E99]" />
            <p className="text-center text-[#e5e5e5df]">Or continue with</p>
            <hr className="border-[#013E99]" />
          </div>

          <div className="grid grid-cols-1 mt-7 items-center justify-items-center mb-8">
            {/* <img
              src="/assets/auth/email.svg"
              alt=""
              className="cursor-pointer"
            /> */}
            <img
              src="/assets/auth/google.svg"
              alt=""
              className="cursor-pointer w-[50px] h-[50px] self-"
              onClick={googleLogin}
            />
            {/* <img
              src="/assets/auth/apple-icon.svg"
              alt=""
              className="cursor-pointer"
            /> */}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
