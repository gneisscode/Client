import React, { useContext, useState } from 'react'
import TextField from '../../../../components/TextField'
import { BorrowerFormData } from './BorrowersData'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'

const Gurarantors = () => {
  const { value, setValue } = useContext(BorrowerFormData)
  const [employmentType, setEmploymentType] = useState(undefined)
  const [relationship, setRelationship] = useState(undefined)

  const employmentTypes = [
    { id: 1, label: 'Contract', value: 'Contract' },
    { id: 2, label: 'Self-Employed', value: 'Self-Employed' },
    { id: 3, label: 'Full-Time', value: 'Full-Time' },
    { id: 4, label: 'Part-Time', value: 'Part-Time' },
    { id: 5, label: 'Unemployed', value: 'Unemployed' },
  ]

  const relationshipTypes = [
    { id: 1, label: 'Sister', value: 'Sister' },
    { id: 2, label: 'Brother', value: 'Brother' },
    { id: 3, label: 'Parent', value: 'Parent' },
    { id: 4, label: 'Friend', value: 'Friend' },
    { id: 5, label: 'Spouse', value: 'Spouse' },
  ]

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
        placeholder='Age'
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
      <SelectDropdown
        options={relationshipTypes}
        placeholder='Relationship'
        onChange={(val) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              relationship: val.value,
            },
          })
          setRelationship(val.value)
        }}
      />
      <SelectDropdown
        options={employmentTypes}
        placeholder='Employment'
        onChange={(val) => {
          setValue({
            ...value,
            guarantorInfo: {
              ...value.guarantorInfo,
              employmentType: val.value,
            },
          })
          setEmploymentType(val.value)
        }}
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
