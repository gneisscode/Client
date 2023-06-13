import React, { useContext, useState } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'
import { BorrowerFormData } from './BorrowersData'

const Collateral = () => {
  const [collateralType, setCollateralType] = useState(undefined)

  const collateralsType = [
    { id: 1, label: 'Real Estate', value: 'Real Estate' },
    { id: 2, label: 'Business Equipment', value: 'Business Equipment' },
    { id: 3, label: 'Inventory', value: 'Inventory' },
    { id: 4, label: 'Invoices', value: 'Invoices' },
    { id: 5, label: 'Cash', value: 'Cash' },
  ]

  const { value, setValue } = useContext(BorrowerFormData)

  // console.log({ collateralType })
  return (
    <>
      <div className='grid grid-cols-2 items-center  w-full gap-7 px-8'>
        <div>
          <SelectDropdown
            options={collateralsType}
            placeholder='Collateral Type'
            onChange={(val) => {
              setValue({
                ...value,
                collateralInfo: {
                  ...value.collateralInfo,
                  collateralType: val.value,
                },
              })
              setCollateralType(val.value)
            }}
          />
        </div>
        <TextField
          className='bg-white border-[#0252CC]'
          placeholder='Collateral Value'
          value={value.collateralInfo.collateralValue}
          onChange={(e) =>
            setValue({
              ...value,
              collateralInfo: {
                ...value.collateralInfo,
                collateralValue: e.target.value,
              },
            })
          }
        />
      </div>
      <div className='px-8 mt-24'>
        <textarea
          className='bg-white border border-[#0252CC] w-full h-14 px-4 py-4 rounded'
          placeholder='Provide collateral information e.g location, car model, mileage e.t.c'
          value={value.collateralInfo.collateralInformation}
          onChange={(e) =>
            setValue({
              ...value,
              collateralInfo: {
                ...value.collateralInfo,
                collateralInformation: e.target.value,
              },
            })
          }
        ></textarea>
      </div>
    </>
  )
}

export default Collateral
