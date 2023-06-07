import React, { useState, useContext, useEffect } from "react";
import TextField from "../../../../components/TextField";
import { BorrowerFormData } from "./BorrowersData";

const Gurarantors = ({ extractedFields, pdf }) => {
  const [pdfFile, setPdfFile] = useState(pdf);
  const [formFields, setFormFields] = useState({ ...extractedFields });
  const { value, setValue } = useContext(BorrowerFormData);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (pdfFile) {
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: value,
      }));
    } else {
      event.persist();
      setFormFields((prevFormFields) => ({
        ...prevFormFields,
        [name]: value,
      }));
      console.log(formFields);
    }
  };

  return (
    <div className="grid grid-cols-2 w-full gap-7 px-8">
      <TextField
        className="bg-white border-[#0252CC] "
        placeholder="Name"
        name="guarantorName"
        value={
          pdfFile
            ? formFields.guarantorName || extractedFields.guarantorName || ""
            : formFields.guarantorName || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorName: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Phone Number"
        name="guarantorPhoneNumber"
        value={
          pdfFile
            ? formFields.guarantorPhoneNumber ||
              extractedFields.guarantorPhoneNumber ||
              ""
            : formFields.guarantorPhoneNumber || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorPhoneNumber: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Email"
        name="guarantorEmail"
        value={
          pdfFile
            ? formFields.guarantorEmail || extractedFields.guarantorEmail || ""
            : formFields.guarantorEmail || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorEmail: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Date of Birth"
        name="guarantorDOB"
        value={
          pdfFile
            ? formFields.guarantorDOB || extractedFields.guarantorDOB || ""
            : formFields.guarantorDOB || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorDOB: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Address"
        name="guarantorAddress"
        value={
          pdfFile
            ? formFields.guarantorAddress ||
              extractedFields.guarantorAddress ||
              ""
            : formFields.guarantorAddress || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorAddress: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="National Identity Number"
        name="guarantorNin"
        value={
          pdfFile
            ? formFields.guarantorNin || extractedFields.guarantorNIN || ""
            : formFields.guarantorNin || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorNin: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Relationship"
        name="guarantorRelationship"
        value={
          pdfFile
            ? formFields.guarantorRelationship ||
              extractedFields.guarantorRelationship ||
              ""
            : formFields.guarantorRelationship || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorRelationship: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Employment"
        name="guarantorEmployment"
        value={
          pdfFile
            ? formFields.guarantorEmployment ||
              extractedFields.guarantorEmployment ||
              ""
            : formFields.guarantorEmployment || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorEmployment: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Other sources of Income"
        name="guarantorOtherIncome"
        value={
          pdfFile
            ? formFields.guarantorOtherIncome ||
              extractedFields.guarantorOtherIncome ||
              ""
            : formFields.guarantorOtherIncome || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorOtherIncome: e.target.value,
          }));
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Income per month"
        name="guarantorIncome"
        value={
          pdfFile
            ? formFields.guarantorIncome ||
              extractedFields.guarantorIncome ||
              ""
            : formFields.guarantorIncome || ""
        }
        onChange={(e) => {
          handleInputChange(e);
          setValue((prevValue) => ({
            ...prevValue,
            guarantorIncome: e.target.value,
          }));
        }}
      />
    </div>
  );
};

export default Gurarantors;
