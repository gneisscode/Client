import React from 'react'
import TextField from '../../../../components/TextField'

const Gurarantors = () => {
  return (
    <div className='grid grid-cols-2 w-full gap-7 px-8'>
      <TextField className='bg-white border-[#0252CC] ' placeholder='Name' />
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
        placeholder='Social Security Number'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Relationship'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Employment'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder='Other sources of Income'
      />
      <TextField
        className='bg-white border-[#0252CC]'
        placeholder=' Income per month'
      />
    </div>
  )
}

export default Gurarantors
