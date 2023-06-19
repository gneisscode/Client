import React from 'react'
import Select from 'react-select'

// select dropdown custom styles
export const selectCustomStyles = {
  menu: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    textTransform: 'capitalize',
  }),

  placeholder: (provided) => ({
    ...provided,
    color: '#A0A6AC',
  }),

  control: (provided, state) => ({
    ...provided,
    minHeight: '50px',
    fontSize: '14px',
    border: `1px solid #0252CC`,
    color: '#E7EDF2',
    borderRadius: '4px',
    textTransform: 'capitalize',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#3e8bff'
      : state.isFocused
      ? '#CCE1FF'
      : '',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'
    return { ...provided, opacity, transition }
  },
}

const SelectDropdown = ({
  defaultValue,
  onChange,
  styles,
  disabled,
  options,
  multiSelect,
  ...rest
}) => {
  return (
    <>
      {multiSelect ? (
        <Select
          isMulti
          isDisabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          {...rest}
        />
      ) : (
        <Select
          isDisabled={disabled}
          defaultValue={defaultValue}
          onChange={onChange}
          styles={styles || selectCustomStyles}
          options={options}
          {...rest}
        />
      )}
    </>
  )
}

export default SelectDropdown
