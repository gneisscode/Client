import React, { useState } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'

const Loan = () => {
  const [loanType, setLoanType] = useState(undefined)
  const [repayType, setRepayType] = useState(undefined)

  const loansType = [
    { id: 1, label: 'Loan 1', value: 'Loan 1' },
    { id: 2, label: 'Loan 2', value: 'Loan 2' },
    { id: 3, label: 'Loan 3', value: 'Loan 3' },
  ]
  const repayTypeList = [
    { id: 1, label: 'Repay 1', value: 'Repay 1' },
    { id: 2, label: 'Repay 2', value: 'Repay 2' },
    { id: 3, label: 'Repay 3', value: 'Repay 3' },
  ]

  return (
    <>
      <div className='grid grid-cols-2 w-full gap-7 px-8'>
        <SelectDropdown
          options={loansType}
          placeholder='Loan Type'
          onChange={(val) => setLoanType(val.value)}
        />
        <SelectDropdown
          options={repayTypeList}
          placeholder='Repayment Type'
          onChange={(val) => setRepayType(val.value)}
        />

        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Upload Credit Report'
        />
        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Upload Credit Score'
        />
      </div>
      <div className='px-8 mt-12'>
        <textarea
          className='bg-white border border-[#0252CC] w-full h-36 px-4 py-4 rounded'
          placeholder='Purpose of Loan'
        ></textarea>
      </div>
    </>
  )
}

export default Loan