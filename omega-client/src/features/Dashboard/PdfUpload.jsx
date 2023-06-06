import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";

const PdfUpload = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    DOB: "",
    address: "",
    nin: "",
    employment: "",
    income: "",
    loanAmount: "",
    loanPurpose: "",
    collateralValue: "",
    collateralInfo: "",
    guarantorName: "",
    guarantorEmail: "",
    guarantorDOB: "",
    guarantorPhoneNumber: "",
    guarantorAddress: "",
    guarantorNin: "",
    guarantorRelationship: "",
    guarantorEmployment: "",
    guarantorIncome: "",
    guarantorOtherIncome: "",
  });

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setPdfFile(file);

    try {
      const reader = new FileReader();
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result);
        const pdfDoc = await PDFDocument.load(pdfData);

        const form = pdfDoc.getForm();

        const extractedFields = {};

        for (const [fieldName, fieldValue] of Object.entries(formFields)) {
          try {
            const textField = form.getTextField(fieldName);
            if (textField) {
              extractedFields[fieldName] = textField.getText() ?? "";
            }
          } catch (error) {
            // Field not found in the PDF
            extractedFields[fieldName] = "";
          }
        }

        setFormFields(extractedFields);
        console.log(extractedFields);
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error reading the PDF file:", error);
    }
  };

  return (
    <div>
      <input type="file" accept="application/pdf" onChange={handleFileChange} />
      <div>
        <h2>Form Fields</h2>
        <ul>
          {Object.entries(formFields).map(([fieldName, fieldValue], index) => (
            <li key={index}>
              {fieldName}: {fieldValue}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PdfUpload;




