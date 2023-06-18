import React, { useEffect, useState, useContext } from 'react'
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Context } from '../../../context/Context';


const LoanApplications = () => {
  const { user } = useContext(Context);
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState(false);
  const [loanData, setLoanData] = useState([]);
  const [loading, setLoading] = useState(true); 
  function padZerosWithCommas(number) {
    if (typeof number !== "number") {
      return "";
    }

    const formattedNumber = number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return formattedNumber;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (user && user.access_token) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
            },
          };
          const response = await axios.get("/loans/company-loans", config);
          const loansList = response.data.data.loans;
          setLoanData(loansList);
           setLoading(false);
          console.log(response.data);
        } catch (error) {
          console.log(error);
           setLoading(false);
        }
      } else {
        setError(true);
         setLoading(false);
      }
    };

    fetchData();
  }, [user, user?.access_token]);

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="pl-[52px] py-[40px] w-[982px] font-semibold text-[#666666] absolute top-[112px] left-[300px]">
          <div className="w-[982px]">
            <h4 className="text-[#0267FF] font-[600] text-[24px] w-[408px]">
              Loan Applications
            </h4>
          </div>
          <div className=" justify-center items-center mt-8 grid grid-cols-5 p-2 gap-10 bg-[#E6F0FF] px-12 text-[16px] w-[982px]  h-[51px]">
            <h6>Borrower</h6>
            <h6>Date</h6>
            <h6>Status</h6>
            <h6>Credit Score</h6>
            <h6>Amount</h6>
          </div>

          {loading === true ? (
            <div
              role="status"
              className=" flex mt-20 justify-center items-center"
            >
              <svg
                aria-hidden="true"
                className="w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
              <span className="sr-only">Loading...</span>
            </div>
          ) : loanData.length > 0 ? (
            loanData.map((dt) => {
              return (
                <Link to={`/borrower-profile/${dt._id}`}>
                  <div className=" justify-center items-center mt-6 grid grid-cols-5 gap-10 bg-[#FAFCFF] px-12 text-[16px] w-[982px] h-[50px] text-[#666666] hover:text-[#0267FF]">
                    <p>{dt.fullname}</p>
                    <p>{new Date(dt.createdAt).toLocaleDateString()}</p>
                    {dt.eligibility === true ? (
                      <p className="text-[#4ED273]">Successful</p>
                    ) : (
                      <p className="text-[#FF2727]">Declined</p>
                    )}
                    <p>{dt.creditScore}</p>
                    <p>{padZerosWithCommas(dt.loanAmount)}</p>
                  </div>
                </Link>
              );
            })
          ) : (
            <div className="flex justify-center items-center mt-24 font-normal">
              No loan applications to display, click
              <span>
                <Link className="text-blue-500" to="/borrower-data">
                  &nbsp;here&nbsp;
                </Link>
              </span>
              to create a new loan application
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoanApplications