import React from 'react'

const PrimaryButton = (props) => {
  return (
    <button className="bg-blue-600 w-[124px] h-[48px] text-white text-sm font-semibold rounded">
      {props.text}
    </button>
  );
}

export default PrimaryButton