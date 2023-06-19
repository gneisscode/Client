import React, { useState, useContext, useEffect } from "react";
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import { PDFDocument } from "pdf-lib";
import { Context } from "../../../../context/Context";
import axios from "axios";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";

const Upload = () => {
  const { user } = useContext(Context);
  const [pdfFile, setPdfFile] = useState({});
   const [eligibility, setEligibility] = useState("");
   const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    age: "",
    gender: "",
    maritalStatus: "",
    address: "",
    nin: "",
    employment: "",
    jobSector: "",
    jobRole: "",
    income: "",
    loanType: "",
    repaymentType: "",
    loanAmount: "",
    loanPurpose: "",
    collateralValue: "",
    collateralInfo: "",
    collateralType: "",
    guarantorName: "",
    guarantorEmail: "",
    guarantorAge: "",
    guarantorPhoneNumber: "",
    guarantorAddress: "",
    guarantorSSN: "",
    guarantorRelationship: "",
    guarantorEmployment: "",
    guarantorIncome: "",
    guarantorOtherIncome: "",
  });

  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      guarantor: {
        fullname: formFields.guarantorName,
        phoneNumber: formFields.guarantorPhoneNumber,
        email: formFields.guarantorEmail,
        age: parseInt(formFields.guarantorAge),
        address: formFields.address,
        socialSecurityNumber: formFields.guarantorSSN,
        relationship: formFields.guarantorRelationship,
        employmentType: formFields.guarantorEmployment,
        incomePerMonth: parseInt(formFields.guarantorIncome),
        otherSourcesOfIncome: formFields.guarantorOtherIncome,
      },
      fullname: formFields.name,
      email: formFields.email,
      address: formFields.address,
      employmentType: formFields.employment,
      jobSector: formFields.jobSector,
      jobRole: formFields.jobRole,
      phoneNumber: formFields.phoneNumber,
      age: parseInt(formFields.age),
      gender: formFields.gender,
      maritalStatus: formFields.maritalStatus,
      nationalIdentityNumber: formFields.nin,
      incomePerMonth: parseInt(formFields.income),
      loanAmount: parseInt(formFields.loanAmount),
      loanType: formFields.loanType,
      repaymentType: formFields.repaymentType,
      purposeOfLoan: formFields.loanPurpose,
      collateralType: formFields.collateralType,
      collateralValue: parseInt(formFields.collateralValue),
      collateralInformation: formFields.collateralInfo,
    });
    console.log(formData);
    console.log(formFields)
  }, [formFields]);
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        const pdfDoc = await PDFDocument.load(pdfData);
        setPdfFile(pdfDoc);
        console.log(pdfFile);

        const form = pdfDoc.getForm();

        const extractedFields = {};

        for (const [fieldName, fieldValue] of Object.entries(formFields)) {
          try {
            const textField = form.getTextField(fieldName);
            if (textField) {
              extractedFields[fieldName] = textField.getText() ?? "";
            }
          } catch (error) {
            extractedFields[fieldName] = "";
          }
        }

        setFormFields(extractedFields);
        console.log(extractedFields);
        console.log(formFields)
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error reading the PDF file:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }));
    console.log(formFields);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      };
      const response = await axios.post(`/loans/create`, formData, config);
      console.log(response.data);
       const eligibility = response.data.data.loan.eligibility;
       const loan_id = response.data.data.loan._id;
       setEligibility(eligibility);

       if (eligibility === true) {
         window.location.replace(`eligibility/successful/${loan_id}`);
       } else if (eligibility === false) {
         window.location.replace(`eligibility/declined/${loan_id}`);
       }
       setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        <div className="flex justify-center  absolute top-[112px] left-[300px] my-[40px] ml-[52px] w-[920px]">
          <div className="bg-white w-[100%]">
            <div className="flex flex-col">
              {/* Personal and contact Information */}
              <div className=" text-[24px] text-[#4D4D4D] font-[500] mb-4">
                <h3 className="text-[#0267FF] text-[24px] font-[600] mb-3">
                  Borrowers Data Preview
                </h3>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                  className="text-[16px] mt-4"
                />
              </div>

              <div className="flex flex-col border-b space-y-5  pb-16">
                <p className="text-[24px] font-[500] text-[#4D4D4D] my-12">
                  Personal and contact Information
                </p>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC]"
                    value={formFields.name}
                    disabled={true}
                    placeholder="Full Name"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] "
                    value={formFields.phoneNumber}
                    disabled={true}
                    placeholder="Phone Number"
                  />
                </div>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.email}
                    disabled={true}
                    placeholder="Email"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.age}
                    disabled={true}
                    placeholder="Age"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.gender}
                    disabled={true}
                    placeholder="Gender"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.maritalStatus}
                    disabled={true}
                    placeholder="Marital Status"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.address}
                    disabled={true}
                    placeholder="address"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.nin}
                    disabled={true}
                    placeholder="National Identity Number"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.employment}
                    disabled={true}
                    placeholder="Employment"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.jobRole}
                    disabled={true}
                    placeholder="Job Role"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.jobSector}
                    disabled={true}
                    placeholder="Job Sector"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.income}
                    disabled={true}
                    placeholder="Income per Month"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Loan Information */}
              <div className="text-[24px] text-[#4D4D4D] font-[500]  mt-20">
                Loan Information
              </div>

              <div className="flex flex-col  space-y-5 border-b pb-16 mt-16 ">
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    name="loanType"
                    onChange={handleInputChange}
                    value={formFields.loanType}
                    placeholder="Loan Type"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    name="repaymentType"
                    onChange={handleInputChange}
                    value={formFields.repaymentType}
                    placeholder="Repayment Type"
                  />
                </div>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.loanAmount}
                    disabled={true}
                    placeholder="Loan Amount"
                  />
                </div>

                <div className="py-4">
                  <textarea
                    className="bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded p-4"
                    value={formFields.loanPurpose}
                    disabled={true}
                    placeholder="Purpose of Loan"
                  ></textarea>
                </div>
              </div>

              {/* Collateral Information */}
              <div className="flex flex-col border-b space-y-5  mt-20 pb-16">
                <div className="text-[24px] text-[#4D4D4D] font-[500] mb-16">
                  Collateral Information
                </div>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC]"
                    name="collateralType"
                    onChange={handleInputChange}
                    value={formFields.collateralType}
                    placeholder="Collateral Type"
                  />
                  <TextField
                    className="bg-white border-[#0252CC]"
                    value={formFields.collateralValue}
                    disabled={true}
                    placeholder="Collateral Value"
                  />
                </div>
                <div className="py-4">
                  <textarea
                    className="bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded p-4"
                    value={formFields.collateralInfo}
                    disabled={true}
                    placeholder="Collateral Information"
                  ></textarea>
                </div>
              </div>

              {/* Guarantor's Information */}
              <div className="flex flex-col border-b pb-16 ">
                <div className="text-[24px] text-[#4D4D4D] font-[500] mt-20 mb-16">
                  Guarantor's Information
                </div>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorName}
                    disabled={true}
                    placeholder="Full Name"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorPhoneNumber}
                    disabled={true}
                    placeholder=" Phone Number"
                  />
                </div>
                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorEmail}
                    disabled={true}
                    placeholder="Email"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorAge}
                    disabled={true}
                    placeholder="Age"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorAddress}
                    disabled={true}
                    placeholder="Address"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorSSN}
                    disabled={true}
                    placeholder="Social Security Number"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorRelationship}
                    disabled={true}
                    placeholder="Relationship"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorEmployment}
                    disabled={true}
                    placeholder="Employment"
                  />
                </div>

                <div className="flex gap-36">
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorIncome}
                    disabled={true}
                    placeholder="Income per Month"
                  />
                  <TextField
                    className="bg-white border-[#0252CC] w-96"
                    value={formFields.guarantorOtherIncome}
                    disabled={true}
                    placeholder="Other Sources of Income"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center mb-6  w-64 ml-auto py-8 ">
              <Button
                className="text-white bg-[#0267FF] rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300"
                label="Upload Data"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                disabled={loading}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
