import React, { useContext } from 'react'
import TextField from '../../../../components/TextField'
import { BorrowerFormData } from './BorrowersData'

const Gurarantors = () => {
  const { value, setValue } = useContext(BorrowerFormData)

  return (
    <div className='grid grid-cols-2 w-full gap-7 px-8'>
      <TextField
        className='bg-white border-[#0252CC] '
        placeholder='Name'
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
        className='bg-white border-[#0252CC]'
        placeholder='Phone Number'
        value={value.guarantorInfo.phoneNumber}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              phoneNumber: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Email'
        value={value.guarantorInfo.email}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              email: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Date of Birth'
        value={value.guarantorInfo.dob}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              dob: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Address'
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
        className='bg-white border-[#0252CC]'
        placeholder='Social Security Number'
        value={value.guarantorInfo.ssn}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              ssn: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Relationship'
        value={value.guarantorInfo.relationship}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              relationship: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Employment'
        value={value.guarantorInfo.employment}
        onChange={(e) =>
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              employment: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Other sources of Income'
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
        className='bg-white border-[#0252CC]'
        placeholder=' Income per month'
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
      />
    </div>
  )
}

export default Gurarantors
