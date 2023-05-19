import React from 'react'


const Card = ({ children, className }) => {
  return (
    <div
      className={[
        " flex flex-col items-center bg-blue-50 w-[830px] h-[476px] rounded-tl-[48px] rounded-br-[48px] border border-blue-200 ",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Card