import React, { useContext, useState, useEffect } from "react";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import { BorrowerFormData } from "../InputData/BorrowersData";
import { Context } from "../../../../context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PreviewForm = ({ handleModal, handleModalTwo }) => {
  const { value } = useContext(BorrowerFormData);
  const { user } = useContext(Context);
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false)

    const showToastError = () => {
      toast.error("Something went wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    guarantor: {
      fullname: value.guarantorInfo.fullName,
      phoneNumber: value.guarantorInfo.phoneNumber,
      email: value.guarantorInfo.email,
      age: parseInt(value.guarantorInfo.age),
      address: value.guarantorInfo.address,
      socialSecurityNumber: value.guarantorInfo.ssn,
      relationship: value.guarantorInfo.relationship,
      employmentType: value.guarantorInfo.employmentType,
      incomePerMonth: parseInt(value.guarantorInfo.incomePerMonth),
      otherSourcesOfIncome: value.guarantorInfo.incomeSource,
    },
    fullname: value.personalInfo.fullName,
    email: value.personalInfo.email,
    address: value.personalInfo.address,
    employmentType: value.personalInfo.employmentType,
    jobSector: value.personalInfo.jobSector,
    jobRole: value.personalInfo.jobRole,
    phoneNumber: value.personalInfo.phoneNumber,
    age: parseInt(value.personalInfo.age),
    gender: value.personalInfo.gender,
    maritalStatus: value.personalInfo.maritalStatus,
    nationalIdentityNumber: value.personalInfo.nin,
    incomePerMonth: parseInt(value.personalInfo.income),
    loanType: value.loanInfo.loanType,
    loanAmount: parseInt(value.loanInfo.loanAmount),
    repaymentType: value.loanInfo.repaymentType,
    purposeOfLoan: value.loanInfo.loanPurpose,
    collateralType: value.collateralInfo.collateralType,
    collateralValue: parseInt(value.collateralInfo.collateralValue),
    collateralInformation: value.collateralInfo.collateralInformation,
  });



  useEffect(() => {
    const validateForm = () => {
      const errors = {};

      if (!formData.fullname) {
        errors.fullname = "Full Name is required";
      }

      if (!formData.phoneNumber || formData.phoneNumber.length !== 11) {
        errors.phoneNumber = "Invalid Phone Number";
      }

      if (
        !formData.email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        errors.email = "Invalid Email";
      }

      if (!formData.age) {
        errors.age = "Age is required";
      }

      if (!formData.gender) {
        errors.gender = "Gender is required";
      }

      if (!formData.maritalStatus) {
        errors.maritalStatus = "Marital Status is required";
      }

      if (!formData.address) {
        errors.address = "Address is required";
      }

      if (
        !formData.nationalIdentityNumber ||
        formData.nationalIdentityNumber.length !== 11
      ) {
        errors.nationalIdentityNumber = "Invalid National Identity Number";
      }

      if (!formData.employmentType) {
        errors.employmentType = "Employment Type is required";
      }

      if (!formData.jobRole) {
        errors.jobRole = "Job Role is required";
      }

      if (!formData.jobSector) {
        errors.jobSector = "Job Sector is required";
      }

      if (!formData.incomePerMonth) {
        errors.incomePerMonth = "Income per month is required";
      }

      // Validate loan properties
      if (!formData.loanType) {
        errors.loanType = "Loan Type is required";
      }

      if (!formData.loanAmount) {
        errors.loanAmount = "Loan Amount is required";
      }

      if (!formData.repaymentType) {
        errors.repaymentType = "Repayment Type is required";
      }

      if (!formData.purposeOfLoan || formData.purposeOfLoan.length < 50) {
        errors.purposeOfLoan = "Purpose of Loan is required";
      }

      // Validate collateral properties
      if (!formData.collateralType) {
        errors.collateralType = "Collateral Type is required";
      }

      if (!formData.collateralValue) {
        errors.collateralValue = "Collateral Value is required";
      }

      if (
        !formData.collateralInformation ||
        formData.collateralInformation.length < 50
      ) {
        errors.collateralInformation = "Collateral Information is required";
      }

      const guarantorInfo = formData.guarantor;
      if (!guarantorInfo.fullname) {
        errors.guarantorFullName = "Full Name is required";
      }

      if (
        !guarantorInfo.phoneNumber ||
        guarantorInfo.phoneNumber.length !== 11
      ) {
        errors.guarantorPhoneNumber = "Invalid Phone Number";
      }

      if (
        !guarantorInfo.email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(guarantorInfo.email)
      ) {
        errors.guarantorEmail = "Invalid Email";
      }

      if (!guarantorInfo.age) {
        errors.guarantorAge = "Age is required";
      }

      if (!guarantorInfo.address) {
        errors.guarantorAddress = "Address is required";
      }

      if (
        !guarantorInfo.socialSecurityNumber ||
        guarantorInfo.socialSecurityNumber.length !== 11
      ) {
        errors.guarantorSSN = "Invalid Social Security Number";
      }

      if (!guarantorInfo.relationship) {
        errors.guarantorRelationship = "Relationship is required";
      }

      if (!guarantorInfo.employmentType) {
        errors.guarantorEmploymentType = "Employment Type is required";
      }

      if (!guarantorInfo.incomePerMonth) {
        errors.guarantorIncomePerMonth = "Income per month is required";
      }

      if (!guarantorInfo.otherSourcesOfIncome) {
        errors.guarantorIncomeSource = "Other sources of Income is required";
      }

      // Update the validation errors state
      setValidationErrors(errors);

      // Return true if there are no errors
      return Object.keys(errors).length === 0;
    };
    validateForm();
  }, [formData]);


  const handleSubmit = async (event) => {
    setLoading(true)
    const loans = axios.create({
      baseURL: `https://nodebtdev.onrender.com/api`,
    });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      };
      const response = await loans.post(`/loans/create`, formData, config);
      console.log(response.data);
      handleModalTwo(true)
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
      showToastError()
    }
  };

  const handleClose = () => {
    handleModal(false); 
  };
  return (
    <div className="border border-gray-200 absolute z-[100] top-0 left-0 right-0 w-full bg-black bg-opacity-30 pt-[110px]">
      <ToastContainer />
      <div className="max-w-[80%] bg-white ml-auto py-4">
        <div className="flex flex-col">
          <div className="ml-6 mt-4 text-red-500  text-[24px]">
            <i
              className="fa-solid fa-xmark cursor-pointer"
              onClick={handleClose}
            ></i>
          </div>
          <div className="px-20 text-[24px] text-[#4D4D4D] font-[500] mb-10">
            <h3 className="text-[#0267FF] text-[24px] font-[600] mb-3 mt-12">
              Borrowers Data Preview
            </h3>
            {!!Object.keys(validationErrors).length && (
              <p className=" mt-4 text-red-500 text-[16px]">
                Please fill out all fields correctly
              </p>
            )}
            <p className="text-[24px] font-[500] text-[#4D4D4D] mt-8">
              Personal and contact Information
            </p>
          </div>

          <div className="flex flex-col space-y-5 border-b pb-28 mt-[15px] px-20">
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC]"
                value={value.personalInfo.fullName}
                disabled={true}
                placeholder="Full Name"
                error={validationErrors.fullname}
              />
              <TextField
                className="bg-white border-[#0252CC] "
                value={value.personalInfo.phoneNumber}
                disabled={true}
                error={validationErrors.phoneNumber}
                placeholder="Phone Number"
              />
            </div>
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.email}
                disabled={true}
                placeholder="Email"
                error={validationErrors.email}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.age}
                disabled={true}
                placeholder="Age"
                error={validationErrors.age}
              />
            </div>
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.gender}
                disabled={true}
                placeholder="Gender"
                error={validationErrors.gender}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.maritalStatus}
                disabled={true}
                placeholder="Marital Status"
                error={validationErrors.maritalStatus}
              />
            </div>

            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.address}
                disabled={true}
                placeholder="Address"
                error={validationErrors.address}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.nin}
                disabled={true}
                placeholder="National Identity Number"
                error={validationErrors.nationalIdentityNumber}
              />
            </div>

            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.employmentType}
                disabled={true}
                placeholder="Employment"
                error={validationErrors.employmentType}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.income}
                disabled={true}
                placeholder="Income"
                error={validationErrors.incomePerMonth}
              />
            </div>

            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.jobRole}
                disabled={true}
                placeholder="Job Role"
                error={validationErrors.jobRole}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.personalInfo.jobSector}
                disabled={true}
                placeholder="Job Sector"
                error={validationErrors.jobSector}
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
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.loanInfo.loanType}
                disabled={true}
                placeholder="Loan Type"
                error={validationErrors.loanType}
              />
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.loanInfo.repaymentType}
                disabled={true}
                placeholder="Repayment Type"
                error={validationErrors.repaymentType}
              />
            </div>
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC] w-96"
                value={value.loanInfo.loanAmount}
                disabled={true}
                placeholder="Loan Amount"
                error={validationErrors.loanAmount}
              />
            </div>

            <div className="py-4 ">
              <textarea
                className={`bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded p-4 ${
                  validationErrors.purposeOfLoan
                    ? "border text-red-300 border-red-500 bg-[#fd3d3d0f]"
                    : "border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]"
                }`}
                value={value.loanInfo.loanPurpose}
                disabled={true}
                placeholder="Purpose of Loan"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col border-b space-y-5 px-20 mt-20 pb-16  ">
            <div className="text-[24px] text-[#4D4D4D] font-[500] mb-16">
              Collateral Information
            </div>
            <div className="flex gap-36">
              <TextField
                className="bg-white border-[#0252CC]"
                value={value.collateralInfo.collateralType}
                disabled={true}
                placeholder="Collateral Type"
                error={validationErrors.collateralType}
              />
              <TextField
                className="bg-white border-[#0252CC]"
                value={value.collateralInfo.collateralValue}
                disabled={true}
                placeholder="Collateral Value"
                error={validationErrors.collateralValue}
              />
            </div>
            <div className="py-4">
              <textarea
                className={`bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded p-4 ${
                  validationErrors.collateralInformation
                    ? "border text-red-300 border-red-500 bg-[#fd3d3d0f]"
                    : "border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]"
                }`}
                value={value.collateralInfo.collateralInformation}
                disabled={true}
                placeholder="Colateral Information"
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
                  placeholder="Full Name"
                  value={value.guarantorInfo.fullName}
                  disabled={true}
                  error={validationErrors.guarantorFullName}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.phoneNumber}
                  disabled={true}
                  placeholder="Phone Number"
                  error={validationErrors.guarantorPhoneNumber}
                />
              </div>
              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.email}
                  disabled={true}
                  placeholder="Email"
                  error={validationErrors.guarantorEmail}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.age}
                  disabled={true}
                  placeholder="Age"
                  error={validationErrors.guarantorAge}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.address}
                  disabled={true}
                  placeholder="Address"
                  error={validationErrors.guarantorAddress}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.ssn}
                  disabled={true}
                  placeholder="Social Security Number"
                  error={validationErrors.guarantorSSN}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.relationship}
                  disabled={true}
                  placeholder="Relationship"
                  error={validationErrors.guarantorRelationship}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.employmentType}
                  disabled={true}
                  placeholder="Employment"
                  error={validationErrors.guarantorEmploymentType}
                />
              </div>

              <div className="flex gap-36">
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.incomeSource}
                  disabled={true}
                  placeholder="Source of Income"
                  error={validationErrors.guarantorIncomeSource}
                />
                <TextField
                  className="bg-white border-[#0252CC] w-96"
                  value={value.guarantorInfo.incomePerMonth}
                  disabled={true}
                  placeholder="Income"
                  error={validationErrors.guarantorIncomePerMonth}
                />
              </div>
            </div>
          </div>

          <div className="px-20 w-full text-[#333333] font-normal text-xl my-7">
            <i>
              After carefully reviewing the borrower's data form, go ahead to
              upload and check loan eligibility to predict loan default
            </i>
          </div>
        </div>

        <div className="flex items-center mb-6 px-8 w-64 ml-auto py-8">
          <Button
            className="text-white bg-[#0267FF] rounded"
            label="Upload Data"
            onClick={(e) => {
              handleSubmit(e);
              // showUserFormData();
              // handleModal(false);
              // handleModalTwo(true);
            }}
            disabled={!!Object.keys(validationErrors).length}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default PreviewForm;
