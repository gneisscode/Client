import React, { useState, useContext, useEffect } from 'react'
import TextField from '../../../../components/TextField'
import Button from '../../../../components/Button'
import { PDFDocument } from 'pdf-lib'
import { Context } from '../../../../context/Context'
import axios from 'axios'

const Upload = () => {
  const { user } = useContext(Context)
  const [pdfFile, setPdfFile] = useState({})
  const [formFields, setFormFields] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    DOB: '',
    address: '',
    nin: '',
    employment: '',
    income: '',
    loanType: '',
    repaymentType: '',
    loanAmount: '',
    loanPurpose: '',
    collateralValue: '',
    collateralInfo: '',
    collateralType: '',
    guarantorName: '',
    guarantorEmail: '',
    guarantorDOB: '',
    guarantorPhoneNumber: '',
    guarantorAddress: '',
    guarantorNin: '',
    guarantorRelationship: '',
    guarantorEmployment: '',
    guarantorIncome: '',
    guarantorOtherIncome: '',
  })

  const [formData, setFormData] = useState({
    guarantor: {
      fullname: formFields.guarantorName,
      phoneNumber: formFields.guarantorPhoneNumber,
      email: formFields.guarantorEmail,
      dateOfBirth: formFields.guarantorDOB,
      address: formFields.address,
      socialSecurityNumber: formFields.guarantorNin,
      relationship: formFields.guarantorRelationship,
      employment: formFields.guarantorEmployment,
      incomePerMonth: formFields.guarantorIncome,
      otherSourcesOfIncome: formFields.guarantorOtherIncome,
    },
    loanAmount: formFields.loanAmount,
    fullname: formFields.name,
    email: formFields.email,
    address: formFields.address,
    employmentType: formFields.employment,
    phoneNumber: formFields.phoneNumber,
    dateOfBirth: formFields.DOB,
    nationalIdentityNumber: formFields.nin,
    incomePerMonth: formFields.income,
    loanType: formFields.loanType,
    repaymentType: formFields.repaymentType,
    purposeOfLoan: formFields.loanPurpose,
    collateralType: formFields.collateralType,
    collateralValue: formFields.collateralValue,
    collateralInformation: formFields.collateralInfo,
  })

  useEffect(() => {
    setFormData({
      guarantor: {
        fullname: formFields.guarantorName,
        phoneNumber: formFields.guarantorPhoneNumber,
        email: formFields.guarantorEmail,
        dateOfBirth: formFields.guarantorDOB,
        address: formFields.address,
        socialSecurityNumber: formFields.guarantorNin,
        relationship: formFields.guarantorRelationship,
        employment: formFields.guarantorEmployment,
        incomePerMonth: formFields.guarantorIncome,
        otherSourcesOfIncome: formFields.guarantorOtherIncome,
      },
      loanAmount: formFields.loanAmount,
      fullname: formFields.name,
      email: formFields.email,
      address: formFields.address,
      employmentType: formFields.employment,
      phoneNumber: formFields.phoneNumber,
      dateOfBirth: formFields.DOB,
      nationalIdentityNumber: formFields.nin,
      incomePerMonth: formFields.income,
      loanType: formFields.loanType,
      repaymentType: formFields.repaymentType,
      purposeOfLoan: formFields.loanPurpose,
      collateralType: formFields.collateralType,
      collateralValue: formFields.collateralValue,
      collateralInformation: formFields.collateralInfo,
    })
    console.log(formData)
  }, [formFields])
  const handleFileChange = async (event) => {
    const file = event.target.files[0]
    try {
      const reader = new FileReader()
      reader.onload = async (e) => {
        const pdfData = new Uint8Array(e.target.result)
        const pdfDoc = await PDFDocument.load(pdfData)
        setPdfFile(pdfDoc)
        console.log(pdfFile)

        const form = pdfDoc.getForm()

        const extractedFields = {}

        for (const [fieldName, fieldValue] of Object.entries(formFields)) {
          try {
            const textField = form.getTextField(fieldName)
            if (textField) {
              extractedFields[fieldName] = textField.getText() ?? ''
            }
          } catch (error) {
            extractedFields[fieldName] = ''
          }
        }

        setFormFields(extractedFields)
        console.log(extractedFields)
      }

      reader.readAsArrayBuffer(file)
    } catch (error) {
      console.error('Error reading the PDF file:', error)
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormFields((prevFormFields) => ({
      ...prevFormFields,
      [name]: value,
    }))
    console.log(formFields)
  }

  const handleSubmit = async (event) => {
    const loans = axios.create({
      baseURL: `https://nodebtdev.onrender.com/api`,
    })
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.access_token}`,
        },
      }
      const response = await loans.post(`/loans/create`, formData, config)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='border border-gray-200 absolute z-[100] top-0 left-0 right-0 w-full bg-black bg-opacity-30 pt-[110px]'>
      <div className='max-w-[80%] bg-white ml-auto py-4'>
        <div className='flex flex-col'>
          {/* Personal and contact Information */}
          <div className='px-20 text-[24px] text-[#4D4D4D] font-[500] mb-10'>
            <h3 className='text-[#0267FF] text-[24px] font-[600] mb-3 mt-12'>
              Borrowers Data Preview
            </h3>
            <input
              type='file'
              accept='application/pdf'
              onChange={handleFileChange}
            />
            <p className='text-[20px] font-[500] text-[#4D4D4D]'>
              Personal and contact Information
            </p>
          </div>

          <div className='flex flex-col space-y-5 border-b pb-28 mt-[51px] px-20'>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC]'
                value={formFields.name}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] '
                value={formFields.phoneNumber}
                disabled={true}
              />
            </div>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.email}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.DOB}
                disabled={true}
              />
            </div>

            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.address}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.nin}
                disabled={true}
              />
            </div>

            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.employment}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.income}
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          {/* Loan Information */}
          <div className='text-[24px] text-[#4D4D4D] font-[500] px-20 mt-20'>
            Loan Information
          </div>

          <div className='flex flex-col  space-y-5 border-b pb-16 mt-16 px-20'>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                name='loanType'
                onChange={handleInputChange}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                name='repaymentType'
                onChange={handleInputChange}
              />
            </div>
            <div className='flex gap-36'>
              <TextField className='bg-white border-[#0252CC] w-96' />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.loanAmount}
                disabled={true}
              />
            </div>

            <div className='py-4'>
              <textarea
                className='bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded'
                value={formFields.loanPurpose}
                disabled={true}
              ></textarea>
            </div>
          </div>

          {/* Collateral Information */}
          <div className='flex flex-col border-b space-y-5 px-20 mt-20 pb-16'>
            <div className='text-[24px] text-[#4D4D4D] font-[500] mb-16'>
              Collateral Information
            </div>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC]'
                name='collateralType'
                onChange={handleInputChange}
              />
              <TextField
                className='bg-white border-[#0252CC]'
                value={formFields.collateralValue}
                disabled={true}
              />
            </div>
            <div className='py-4'>
              <textarea
                className='bg-[#EEF5FC] border border-[#0252CC] w-full h-32 rounded'
                value={formFields.collateralInfo}
                disabled={true}
              ></textarea>
            </div>
          </div>

          {/* Guarantor's Information */}
          <div className='flex flex-col border-b pb-16 px-20'>
            <div className='text-[24px] text-[#4D4D4D] font-[500] mt-20 mb-16'>
              Guarantor's Information
            </div>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorName}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorPhoneNumber}
                disabled={true}
              />
            </div>
            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorEmail}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorDOB}
                disabled={true}
              />
            </div>

            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorAddress}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorNin}
                disabled={true}
              />
            </div>

            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorRelationship}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorEmployment}
                disabled={true}
              />
            </div>

            <div className='flex gap-36'>
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorIncome}
                disabled={true}
              />
              <TextField
                className='bg-white border-[#0252CC] w-96'
                value={formFields.guarantorOtherIncome}
                disabled={true}
              />
            </div>
          </div>
        </div>

        <div className='flex justify-center my-8'>
          <button
            className='bg-[#0267FF] text-white text-[16px] py-2 px-8 rounded hover:bg-[#0252CC]'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Upload
