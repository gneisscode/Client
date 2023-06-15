import React, { useState } from 'react'
import DashHeader from '../../../../components/Dashboard/DashHeader'
import Sidebar from '../../../../components/Dashboard/Sidebar'
import { Link } from 'react-router-dom'
import Modal from '../../../../components/Modal/modal'
import Button from '../../../../components/Button'

const BorrowerEligibility = () => {
  const [modal, setModal] = useState(false)

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />
        <Modal isOpen={modal} onClose={() => setModal(false)}>
          <section className="w-[500px] bg-slate-200 p-12 flex flex-col items-center justify-center">
            <p className="text-black text-center mb-10 font-md text-xl">
              Loan generation process has been cancelled
            </p>
            <Button
              className="text-white bg-[#0267FF] w-64"
              label="Back"
              onClick={() => {
                setModal(false);
              }}
            />
          </section>
        </Modal>

        <div className="flex flex-col pl-[52px] pt-[40px]  w-[982px] pr-2 gap-8 absolute top-[112px] left-[300px]">
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
            <div className="text-[20px] font-[400] text-[#0267FF]">
              Loan eligibility status
            </div>
          </div>
          <h3 className="text-[#0267FF] text-[24px] font-[600]">
            Borrower's Loan Eligibility Status
          </h3>
          <p className="text-[20px]">
            <i>
              Borrower is <span className='text-green-600 font-[600]'>eligible</span> for this loan type
            </i>
          </p>
          <p className="text-[20px]">
            <i>
              After thorough analysis by the Omega model, it has been predicted
              that this borrower is not likely to default on the loan
              repayments. It is hereby advised to accept the loan application of
              this borrower.
            </i>
          </p>
          <div className="flex flex-col mt-10 gap-[32px]">
            {/* <button
              className='border-blue-600 border-solid text-white border text-[20px] font-[500] rounded w-[408px] h-[61px] py-2 bg-[#0267FF]'
              onClick={() => {
                setModal(true)
              }}
            >
              Cancel Loan Generation
            </button> */}
            <Link to="/send-status">
              <button className=" text-[#0267FF] text-[20px] font-[500] py-2 mb-8">
                Send Eligibility Status To Borrower
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BorrowerEligibility
