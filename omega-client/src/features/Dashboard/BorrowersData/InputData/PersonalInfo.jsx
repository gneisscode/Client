import React from 'react'
import TextField from '../../../../components/TextField'

const PersonalInfo = () => {
  return (
    <div className='grid grid-cols-2 w-full gap-7 px-8 max-md:grid-cols-1'>
      <TextField
        className='bg-white border-[#0252CC] '
        placeholder='Full Name'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Phone Number'
      />
      <TextField className='bg-white border-[#0252CC]' placeholder='Email' />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Date of Birth'
      />
      <TextField className='bg-white border-[#0252CC]' placeholder='Address' />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='National Identity Number'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Employment'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Income per month'
      />
    </div>
  )
}

export default PersonalInfo
