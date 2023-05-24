import React, { useState } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'

const Collateral = () => {
  const [collateralType, setCollateralType] = useState(undefined)

  const collateralsType = [
    { id: 1, label: 'Collateral 1', value: 'Collateral 1' },
    { id: 2, label: 'Collateral 2', value: 'Collateral 2' },
    { id: 3, label: 'Collateral 3', value: 'Collateral 3' },
  ]

  console.log({ collateralType })
  return (
    <>
      <div className='grid grid-cols-2 items-center  w-full gap-7 px-8'>
        <div>
          <SelectDropdown
            options={collateralsType}
            placeholder='Collateral Type'
            onChange={(val) => setCollateralType(val.value)}
          />
        </div>
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
