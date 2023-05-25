import React from 'react'

const Button = ({
  type,
  label,
  onClick,
  onMouseOver,
  disabled,
  loading,
  loadingText,
  className,
  loadingIcon,
  btnIcon,
  variant,
  btnLeftIcon,
  btnRightIcon,
}) => {
  return (
    <button
      type={type || 'button'}
      onClick={onClick}
      onMouseOver={onMouseOver}
      disabled={loading || disabled}
      className={[
        `w-full px-6 py-3 relative hover:opacity-80 transition-all duration-500 ease-linear rounded`,
        className,
      ].join(' ')}
      style={{
        cursor: loading || disabled ? 'not-allowed' : '',
        opacity: loading || disabled ? '.68' : '1',
        backgroundColor:
          loading || disabled ? 'rgba(240, 255, 244, 0.0102);' : '',
      }}
    >
      {loading ? (
        <div className='flex justify-center align-middle'>Loading...</div>
      ) : (
        <div className='flex items-center justify-center'>{label}</div>
      )}
    </button>
  )
}

export default Button
