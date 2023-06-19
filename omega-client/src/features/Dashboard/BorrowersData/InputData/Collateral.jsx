import React, { useContext, useState } from 'react'
import TextField from '../../../../components/TextField'
import SelectDropdown from '../../../../components/SelectDropDown/SelectDropDown'
import { BorrowerFormData } from './BorrowersData'

const Collateral = () => {
  const [collateralType, setCollateralType] = useState(undefined)
  const [validationErrors, setValidationErrors] = useState()

  const collateralsType = [
    { id: 1, label: 'Real Estate', value: 'Real Estate' },
    { id: 2, label: 'Business Equipment', value: 'Business Equipment' },
    { id: 3, label: 'Inventory', value: 'Inventory' },
    { id: 4, label: 'Invoices', value: 'Invoices' },
    { id: 5, label: 'Cash', value: 'Cash' },
  ]

  const { value, setValue } = useContext(BorrowerFormData)

  const handleField = (event) => {
    const value = event.target.value
    const minLength = 50

    if (value.length < minLength) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        collateralInfo: `Collateral Information must be at least ${minLength} characters long`,
      }))
    } else {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        collateralInfo: '',
      }))
    }
  }
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
          onKeyDown={(e) => {
            const keyCode = e.which || e.keyCode
            if (keyCode !== 8 && (keyCode < 48 || keyCode > 57)) {
              e.preventDefault()
            }
          }}
          title='Please enter numbers only'
        />
      </div>
      <div className='px-8 mt-24'>
        <textarea
          className={`bg-white outline-none border border-[#0252CC] w-full h-36 rounded p-4 ${
            validationErrors?.collateralInfo
              ? 'border text-red-300 border-red-500 bg-[#fd3d3d0f]'
              : 'border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]'
          }`}
          placeholder='Provide collateral information e.g location, car model, mileage e.t.c'
          value={value.collateralInfo.collateralInformation}
          onChange={(e) => {
            setValue({
              ...value,
              collateralInfo: {
                ...value.collateralInfo,
                collateralInformation: e.target.value,
              },
            })
            handleField(e)
          }}
        ></textarea>
        {validationErrors?.collateralInfo && (
          <small style={{ color: '#e11900' }}>
            {validationErrors?.collateralInfo}
          </small>
        )}
      </div>
    </>
  )
}

export default Collateral
