import React, {useState} from 'react'
import HomeNav from '../components/HomeNav'
import Hamburger from '../components/Hamburger'
import axios from "axios";
import {useForm} from "react-hook-form"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState("")

  const [contact, setContact] = useState({
    contactName: "",
    contactEmail: "",
    message: "",
    loginURL: "https://omega-prediction-app.netlify.app/login",
  });

   const showToastSuccess = () => {
     toast.success("Message sent successfully", {
       position: toast.POSITION.TOP_RIGHT,
     });
   };

   const showToastError = () => {
     toast.error("Something went wrong!", {
       position: toast.POSITION.TOP_RIGHT,
     });
   };

  const handleContactInput = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const submitForm = async (event) => {
    setLoading(true)
    try {
      const response = await axios.post("https://nodebt-application.onrender.com/api/contact", contact, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
     
      console.log(response.data)
      setLoading(false)
      showToastSuccess()
      setContact({
        contactName: "",
        contactEmail: "",
        message: "",
        loginURL: "https://omega-prediction-app.netlify.app/login",
      });
    } catch(error){
        console.log(error)
        showToastError()
    }
   reset();
  }
  
  return (
    <div className="flex flex-col">
      <ToastContainer />
      <HomeNav />
      <Hamburger />

      <div className="flex w-[100%] pb-12 lg:mt-24">
        <form
          className="flex flex-col z-10 lg:pl-[80px] gap-[52px] lg:pt-[48px] px-4 lg:px-0 pt-4"
          onSubmit={handleSubmit(submitForm)}
        >
          <div>
            <div className="text-[32px] text-[#0267FF] font-[600]">
              Contact Us
            </div>
            <div className="text-[24px] font-400 text-[#808080] italic mt-2">
              Kindly reach out to us. we will get back to you as soon as we can
            </div>
          </div>

          <div className=" flex">
            <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start w-[100%] lg:w-[654px] lg:h-[fit] bg-[#FAFCFF] border border-[#9AC2FF] pl-[24px] pt-8 pb-[65px]">
              <div className="text-[24px] text-[#4D4D4D] font-[600] mb-[48px]">
                User Information
              </div>
              <input
                {...register("contactName", { required: true })}
                value={contact.contactName}
                name="contactName"
                className="border border-[#0252CC] lg:w-[589px] h-[61px] p-6 rounded-[4px] outline-none"
                placeholder="Name"
                type="text"
                onChange={handleContactInput}
              />
              {errors.contactName?.type === "required" && (
                <p className="text-[#ff4141] font-[500] mt-[5px]">
                  Please input your name.
                </p>
              )}
              <input
                {...register("contactEmail", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                })}
                name="contactEmail"
                className="border border-[#0252CC] lg:w-[589px] h-[61px] p-6 rounded-[4px] outline-none mt-[48px]"
                placeholder="Email"
                type="email"
                onChange={handleContactInput}
                value={contact.contactEmail}
              />
              {errors.contactEmail?.type === "required" && (
                <p className="text-[#ff4141] font-[500] mt-[5px]">
                  Please enter your email address.
                </p>
              )}
              {errors.contactEmail?.type === "pattern" && (
                <p className="text-[#ff4141] font-[500] mt-[5px]">
                  Please enter a valid email address.
                </p>
              )}
              <input
                {...register("message", { required: true })}
                name="message"
                className="border border-[#0252CC] lg:w-[589px] h-[195px] p-6 rounded-[4px] outline-none bg-[#E6F0FF] mt-[48px]"
                placeholder="Message"
                type="text"
                onChange={handleContactInput}
                value={contact.message}
              />
              {errors.message?.type === "required" && (
                <p className="text-[#ff4141] font-[500] mt-[5px]">
                  Please enter a message.
                </p>
              )}
            </div>
          </div>

          <button
            className=" w-[150px] lg:w-[308px] h-[61px] bg-[#0267FF] text-white rounded-[4px] text-[24px] font-600"
            type="submit"
            disabled={loading}
          >
            {loading && (
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
            Send
          </button>
        </form>

        <div className="hidden lg:block lg:w-[270px] lg:h-[856px] bg-[#67A4FF] ml-auto pl-[31px] pb-8 z-0 relative">
          <div className="lg:w-[540px] lg:h-[530px] bg-blue-100 rounded-[8px] lg:absolute right-[26px] top-[156px] pl-[43px]">
            <div className="text-[48px] font-600 text-[#3585FF] mt-[28px] mb-[32px]">
              Info
            </div>

            <div className="flex flex-col gap-[58px]">
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/mail.svg" alt="" />
                <div>info@omega.ng</div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/phone.svg" alt="" />
                <div>+2348160288037</div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/address.svg" alt="" />
                <div>
                  Badmus house, Tijaniki Upkpene Close, Victoria Island,
                  Lagos,Nigeria.
                </div>
              </div>
              <div className="flex text-[20px] font-600 text-[#4D4D4D] gap-[19.3px]">
                <img src="assets/contact/clock.svg" alt="" />
                <div>9:00am- 5:00pm</div>
              </div>
            </div>
          </div>
          <div className="flex h-[100%] gap-[62px] items-end justify-start mb-6 mt-[-4em]">
            <img src="assets/contact/insta.svg" alt="" />
            <img src="assets/contact/fb.svg" alt="" />
            <img src="assets/contact/twitter.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[100%] h-[fit] bg-[#0267FF] text-white">
        <div className="flex flex-col lg:flex-row lg:gap-[254px] lg:pl-[80px] mb-[114.44px]">
          <img
            src="assets/landingPage/omega-logo-white.png"
            alt=""
            className="w-[55px] h-[55px] self-center mt-12 lg:mt-0"
          />
          <div className="flex  lg:gap-[233px] gap-12 justify-center items-center pt-[91px]">
            <div className="flex flex-col justify-center gap-[24px]">
              <div className="cursor-pointer">Products</div>
              <div className="cursor-pointer">No Debt</div>
              <div className="cursor-pointer">Loan</div>
              <div className="cursor-pointer">Loan default</div>
            </div>
            <div className="flex flex-col justify-center gap-[24px] self-start">
              <div className="cursor-pointer">About</div>
              <div className="cursor-pointer">FAQS </div>
              <div className="cursor-pointer">Blog</div>
            </div>
            <div className="flex flex-col justify-center gap-[24px]">
              <div className="cursor-pointer">Legal</div>
              <div className="cursor-pointer">Terms</div>
              <div className="cursor-pointer">Privacy</div>
              <div className="cursor-pointer">Security</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center  w-[100%] pl-[80px]">
          <div className="flex flex-col justify-center items-center gap-[32px] px-4 lg:px-0 m-auto">
            <div className="text-[16px] font-[500] lg:w-[876.41px] text-center">
              Omega- unlock the potential of predictive modeling and credit risk
              management to optimize your loan portfolio and drives businesses
              growth
            </div>

            <div className="text-[14px] font-[500] lg:w-[488px] text-center">
              2020-2023 Omega Global Limited - RC 1222200
            </div>
          </div>

          <img src="assets/contact/ellipse2.png" alt="" className="ml-auto" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs