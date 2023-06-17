import React, { useContext, useState } from "react";
import TextField from "../../../../components/TextField";
import { BorrowerFormData } from "./BorrowersData";
import SelectDropdown from "../../../../components/SelectDropDown/SelectDropDown";

const Gurarantors = () => {
  const { value, setValue } = useContext(BorrowerFormData);
  const [employmentType, setEmploymentType] = useState(undefined);
  const [relationship, setRelationship] = useState(undefined);
  const [validationErrors, setValidationErrors] = useState();

  const employmentTypes = [
    { id: 1, label: "Contract", value: "Contract" },
    { id: 2, label: "Self-Employed", value: "Self-Employed" },
    { id: 3, label: "Full-Time", value: "Full-Time" },
    { id: 4, label: "Part-Time", value: "Part-Time" },
    { id: 5, label: "Unemployed", value: "Unemployed" },
  ];

  const relationshipTypes = [
    { id: 1, label: "Sister", value: "Sister" },
    { id: 2, label: "Brother", value: "Brother" },
    { id: 3, label: "Parent", value: "Parent" },
    { id: 4, label: "Friend", value: "Friend" },
    { id: 5, label: "Spouse", value: "Spouse" },
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

    if (enteredNumber.length != maxLength) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        socialSecurityNumber: `Social Security Number cannot be shorter than ${maxLength} digits`,
      }));
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        socialSecurityNumber: "",
      }));
    }
  };

  return (
    <div className="grid grid-cols-2 w-full gap-7 px-8">
      <TextField
        className="bg-white border-[#0252CC] "
        placeholder="Name"
        value={value.guarantorInfo.fullName}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              fullName: e.target.value,
            },
          })
        }
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Phone Number e.g. +12345678901234"
        value={value.guarantorInfo.phoneNumber}
        onChange={(e) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              phoneNumber: e.target.value,
            },
          });
          handleNumber(e);
        }}
        error={validationErrors?.phoneNumber}
        message={validationErrors?.phoneNumber}
        title="Please enter numbers only"
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Email"
        value={value.guarantorInfo.email}
        onChange={(e) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              email: e.target.value,
            },
          });
          handleEmailChange(e);
        }}
        error={validationErrors?.email}
        message={validationErrors?.email}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Age"
        value={value.guarantorInfo.age}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              age: e.target.value,
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
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Address"
        value={value.guarantorInfo.address}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              address: e.target.value,
            },
          })
        }
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Social Security Number"
        value={value.guarantorInfo.ssn}
        onChange={(e) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              ssn: e.target.value,
            },
          });
          handleId(e);
        }}
        error={validationErrors?.socialSecurityNumber}
        message={validationErrors?.socialSecurityNumber}
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
        options={relationshipTypes}
        placeholder="Relationship"
        onChange={(val) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              relationship: val.value,
            },
          });
          setRelationship(val.value);
        }}
      />
      <SelectDropdown
        options={employmentTypes}
        placeholder="Employment"
        onChange={(val) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              employmentType: val.value,
            },
          });
          setEmploymentType(val.value);
        }}
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder="Other sources of Income"
        value={value.guarantorInfo.incomeSource}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              incomeSource: e.target.value,
            },
          })
        }
      />
      <TextField
        className="bg-white border-[#0252CC]"
        placeholder=" Income per month"
        value={value.guarantorInfo.incomePerMonth}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              incomePerMonth: e.target.value,
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
  );
};

export default Gurarantors;
