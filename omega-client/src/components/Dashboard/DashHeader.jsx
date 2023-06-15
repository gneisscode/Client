import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";


const DashHeader = () => {
  const { user, userPhotoURL } = useContext(Context);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://nodebtdev.onrender.com/api/loans/getloan/${encodeURIComponent(searchValue)}`
      );
      setSearchResults(response.data);
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };


  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] bg-[#FAFCFF] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8 fixed top-0 left-0 z-[1000]">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <form onSubmit={handleSearchSubmit} className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          className="lg:w-[520px] lg:h-[48px] p-[24px] rounded-[8px] border border-[#E5E5E5] outline-none pr-[48px]"
        />
        <button type="submit" className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 18l-6-6m0 0l6-6" />
          </svg>
        </button>
      </form>

      <div className="flex gap-[30px] justify-center items-center self-center">
        <div>
          Hello, {user.firstName} {user.lastName}
        </div>

        <Link to="/settings">
          {userPhotoURL || user.imageUrl ? (
            <img
              src={userPhotoURL || user.imageUrl}
              className="w-[50px] h-[50px] rounded-full"
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
