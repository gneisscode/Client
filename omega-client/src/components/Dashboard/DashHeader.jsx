import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";

const DashHeader = () => {
  const { user, userPhotoURL } = useContext(Context);
   const location = useLocation();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchContainerRef = useRef(null);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        };
        const response = await axios.get(
          `/loans/getloan/${searchValue}`,
          config
        );
        console.log(response.data);
       setSearchResults(response.data.loans.slice(0, 5));
      } catch (error) {
        console.log("Error occurred during search:", error);
        setSearchResults([]);
      }
    };
    handleSearch();
  }, [searchValue]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchResults([]);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     handleSearch();
  //   }
  // };

  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] bg-[#FAFCFF] text-gray-400 border border-gray-100 items-end px-[60px] py-8 fixed top-0 left-0 z-[1000]">
      <Link to="/">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <div
        className="flex flex-col self-center justify-center items-center absolute top-[33px] left-[377px]"
        ref={searchContainerRef}
      >
        <input
          type="text"
          placeholder="Search a loan applicant"
          className="lg:w-[520px] lg:h-[48px] p-[24px] rounded-[8px] border border-[#E5E5E5] outline-none"
          value={searchValue}
          onChange={handleChange}
          disabled={location.pathname !== "/loan-applications"}
          // onKeyDown={handleKeyDown}
        />
        {searchResults.length > 0 && (
          <div className="flex flex-col relative top-0 lg:w-[520px] h-fit bg-[#FAFCFF]  gap-[10px] justify-center border-b border-r border-l border-[#E5E5E5] rounded-[8px]">
            {searchResults.map((loan) => (
              <Link to={`/borrower-profile/${loan._id}`}>
                <div
                  key={loan._id}
                  className="border-b border-[#E5E5E5] p-2 hover:text-blue-500"
                >
                  {loan.fullname}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-[30px] justify-center items-center self-center">
        <div className="text-[18px]">
          Hello, {user?.firstName} {user?.lastName}
        </div>

        <Link to="/settings">
          {userPhotoURL || user.imageUrl ? (
            <img
              src={userPhotoURL || user?.imageUrl}
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
