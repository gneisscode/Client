import React, { useContext, useEffect, useState } from "react";
import TextField from "../../../../components/TextField";
import SelectDropdown from "../../../../components/SelectDropDown/SelectDropDown";
import { BorrowerFormData } from "./BorrowersData";

const PersonalInfo = () => {
  const { value, setValue } = useContext(BorrowerFormData);
  const [validationErrors, setValidationErrors] = useState();
  const [gender, setGender] = useState(value.personalInfo.gender);
  const [maritalStatus, setMaritalStatus] = useState(
    value.personalInfo.maritalStatus
  );
  const [jobSector, setJobSector] = useState(value.personalInfo.jobSector);
  const [employmentType, setEmploymentType] = useState(
    value.personalInfo.employmentType
  );

  const genderType = [
    { id: 1, label: "Male", value: "Male" },
    { id: 2, label: "Female", value: "Female" },
  ];

  const maritalType = [
    { id: 1, label: "Single", value: "Single" },
    { id: 2, label: "Married", value: "Married" },
    { id: 3, label: "Divorced", value: "Divorced" },
    { id: 4, label: "Separated", value: "Separated" },
    { id: 5, label: "Widowed", value: "Widowed" },
  ];

  const employmentTypes = [
    { id: 1, label: "Contract", value: "Contract" },
    { id: 2, label: "Self-Employed", value: "Self-Employed" },
    { id: 3, label: "Full-Time", value: "Full-Time" },
    { id: 4, label: "Part-Time", value: "Part-Time" },
    { id: 5, label: "Unemployed", value: "Unemployed" },
  ];

  const sectorType = [
    {
      id: 1,
      label: "Sales and Customer Service",
      value: "Sales and Customer Service",
    },
    { id: 2, label: "Education and Training", value: "Education and Training" },
    { id: 3, label: "Information Technology", value: "Information Technology" },
    {
      id: 4,
      label: "Operations and Logistics",
      value: "Operations and Logistics",
    },
    { id: 5, label: "Accounting and Finance", value: "Accounting and Finance" },
    { id: 6, label: "Human Resources", value: "Human Resources" },
    { id: 7, label: "Engineering", value: "Engineering" },
    {
      id: 8,
      label: "Marketing and Advertising",
      value: "Marketing and Advertising",
    },
    { id: 9, label: "Project Management", value: "Project Management" },
    { id: 10, label: "Legal", value: "Legal" },
    {
      id: 11,
      label: "Healthcare",
      value: "Healthcare",
    },
    { id: 12, label: "Others", value: "Others" },
  ];
  const handleEmailChange = (event) => {
    const email = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email format",
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

    const handleNameChange = (event) => {
      const fullName = event.target.value;
      const namePattern = /^[A-Za-z]+ [A-Za-z]+$/;

      if (!namePattern.test(fullName)) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "Full name is required",
        }));
      } else {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          fullName: "",
        }));
      }
    };

  const handleNumber = (event) => {
    const enteredNumber = event.target.value;
    const maxLength = 11;

    if (!/^\+\d{1,3}\d{6,14}$/.test(enteredNumber)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone Number is invalid",
      }));
   
   } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "",
      }));
    }
  };

  const handleId = (event) => {
    const enteredNumber = event.target.value;
    const maxLength = 11;

    if (enteredNumber.length !== maxLength) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        nationalIdentityNumber: `National Identity Number cannot be shorter than ${maxLength} digits`,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        nationalIdentityNumber: "",
      }));
    }
  };

  return (
    <div className="grid grid-cols-2 w-full gap-7 px-8 max-md:grid-cols-1">
      <div>
        <TextField
          className="bg-white border-[#0252CC] "
          placeholder="Full Name"
          value={value.personalInfo.fullName}
          onChange={(e) => {
            setValue({
              ...value,
              personalInfo: { ...value.personalInfo, fullName: e.target.value },
            });
            handleNameChange(e);
          }}
          error={validationErrors?.fullName}
          message={validationErrors?.fullName}
        />
      </div>
      <div>
        <TextField
          className="bg-white border-[#0252CC]"
          placeholder="Phone Number e.g. +12345678901234"
          value={value.personalInfo.phoneNumber}
          onChange={(e) => {
            setValue({
              ...value,
              personalInfo: {
                ...value.personalInfo,
                phoneNumber: e.target.value,
              },
            });
            handleNumber(e);
          }}
          error={validationErrors?.phoneNumber}
          message={validationErrors?.phoneNumber}
          title="Please enter numbers only"
        />
      </div>
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Email"
        value={value.personalInfo.email}
        onChange={(e) => {
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, email: e.target.value },
          });
          handleEmailChange(e);
        }}
        error={validationErrors?.email}
        message={validationErrors?.email}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Age"
        value={value.personalInfo.age}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, age: e.target.value },
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
      <SelectDropdown
        options={genderType}
        placeholder="Gender"
        onChange={(val) => {
          setValue({
            ...value,
            personalInfo: {
              ...value.personalInfo,
              gender: val.value,
            },
          });
          setGender(val.value);
        }}
      />

      <SelectDropdown
        options={maritalType}
        placeholder="Marital Status"
        onChange={(val) => {
          setValue({
            ...value,
            personalInfo: {
              ...value.personalInfo,
              maritalStatus: val.value,
            },
          });
          setMaritalStatus(val.value);
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Address"
        value={value.personalInfo.address}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, address: e.target.value },
          })
        }
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="National Identity Number"
        value={value.personalInfo.nin}
        onChange={(e) => {
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, nin: e.target.value },
          });
          handleId(e);
        }}
        error={validationErrors?.nationalIdentityNumber}
        message={validationErrors?.nationalIdentityNumber}
        onKeyDown={(e) => {
          const keyCode = e.which || e.keyCode;
          if (keyCode !== 8 && (keyCode < 48 || keyCode > 57)) {
            e.preventDefault();
          }
        }}
        title="Please enter numbers only"
        maxLength={11}
      />
      <SelectDropdown
        options={employmentTypes}
        placeholder="Employment"
        onChange={(val) => {
          setValue({
            ...value,
            personalInfo: {
              ...value.personalInfo,
              employmentType: val.value,
            },
          });
          setEmploymentType(val.value);
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder=" Job Role"
        value={value.personalInfo.jobRole}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, jobRole: e.target.value },
          })
        }
      />
      <SelectDropdown
        options={sectorType}
        placeholder="Job Sector"
        onChange={(val) => {
          setValue({
            ...value,
            personalInfo: {
              ...value.personalInfo,
              jobSector: val.value,
            },
          });
          setJobSector(val.value);
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Income per Month"
        value={value.personalInfo.income}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, income: e.target.value },
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
  );
};

export default PersonalInfo;
