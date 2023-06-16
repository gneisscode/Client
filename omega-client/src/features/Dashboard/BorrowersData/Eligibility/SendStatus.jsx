import React, { useState, useContext } from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { Context } from "../../../../context/Context";

const SendStatus = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  
  const showToastSuccess = () => {
    toast.success('Eligibility status sent!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const showToastError = () => {
    toast.error('Something went wrong, please try again!', {
      position: toast.POSITION.TOP_RIGHT,
    })

  }

  const handleSubmit = async () => {
    setLoading(true);
    const loans = axios.create({
      baseURL: `https://nodebtdev.onrender.com/api`,
    });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      };
      const response = await loans.get(
        `/loans/send-eligibility-status?id=${id}`,
        config
      );
  
      setLoading(false);
      showToastSuccess()
    } catch (error) {
      console.log(error);
      setLoading(false);
      showToastError();
    }
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="flex flex-col pl-8 pt-[40px]  w-[982px] gap-4 absolute top-[112px] left-[300px]">
          <div className="flex gap-4">
            <Link to="/borrower-data">
              <div className="text-[20px] font-[400] text-[#808080]">
                Input borrower's data{" "}
              </div>
            </Link>
            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[400] text-[#808080]">
              Borrower's data preview
            </div>
            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[400] text-[#808080]">
              Loan Eligibility Status
            </div>
            <i className="fa-solid fa-chevron-right mt-2"></i>
            <div className="text-[20px] font-[400] text-[#0267FF]">
              Send Message
            </div>
          </div>
          <h3 className="text-[#0267FF] font-[600] text-[24px] mt-4">
            Send Loan Eligibility Status To Borrower
          </h3>
          <p>
            <i>Send the eligibility status of the borrower via email</i>
          </p>
          <div className="flex flex-col gap-2 mt-8">
            <button
              onClick={handleSubmit}
              className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] hover:bg-blue-600 hover:text-white flex items-center justify-center gap-4"
            >
              {loading && (
                <div role="status" className="flex justify-center items-center">
                  <svg
                    aria-hidden="true"
                    class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              Send via mail
              <i className="fa-solid fa-envelope"></i>
            </button>
            {/* <button className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] flex items-center justify-center gap-4">
              Send Via Text Message{" "}
              <img src="assets/eligibility/ic_baseline-email.svg" />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendStatus;
