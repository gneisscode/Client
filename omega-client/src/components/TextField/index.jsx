import React from 'react'
import FormLabel from './label'

const TextField = ({
  type,
  placeholder,
  value,
  onClick,
  error,
  className,
  onChange,
  name,
  label,
  inputRef,
  message,
  inputClass,
  props,
  disabled,
  icon,
}) => {
  return (
    <div className='w-full'>
      <div>
        {label && (
          <div className='mb-4'>
            <FormLabel
              className='text-sm md:text-base font-light'
              title={label}
            />
          </div>
        )}
        <div
          className={[
            className,
            `flex items-center w-full lg:h-[50px] my-1 focus-within:border focus-within:border-primary rounded max-md:w-4/5 ${
              error
                ? 'border text-red-300 border-red-500 bg-[#fd3d3d0f]'
                : 'border hover:border-[hsl(0, 0%, 80%)] border-[hsl(0, 0%, 70%)]'
            }`,
          ].join(' ')}
        >
          <input
            type={type || 'text'}
            className={[
              inputClass,
              error ? 'bg-[#fd3d3d0f]' : 'bg-transparent',
              'outline-none text-neutral-copy-black px-4 py-4 h-12 w-full focus:bg-[#F9F9FB]/25 focus:border-primary transition-all duration-200 ease-in-out',
            ].join(' ')}
            placeholder={placeholder || 'Enter a value'}
            value={value}
            onClick={onClick}
            error={error}
            onChange={onChange}
            name={name}
            disabled={disabled}
            ref={inputRef}
            {...props}
          />
          {icon && <div className='cursor-pointer p-4'>{icon}</div>}
        </div>
      </div>
      {error && <small style={{ color: '#e11900' }}>{message}</small>}
    </div>
  )
}

export default TextField
