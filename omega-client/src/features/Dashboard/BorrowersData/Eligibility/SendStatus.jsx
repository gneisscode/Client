import React, {useState} from 'react'
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";


const SendStatus = () => {
  //  const [loading, setLoading] = useState(false);
  //  const location = useLocation();
  //  const id = location.pathname.split("/")[2];

  //   const handleSubmit = async (event) => {
  //     setLoading(true);
  //     const loans = axios.create({
  //       baseURL: `https://nodebtdev.onrender.com/api`,
  //     });
  //     try {
  //       const config = {
  //         headers: {
  //           Authorization: `Bearer ${user.access_token}`,
  //         },
  //       };
  //       const response = await loans.post(
  //         `/loans/send-eligibility-status?id={loanId}`,
  //         formData,
  //         config
  //       );
  //       console.log(response.data);
  //       const eligibility = response.data.data.loan.eligibility;
  //       const loan_id = response.data.data.loan._id;
  //       setEligibility(eligibility);

  //       if (eligibility === true) {
  //         window.location.replace(`eligibility/successful/${loan_id}`);
  //       } else if (eligibility === false) {
  //         window.location.replace(`eligibility/declined/${loan_id}`);
  //       }
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //       showToastError();
  //     }
  //   };

  return (
    <div className="flex flex-col">
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
            <i>
              Choose to send the eligibility status of the
              borrower via email or text message
            </i>
          </p>
          <div className="flex flex-col gap-2 mt-12">
            <button className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] flex items-center justify-center gap-4">
              Send Via Gmail
              <img src="assets/eligibility/logos_google-icon.svg" />
            </button>
            <button className="border-blue-600 border-solid text-blue-600 border text-sm rounded w-1/2 py-2 bg-[#FAFCFF] flex items-center justify-center gap-4">
              Send Via Text Message{" "}
              <img src="assets/eligibility/ic_baseline-email.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendStatus