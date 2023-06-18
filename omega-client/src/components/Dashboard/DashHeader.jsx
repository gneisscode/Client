import React, { useContext, useState, useEffect } from "react";
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

  const fetchSearchResults = async () => {
    try {
      const encodedSearchValue = encodeURIComponent(searchValue);
      const response = await axios.get(
        `https://nodebtdev.onrender.com/api/loans/getloan/${encodeURIComponent(searchValue)}`
      );
      setSearchResults(response.data);
      console.log("Search results:", response.data);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults();
    }, 500); 

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue]);


  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] bg-[#FAFCFF] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8 fixed top-0 left-0 z-[1000]">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <form className="relative">
        <input
          type="text"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchChange}
          className="lg:w-[520px] lg:h-[48px] p-[24px] rounded-[8px] border border-[#E5E5E5] outline-none pr-[48px]"
        />
      </form>

      <div className="flex gap-[30px] justify-center items-center self-center">
        <div className="text-[18px]">
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
