import React, { useContext } from 'react'
import TextField from '../../../../components/TextField'
import { BorrowerFormData } from './BorrowersData'

const PersonalInfo = () => {
  const { value, setValue } = useContext(BorrowerFormData)

  return (
    <div className='grid grid-cols-2 w-full gap-7 px-8 max-md:grid-cols-1'>
      <TextField
        className='bg-white border-[#0252CC] '
        placeholder='Full Name'
        value={value.personalInfo.fullName}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, fullName: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Phone Number'
        value={value.personalInfo.phoneNumber}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: {
              ...value.personalInfo,
              phoneNumber: e.target.value,
            },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Email'
        value={value.personalInfo.email}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, email: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Date of Birth'
        value={value.personalInfo.dob}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, dob: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Address'
        value={value.personalInfo.address}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, address: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='National Identity Number'
        value={value.personalInfo.nin}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, nin: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Employment'
        value={value.personalInfo.employment}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, employment: e.target.value },
          })
        }
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Income per month'
        value={value.personalInfo.income}
        onChange={(e) =>
          setValue({
            ...value,
            personalInfo: { ...value.personalInfo, income: e.target.value },
          })
        }
      />
    </div>
  )
}

export default PersonalInfo
