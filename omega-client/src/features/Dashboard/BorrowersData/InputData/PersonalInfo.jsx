import React, { useState, useContext, useEffect } from "react";
import TextField from "../../../../components/TextField";


const PersonalInfo = ({ extractedFields, pdf }) => {
  const [pdfFile, setPdfFile] = useState(pdf);
  const [formFields, setFormFields] = useState({ ...extractedFields });



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
    <div className="grid grid-cols-2 w-full gap-7 px-8 max-md:grid-cols-1">
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Full Name"
        name="name"
        value={
          pdfFile
            ? formFields.name || extractedFields.name || ""
            : formFields.name || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Phone Number"
        name="phoneNumber"
        value={
          pdfFile
            ? formFields.phoneNumber || extractedFields.phoneNumber || ""
            : formFields.phoneNumber || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Email"
        name="email"
        value={
          pdfFile
            ? formFields.email || extractedFields.email || ""
            : formFields.email || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Date of Birth"
        name="DOB"
        value={
          pdfFile
            ? formFields.DOB || extractedFields.DOB || ""
            : formFields.DOB || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Address"
        name="address"
        value={
          pdfFile
            ? formFields.address || extractedFields.address || ""
            : formFields.address || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="National Identity Number"
        name="nin"
        value={
          pdfFile
            ? formFields.nin || extractedFields.nin || ""
            : formFields.nin || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Employment"
        name="employment"
        value={
          pdfFile
            ? formFields.employment || extractedFields.employment || ""
            : formFields.employment || ""
        }
        onChange={handleInputChange}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Income per month"
        name="income"
        value={
          pdfFile
            ? formFields.income || extractedFields.income || ""
            : formFields.income || ""
        }
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PersonalInfo;
