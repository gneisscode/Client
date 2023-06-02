import React from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { Link } from "react-router-dom";

const BorrowerEligibility = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <div className="flex flex-col pl-[52px] pt-[40px]  w-[982px] pr-2 gap-8 absolute top-[112px] left-[300px]">
          <div className="flex gap-4">
            <Link to="/borrower-data">
              <div className="text-[20px] font-[400] text-[#808080]">
                Input borrower's data{" "}
              </div>
            </Link>

            <img src="assets/dashboard/arrowdark.svg" alt="" />
            <div className="text-[20px] font-[400] text-[#808080]">
              Borrower's data preview
            </div>
            <img src="assets/dashboard/arrowdark.svg" alt="" />
            <div className="text-[20px] font-[400] text-[#0267FF]">
              Loan Eligibility Status
            </div>
          </div>
          <h3 className="text-[#0267FF] text-[24px] font-[600]">
            Borrower's Loan Eligibility Status
          </h3>
          <p className="text-[24px]">
            <i>This borrower is not eligible to this loan type</i>
          </p>
          <p className="text-[24px]">
            <i>
              After thorough analysis by the system, it has been predicted that
              this borrower is lilely to default loan. It is hereby advised to
              reject the loan application of this borrower.
            </i>
          </p>
          <p className="text-[24px]">
            <b>Reason:</b>{" "}
            <i>
              This borrower has inefficient income and there is a fault in
              collateral data.
            </i>
          </p>
          <p className="text-[24px]">
            <b>Financial advice:</b>{" "}
            <i>
              Application for a lower amount of loan is adviced. Possible amount
              is between the sum of $40 and $50
            </i>
          </p>
          <div className="flex flex-col mt-10 gap-[32px]">
            <button className="border-blue-600 border-solid text-white border text-[24px] font-[500] rounded w-[408px] h-[61px] py-2 bg-[#0267FF]">
              Cancel Loan Generation
            </button>
            <Link to="/send-status">
              <button className=" text-[#0267FF] text-[20px] font-[500] w-[395px] py-2 mb-8">
                Send Eligibility Status To Borrower
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerEligibility;
