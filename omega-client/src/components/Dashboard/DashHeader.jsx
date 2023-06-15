import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const DashHeader = () => {
  const { user, userPhotoURL } = useContext(Context);

  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] bg-[#FAFCFF] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8 fixed top-0 left-0 z-[1000]">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <div>
        <input
          type="text"
          placeholder="Search"
          className="lg:w-[520px] lg:h-[48px] p-[24px] rounded-[8px] border border-[#E5E5E5] outline-none"
        />
      </div>

      <div className="flex gap-[30px] justify-center items-center self-center">
        <div>
          Hello, {user.firstName} {user.lastName}
        </div>

        <Link to="/settings">
          {userPhotoURL || user.imageUrl ? (
            <img
              src={userPhotoURL || user.imageUrl}
              className="w-[50px] h-[50px] rounded-full border-2 border-blue-500 hover:drop-shadow-xl "
              alt=""
            />
          ) : (
            <img
              src="assets/dashboard/default.jpg"
              className="w-[50px] h-[50px]"
              alt=""
            />
          )}
        </Link>
      </div>
    </div>
  );
};

export default DashHeader;
