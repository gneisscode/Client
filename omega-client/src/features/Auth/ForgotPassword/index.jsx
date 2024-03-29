import React, {useState} from "react";
import LockIcon from "../../../components/LockIcon";
import Card from "../../../components/Card";
import PasswordBtn from "../../../components/PasswordBtn";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [serverError, setServerError] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false)

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
    console.log(formData)
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
        const response = await axios.get(`/password-reset?email=${formData.email}`);
        console.log(response.data.data);
        const data = response.data.data;
        window.location.replace("/verification-email");

      } catch (error) {
        console.log(error);
          showToastError();
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = error.response.data.message;
          setServerError(errorMessage);
           setLoading(false);
        } else {
          setServerError(
            "Network error: Please check your internet connection"
          );
           setLoading(false);
         
        }
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <ToastContainer />
      <LockIcon />
      <h2 className="text-blue-600 text-2xl">Forgot Password</h2>
      <p className="text-xl pb-4">
        Kindly insert your email below, a verification code will be sent to you,
        make sure you enter the correct email.
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <Card className="p-14 flex flex-col items-center gap-10 ">
            {serverError && <p className="text-red-500">{serverError}</p>}
            {/* {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )} */}

            <input
              className={`border border-blue-600 w-[589px] h-[61px] p-6 outline-none ${
                formErrors.email ? "border-red-700" : ""
              }`}
              placeholder="Email address:"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
            />

            <PasswordBtn text="Send" loading={loading} />

            <p className="text-blue-600 p-12 flex flex-col items-centre">
              <Link to="/login">Back to sign in</Link>
            </p>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
