import React from 'react'
import Select from 'react-select'

// select dropdown custom styles
export const selectCustomStyles = {
  menu: (provided) => ({
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
    minHeight: '55px',
    fontSize: '14px',
    border: `1px solid ${state.isFocused ? '#28A745' : '#E7EDF2'}`,
    color: '#E7EDF2',
    borderRadius: '2px',
    textTransform: 'capitalize',
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? '#28A745'
      : state.isFocused
      ? 'rgba(76, 175, 80, 0.1)'
      : '',
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}

const SelectDropdown = React.forwardRef(function SelectDropdown(
  { defaultValue, onChange, styles, disabled, options, multiSelect, ...rest },
  ref
) {
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
})

export default SelectDropdown
