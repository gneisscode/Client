import React from 'react'

const SecondaryButton = (props) => {
  return (
     <button className=' border-blue-600 border-solid w-[124px] h-[48px] text-blue-600 border-2 text-sm font-semibold rounded ' onClick={props.onClick}>{props.text}</button>
  )
}

export default SecondaryButton