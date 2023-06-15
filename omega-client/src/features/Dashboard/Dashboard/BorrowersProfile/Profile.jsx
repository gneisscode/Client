import React, { useContext, useEffect, useState } from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Context } from "../../../../context/Context";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const param = useParams();

  const { user } = useContext(Context);

  useEffect(() => {
    const getUserLoan = async () => {
      const loans = axios.create({
        baseURL: `https://nodebtdev.onrender.com/api`,
      });
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        };
        const response = await loans.get(`/loans/company-loans`, config);

        const loansList = response.data.data.loans;

        const userLoan = loansList.find((loan) => loan._id === param.id);
        setCurrentUser(userLoan);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getUserLoan();
  }, [user, user?.access_token, param.id]);
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        {loading === true ? (
          <div
            role="status"
            className=" flex mt-20 justify-center items-center absolute top-[212px] left-[750px]"
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
        ) : (
          <div className="w-[982px] pl-[52px] pt-[40px] absolute top-[112px] left-[300px]">
            <div className="flex gap-4 mb-[40px]">
              <Link to="/dashboard">
                <div className="text-[20px] font-[400] text-[#808080]">
                  Dashboard
                </div>
              </Link>
              <i className="fa-solid fa-chevron-right mt-2"></i>
              <div className="text-[20px] font-[400] text-[#0267FF]">
                Borrower's Profile
              </div>
            </div>
            <div className="flex bg-blue-100 p-10 justify-between align-middle">
              <div className="flex flex-col">
                <h2 className="font-semibold text-base mb-8">
                  {currentUser.fullname}
                </h2>
                <p className="text-[#666666] font-normal text-sm">
                  {new Date(currentUser.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <select className="bg-[#0267FF] text-white p-2 px-2 outline-none">
                  <option className="font-medium text-xl" value="">
                    Change status
                  </option>
                  <option value="Successful">Successful</option>
                  <option value="Declined">Declined</option>
                </select>
              </div>
            </div>

            <div className="p-16">
              <div className="flex gap-5 mb-8">
                <h3 className="w-32">Loan Amount:</h3>
                <p>{currentUser.loanAmount}</p>
              </div>
              <div className="flex gap-5 mb-8">
                <h3 className="w-32">Loan Status:</h3>

                {currentUser.eligibility ? (
                  <p className="text-[#4ED273]">Successful</p>
                ) : (
                  <p className="text-[#FF2727]">Declined</p>
                )}
              </div>
              <div className="flex gap-5 mb-8">
                <h3 className="w-32">Admin in charge:</h3>
                <p>Mabel Okeke</p>
              </div>
            </div>

            <div>
              <Link to="/borrower-saved-data">
                <p className="flex p-16 gap-16 text-[#0267FF]">
                  View Borrower's Data
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
