import React, {useContext} from "react";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import { BorrowerFormData } from "../InputData/BorrowersData";


const PreviewForm = ({ handleModal }) => {
  
  const { value } = useContext(BorrowerFormData);
  return (
    <div className="border border-gray-200 absolute z-[100] top-0 left-0 right-0 w-full bg-black bg-opacity-30 pt-[110px]">
      <div className="max-w-[80%] bg-white ml-auto py-4">
        <div className="flex flex-col">
          <div className="px-20 text-[24px] text-[#4D4D4D] font-[500] mb-10">
            <h3 className="text-[#0267FF] text-[24px] font-[600] mb-3 mt-12">
              Borrowers Data Preview
            </h3>
            <p className="text-[20px] font-[500] text-[#4D4D4D]">
              Personal and contact Information
            </p>
          </div>

          <div className="flex flex-col space-y-5 border-b pb-28 mt-[51px] px-20">
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC]  "
                value={value.name}
                disabled={true}
              />
              <TextField
                className="bg-white border-[#0252CC] "
                value={value.phoneNumber}
                disabled={true}
              />
            </div>
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.email}
                disabled={true}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.DOB}
                disabled={true}
              />
            </div>

            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.address}
                disabled={true}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.nin}
                disabled={true}
              />
            </div>

            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.employment}
                disabled={true}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.income}
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[24px] text-[#4D4D4D] font-[500] px-20 mt-20">
            Loan Information
          </div>

          <div className="flex flex-col  space-y-5 border-b pb-16 mt-16 px-20">
            <div className="flex gap-36">
              <TextField className="bg-white border-[#0252CC] w-96" />
              <TextField className="bg-white border-[#0252CC] w-96" />
            </div>
            <div className="flex gap-36">
              <TextField className="bg-white border-[#0252CC] w-96" />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.loanAmount}
                disabled={true}
              />
            </div>

            <div className="py-4 ">
              <textarea
                className="bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded"
                value={value.loanPurpose}
                disabled={true}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col border-b space-y-5 px-20 mt-20 pb-16  ">
            <div className="text-[24px] text-[#4D4D4D] font-[500] mb-16">
              Collateral Information
            </div>
            <div className="flex gap-36">
              <TextField className="bg-white border-[#0252CC]" />
              <TextField
                className="bg-white border-[#0252CC]"
                value={value.collateralValue}
                disabled={true}
              />
            </div>
            <div className="py-4">
              <textarea
                className="bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded"
                value={value.collateralInfo}
                disabled={true}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col border-b pb-16 px-20 ">
            <div className="text-[24px] text-[#4D4D4D] font-[500] mt-20 mb-16">
              Guarantor's Information
            </div>
            <div className="space-y-5 ">
              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorName}
                  disabled={true}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorPhoneNumber}
                  disabled={true}
                />
              </div>
              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorEmail}
                  disabled={true}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorDOB}
                  disabled={true}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorAddress}
                  disabled={true}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorNin}
                  disabled={true}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorRelationship}
                  disabled={true}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorEmployment}
                  disabled={true}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorOtherIncome}
                  disabled={true}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorIncome}
                  disabled={true}
                />
              </div>
            </div>
          </div>

          <div className="px-20 w-full text-[#333333] font-normal text-xl my-7">
            <i>
              After carefully previewing the borrower's data form, go ahead to
              upload and check loan eligibility to predict loan default
            </i>
          </div>

          <div className="flex flex-row items-center px-20 gap-6">
            <p className="font-medium text-base text-[#0252CC]">
              Admin in charge
            </p>
            <div className="w-60">
              <TextField
                className="bg-white border-[#0252CC] text-[#333333] w-80"
                placeholder="Input Name"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center mb-6 px-8 w-64 ml-auto py-8">
          <Button
            className="text-white bg-[#0267FF] rounded"
            label="Upload Data"
            onClick={handleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
