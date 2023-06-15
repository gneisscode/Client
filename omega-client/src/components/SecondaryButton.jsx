import React from "react";

const SecondaryButton = (props) => {
  return (
    <button
      className=" border-blue-600 hover:bg-blue-600 hover:text-white border-solid w-[124px] h-[48px] text-blue-600 border-2 text-sm font-semibold rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default SecondaryButton;
