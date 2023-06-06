import React, { useState, useEffect } from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Circle from "../../../../components/Circle/circle";
import PersonalInfo from "./PersonalInfo";
import Gurarantors from "./Gurarantors";
import Loan from "./Loan";
import Collateral from "./Collateral";
import Modal from "../../../../components/Modal/modal";
import PreviewForm from "../Preview/PreviewForm";
import { useNavigate } from "react-router-dom";
import { PDFDocument } from "pdf-lib";

const BorrowersData = () => {
  const navigate = useNavigate();
  const slides = [0, 1, 2, 3];

  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOne, setModalOne] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);
  // const [logOutModal, setLogOutModal] = useState(false)
  const [showPreviewForm, setShowPreviewForm] = useState(false);
  const [pdfFile, setPdfFile] = useState({});
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
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error reading the PDF file:", error);
    }
  };



  const steps = {
    0: {
      id: 0,
      title: "Personal and contact Information",
      form: <PersonalInfo extractedFields={formFields} pdf={pdfFile} />,
    },
    1: {
      id: 1,
      title: "Loan Information",
      form: <Loan extractedFields={formFields} pdf={pdfFile} />,
    },
    2: {
      id: 2,
      title: "Collateral Information",
      form: <Collateral extractedFields={formFields} pdf={pdfFile} />,
    },
    3: {
      id: 3,
      title: "Guarantor’s Information",
      form: <Gurarantors extractedFields={formFields} pdf={pdfFile} />,
    },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeIndex]);

  const step = steps[activeIndex];

  // File Upload Feature

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative">
        <Sidebar />
        {showPreviewForm && <PreviewForm handleModal={setModalTwo} />}
        <Modal isOpen={modalOne} onClose={() => setModalOne(false)}>
          <section className="w-[500px] bg-slate-200 p-12 flex flex-col items-center justify-center">
            <p className="text-black text-center mb-10 font-md text-xl">
              Borrower's data has been saved. Kindly preview data
            </p>
            <Button
              className="text-white bg-[#0267FF] w-64"
              label="Preview"
              onClick={() => {
                setModalOne(false);
                setShowPreviewForm(true);
              }}
            />
            <div>
              <Button
                className="text-red-600 w-64 mt-5"
                label="Cancel"
                onClick={() => setModalOne(false)}
              />
            </div>
          </section>
        </Modal>

        <Modal isOpen={modalTwo} onClose={() => setModalTwo(false)}>
          <section className="w-[500px] bg-slate-200 p-12 flex flex-col items-center justify-center">
            <p className="text-black text-center mb-10 font-md text-xl">
              Borrower's data has been uploaded successfully!
            </p>
            <Button
              className="text-white bg-[#0267FF] w-64"
              label="Check Eligibility Status"
              onClick={() => {
                setModalTwo(false);
                navigate("/borrower-eligibility");
              }}
            />
          </section>
        </Modal>

        {/* <Modal isOpen={logOutModal} onClose={() => setLogOutModal(false)}>
          <section className='w-[500px] bg-slate-200 p-12 flex flex-col items-center justify-center'>
            <p className='text-black text-center mb-10 font-md text-xl'>
              Are you sure you want to Log out?
            </p>
            <div className='flex flex-col-2 font-medium text-xl'>
              <Button
                className='text-[#FF2727] '
                label='Yes'
                onClick={() => {
                  navigate('/login')
                }}
              />
              <Button
                className='text-[#0267FF] font-medium text-xl'
                label='No'
                onClick={() => setLogOutModal(false)}
              />
            </div>
          </section>
        </Modal> */}

        <section className="flex justify-center ml-[52px]  absolute top-[112px] left-[300px] my-[40px]">
          <div>
            <div className="flex flex-col gap-[16px]">
              <h3 className="text-[#0267FF] text-[24px] font-[600]">
                Input Borrower's Data
              </h3>
              <p className="text-[20px] font-[500] text-[#4D4D4D]">
                Carefully input the borrowers details
              </p>
              <div>
                <p>Or upload a pre-filled form</p>
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="flex w-full mt-16">
              <Card className="min-h-[700px] relative">
                <div className="mt-12 mb-16 px-8">
                  <h2 className="text-[#4D4D4D] text-[20px] font-[600]">
                    {step.title}
                  </h2>
                </div>
                {step.form}
                <div className="mt-8"></div>
                <div className="bottom-10 absolute flex items-center justify-center w-full">
                  <Circle
                    slides={slides}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                  />
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-2 justify-between items-center gap-20 mt-16 pb-[147px]">
              {activeIndex !== 0 ? (
                <Button
                  className="bg-white text-[#0267FF] border border-[#0267FF] w-4/12"
                  label="Previous"
                  onClick={() => setActiveIndex((prev) => prev - 1)}
                />
              ) : (
                <div className="w-4/12"></div>
              )}
              <Button
                className={`text-white bg-[#0267FF] ${
                  activeIndex === 0 ? "w-4/12" : "w-4/12"
                }`}
                label={activeIndex === 3 ? "Save Data" : "Next"}
                onClick={() =>
                  activeIndex === 3
                    ? setModalOne(true)
                    : setActiveIndex((prev) => prev + 1)
                }
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BorrowersData;
