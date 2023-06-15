import React, { useState, useContext } from "react";
import TextField from "../../../../components/TextField";
import SelectDropdown from "../../../../components/SelectDropDown/SelectDropDown";
import { BorrowerFormData } from "./BorrowersData";

const Loan = () => {
  const [loanType, setLoanType] = useState(undefined);
  const [repayType, setRepayType] = useState(undefined);
  const [validationErrors, setValidationErrors] = useState();
  const { value, setValue } = useContext(BorrowerFormData);

  const loansType = [
    { id: 1, label: "Business Loan", value: "Business Loan" },
    { id: 2, label: "Student Loan", value: "Student Loan" },
    { id: 3, label: "Agricultural Loan", value: "Agricultural Loan" },
    { id: 4, label: "Housing Loan", value: "Housing Loan" },
    { id: 5, label: "Others", value: "Others" },
  ];
  const repayTypeList = [
    { id: 1, label: "Principal and Interest", value: "Principal and Interest" },
  ];

  const handleField = (event) => {
    const value = event.target.value;
    const minLength = 50;

    if (value.length < minLength) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        purposeOfLoan: `Purpose of Loan must be at least ${minLength} characters long`,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        purposeOfLoan: "",
      }));
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 w-full gap-7 px-8">
        <SelectDropdown
          options={loansType}
          placeholder="Loan Type"
          onChange={(val) => {
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                loanType: val.value,
              },
            });
            setLoanType(val.value);
          }}
        />
        <SelectDropdown
          options={repayTypeList}
          placeholder="Repayment Type"
          onChange={(val) => {
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                repaymentType: val.value,
              },
            });
            setRepayType(val.value);
          }}
        />

        <TextField
          className="bg-white border-[#0252CC]"
          placeholder="Loan Amount"
          value={value.loanInfo.loanAmount}
          onChange={(e) =>
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                loanAmount: e.target.value,
              },
            })
          }
          onKeyDown={(e) => {
            const keyCode = e.which || e.keyCode;
            if (keyCode !== 8 && (keyCode < 48 || keyCode > 57)) {
              e.preventDefault();
            }
          }}
          title="Please enter numbers only"
        />
      </div>
      <div className="px-8 mt-12">
        <textarea
          className={`bg-white outline-none border border-[#0252CC] w-full h-36 rounded p-4 ${
            validationErrors?.purposeOfLoan
              ? "border text-red-300 border-red-500 bg-[#fd3d3d0f]"
              : "border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]"
          }`}
          placeholder="Purpose of Loan"
          value={value.loanInfo.loanPurpose}
          onChange={(e) => {
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                loanPurpose: e.target.value,
              },
            });
            handleField(e);
          }}
        ></textarea>
        {validationErrors?.purposeOfLoan && (
          <small style={{ color: "#e11900" }}>
            {validationErrors?.purposeOfLoan}
          </small>
        )}
      </div>
    </>
  );
};

export default Loan;
