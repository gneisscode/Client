import React from 'react'
import TextField from '../../../../components/TextField'

const Collateral = () => {
  return (
    <>
      <div className='grid grid-cols-2 w-full gap-7 px-8'>
        <TextField
          className='bg-white border-[#0252CC] '
          placeholder='Collateral Type'
        />
        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Collateral Value'
        />
      </div>
      <div className='px-8 mt-24'>
        <textarea
          className='bg-white border border-[#0252CC] w-full h-14 px-4 py-4 rounded'
          placeholder='Provide collateral information e.g location, car model, mileage e.t.c'
        ></textarea>
      </div>
    </>
  )
}

export default Collateral
