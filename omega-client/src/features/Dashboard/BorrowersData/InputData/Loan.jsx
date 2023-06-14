import React, { useState, useContext } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'
import { BorrowerFormData } from './BorrowersData'

const Loan = () => {
  const [loanType, setLoanType] = useState(undefined)
  const [repayType, setRepayType] = useState(undefined)

  const { value, setValue } = useContext(BorrowerFormData)

  const loansType = [
    { id: 1, label: 'Business Loan', value: 'Business Loan' },
    { id: 2, label: 'Student Loan', value: 'Student Loan' },
    { id: 3, label: 'Agricultural Loan', value: 'Agricultural Loan' },
    { id: 4, label: 'Housing Loan', value: 'Housing Loan' },
    { id: 5, label: 'Others', value: 'Others' },
  ]
  const repayTypeList = [
    { id: 1, label: 'Principal and Interest', value: 'Principal and Interest' },
  ]

  return (
    <>
      <div className='grid grid-cols-2 w-full gap-7 px-8'>
        <SelectDropdown
          options={loansType}
          placeholder='Loan Type'
          onChange={(val) => {
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                loanType: val.value,
              },
            })
            setLoanType(val.value)
          }}
        />
        <SelectDropdown
          options={repayTypeList}
          placeholder='Repayment Type'
          onChange={(val) => {
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                repaymentType: val.value,
              },
            })
            setRepayType(val.value)
          }}
        />

        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Loan Amount'
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
        />
      </div>
      <div className='px-8 mt-12'>
        <textarea
          className='bg-white border border-[#0252CC] w-full h-36 px-4 py-4 rounded'
          placeholder='Purpose of Loan'
          value={value.loanInfo.loanPurpose}
          onChange={(e) =>
            setValue({
              ...value,
              loanInfo: {
                ...value.loanInfo,
                loanPurpose: e.target.value,
              },
            })
          }
        ></textarea>
      </div>
    </>
  )
}

export default Loan
