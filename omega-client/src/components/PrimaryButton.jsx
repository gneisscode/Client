import React from 'react'

const PrimaryButton = (props) => {
  return (
    <button className="bg-blue-600 w-[124px] h-[48px] text-white text-sm font-semibold rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
      {props.text}
    </button>
  );
}

export default PrimaryButton