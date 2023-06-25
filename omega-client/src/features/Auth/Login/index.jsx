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
  const [googleLoading, setgoogleLoading] = useState(false)
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
      setgoogleLoading(true)
      const userInfo = await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then((res) => res.data);

      console.log(userInfo);

      try {
        const formData = {
          email: userInfo.email,
        };
        const response = await axios.post("/admins/login-auth-token", formData);
        console.log(response)
        const data = response.data.data;
        const token = data.access_token;
        const expirationTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expirationTime);
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        setgoogleLoading(false)
      } catch (error) {
        setgoogleLoading(false);
        showToastError()
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
            <span className="font-bold text-white ml-2 hover:text-blue-300">
              <Link to="/signup">Sign up</Link>
            </span>
          </p>

          {serverError && <p className="text-red-500 mb-4">{serverError}</p>}

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
                <div className="hover:text-blue-300">Forgot Password</div>
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
            <p className="text-center text-[#e5e5e5df]">Or </p>
            <hr className="border-[#013E99]" />
          </div>

          <button
            className="flex justify-center w-[100%] items-center gap-4  mt-7 text-[#012966] p-3 mb-2 rounded bg-white hover:bg-blue-600 hover:text-white cursor-pointer transition-all duration-500 ease-linear"
            onClick={googleLogin}
            disabled={googleLoading}
          >
            {googleLoading && (
              <div role="status" className="flex justify-center items-center">
                <svg
                  aria-hidden="true"
                  class="inline w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                <span class="sr-only">Loading...</span>
              </div>
            )}
            <div>Continue with Google</div>
            <img src="/assets/auth/google.svg" alt="" />
          </button>
        </div>
      </section>
    </AuthLayout>
  );
};

export default Login;
