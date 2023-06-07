import React, { useState } from 'react'
import AuthLayout from '../../../components/AuthLayout'
import Button from '../../../components/Button'
import TextField from '../../../components/TextField'
import Modal from '../../../components/Modal/modal'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organisationName: "",
    password: "",
    confirmPassword: "",
    passwordLink: "https://omega-prediction-app.netlify.app/verify",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName:'',
    organisationName:'',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [serverError, setServerError] = useState('')

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [success, setSuccess] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    validateField(name, value)
    setServerError('')
  }

  const validateField = (fieldName, value) => {
    let errorMessage = ''

    if (fieldName === "firstName" && !value) {
      errorMessage = "First Name is required";
    } else if (fieldName === "lastName" && !value) {
      errorMessage = "Last Name is required";
    } else if (fieldName === "email" && !value) {
      errorMessage = "Email is required";
    } else if (fieldName === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Email is invalid";
    } else if (fieldName === "password" && !value) {
      errorMessage = "Password is required";
    } else if (fieldName === "organisationName" && !value) {
      errorMessage = "Organisation Name is required";
    } else if (
      fieldName === "password" &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value
      )
    ) {
      errorMessage =
        "Password must be at least eight characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)!";
    } else if (fieldName === "confirmPassword" && value !== formData.password) {
      errorMessage = "Passwords do not match!";
    }

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: errorMessage,
    }))
  }

  const showToastError = () => {
    toast.error('Something went wrong!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData)
    const errors = {}
    setIsLoading(true)

    Object.keys(formData).forEach((fieldName) => {
      validateField(fieldName, formData[fieldName])
      if (formErrors[fieldName]) {
        errors[fieldName] = formErrors[fieldName]
      }
    })

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      setIsLoading(false)
    } else {
      try {
        const response = await axios.post('/admins/signup', formData)
        console.log(response.data.data)
        setSuccess(true)
        setIsLoading(false)
        openModal()
      } catch (error) {
        console.log(error)
        setSuccess(false)
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = error.response.data.message
          setServerError(errorMessage)
        } else {
          setServerError('Network error: Please check your internet connection')
        }
        showToastError()
        setIsLoading(false)
      }
    }
  }

  return (
    <AuthLayout>
      <ToastContainer />
      <section className="lg:mt-8 mt-24 justify-center items-center lg:px-28 px-4">
        <Link to="/">
          <div className="cursor-pointer">
            <img src="/assets/auth/backIcon.svg" alt="" />
          </div>
        </Link>
        <div>
          <h3 className=" mt-2  lg:text-4xl text-white text-center text-[1.5rem] leading-4">
            Create an account
          </h3>
          <p className="my-2 text-center text-[#e5e5e5df] text-base font-normal">
            Sign up to get an account
          </p>
          <p className="my-5 mb-10 text-center text-[#e5e5e5df] text-base font-normal">
            Already have an account?
            <span className="font-bold text-white ml-2">
              <Link to="/login">Log in</Link>
            </span>
          </p>

          {serverError && <p className="text-red-500">{serverError}</p>}

          <form className="text-white" onSubmit={handleSubmit}>
            <div className="mb-6">
              <TextField
                placeholder="First Name:"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                type="text"
                autoComplete="firstName"
                className={formErrors.firstName ? "border-red-700" : ""}
              />
              {formErrors.firstName && (
                <p className="text-red-500">{formErrors.firstName}</p>
              )}
            </div>

            <div className="mb-6">
              <TextField
                placeholder="Last Name:"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                type="text"
                autoComplete="lastName"
                className={formErrors.lastName ? "border-red-700" : ""}
              />
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
            </div>
            <div className="mb-6">
              <TextField
                placeholder="Email Address:"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                autoComplete="email"
                className={formErrors.email ? "border-red-700" : ""}
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-6">
              <TextField
                placeholder="Organisation Name:"
                name="organisationName"
                value={formData.organisationName}
                onChange={handleInputChange}
                type="text"
                autoComplete="organisationName"
                className={formErrors.organisationName? "border-red-700" : ""}
              />
              {formErrors.organisationName && (
                <p className="text-red-500">{formErrors.organisationName}</p>
              )}
            </div>
            <div className="mb-6">
              <TextField
                placeholder="Password:"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                autoComplete="password"
                className={formErrors.password ? "border-red-700" : ""}
              />
              {formErrors.password && (
                <p className="text-red-500">{formErrors.password}</p>
              )}
            </div>

            <div className="mb-6">
              <TextField
                placeholder="Confirm Password:"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                type="password"
                autoComplete="confirmPassword"
                className={formErrors.confirmPassword ? "border-red-700" : ""}
              />
              {formErrors.confirmPassword && (
                <p className="text-red-500">{formErrors.confirmPassword}</p>
              )}
            </div>
            <Button
              className="text-[#012966] mt-5 bg-white"
              label="Sign Up"
              type="submit"
              loading={isLoading}
            />
          </form>

          <div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <section className="w-[500px] bg-slate-200 p-16 flex flex-col items-center justify-center">
                <div className="mb-5">
                  <img src="/assets/auth/modalImage.svg" alt="" />
                </div>
                <p className="text-black text-center mb-5">
                  You now have an account, please go ahead to Log into your
                  account
                </p>
                <Link to="/login" className="link w-64">
                  <Button
                    className="text-white bg-[#0267FF] w-64"
                    label="Log In"
                  />
                </Link>
              </section>
            </Modal>
          </div>

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
}

export default SignUp
