import React, { useState } from "react";

const Hamburger = () => {
  const [active, setActive] = useState(false);

  const handleMenu = () => {
    setActive(!active);
  };
  return (
    <div className=" flex  justify-center items-center lg:hidden text-[#0267FF] w-[100%]">
      {active ? (
        <div className=" flex flex-col w-[100%] h-[100vh] bg-[#ffffff] z-10 items-center mt-4 px-4">
          <i class="fa-solid fa-xmark self-end" onClick={handleMenu}></i>
          <ul className="flex flex-col gap-[64px] text-xl font-medium justify-center items-center self-center">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </div>
      ) : (
        <div className="flex w-[100%] justify-between items-center px-4 ">
          <div className="flex justify-center items-center self-center w-[100%] mt-2">
            <img src="/assets/omega-logo.png" alt="" />
          </div>
          <i class="fa-solid fa-bars" onClick={handleMenu}></i>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
