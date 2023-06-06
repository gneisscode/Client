import React from 'react'

const PasswordBtn = (props) => {
  return (
    <button className=" bg-blue-600 w-[589px] h-[61px] text-blue-600  text-white text-lg font-semibold rounded ">
      {props.text}
    </button>
  );
}

export default PasswordBtn