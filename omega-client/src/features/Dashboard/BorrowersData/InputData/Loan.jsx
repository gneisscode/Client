import React, { useState } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'

const Loan = () => {
  const [loanType, setLoanType] = useState('')
  return (
    <>
      <div className='grid grid-cols-2 w-full gap-7 px-8'>
        <SelectDropdown options={[]} value={loanType} />
        {/* <TextField
          className='bg-white border-[#0252CC] '
          placeholder='Loan Type'
        /> */}
        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Repayment Type'
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
