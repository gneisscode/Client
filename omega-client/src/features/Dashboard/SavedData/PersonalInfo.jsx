import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PersonalInfo = () => {
  const [borrowerData, setBorrowerData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [loading, setLoading] = useState(true);

  function getLoanInfo() {
    axios
      .get(`/loans?id=${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.data.borrower);
        setBorrowerData(response.data.data.borrower);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  useEffect(() => {
    getLoanInfo();
  }, []);
  return (
    <>
      <div>
        <div className="flex flex-col gap-[16px] absolute top-[-100px] ">
          <h3 className="text-[#0267FF] text-[24px] font-[600]">
            Borrower's Saved Data
          </h3>
          <h4 className="text-[#4D4D4D] text-[20px] font-[600]">
            Personal and contact Information
          </h4>
        </div>
        {loading ? (
          <div
            role="status"
            className=" flex mt-20 justify-center items-center absolute top-[80px] left-[400px]"
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
          <div className="flex gap-[103px] mt-[58px] ml-[50px] ">
            <div className="flex flex-col gap-[24px]">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.fullname}
                placeholder="Mr. Karim  Tunde "
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none "
                value={borrowerData.email}
                placeholder="kartun@gmail.com"
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.address}
                placeholder="45 cresent Ikeja"
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.employmentType}
                placeholder="Unemployed"
                disabled={true}
              />
            </div>
            <div className="flex flex-col gap-[24px]">
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.phoneNumber}
                placeholder="+234658767520"
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.age}
                placeholder="13th August 1990"
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.nationalIdentityNumber}
                placeholder="********"
                disabled={true}
              />
              <input
                type="text"
                className="border border-[#0252CC] rounded w-[300px] h-[60px] p-4 outline-none"
                value={borrowerData.incomePerMonth}
                placeholder="10,000 Naira"
                disabled={true}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PersonalInfo;
