import React from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";


const BorrowerEligibility = () => {
  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col pl-8 pt-[160px] pr-2 gap-8">
          <h3 className="text-blue-600">Borrower's Loan Eligibility Status</h3>
          <p><i>This borrower is not eligible to this loan type</i></p>
          <p><i>After thorough analysis by the system, it has been predicted that this borrower is lilely to default loan. It is hereby advised to reject the loan application of this borrower.</i></p>
          <p><b>Reason:</b> <i>This borrower has inefficient income and there is a fault in collateral data.</i></p>
          <p><b>Financial advice:</b> <i>Application for a lower amount of loan is adviced. Possible amount is between the sum of $40 and $50</i></p>
         <div className="flex flex-col mt-10">
            <button className="border-blue-600 border-solid text-white border text-sm rounded w-2/5 py-2 bg-blue-600">Cancel Loan Generation</button>
           <button className=" text-blue-600 text-sm w-2/5 py-2">Send Eligibility Status To Borrower</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default BorrowerEligibility;
