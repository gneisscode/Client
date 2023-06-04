import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { Context } from "../context/Context";

const HomeNav = () => {
  const location = useLocation();
  const { user } = useContext(Context);
   const { dispatch, isFetching } = useContext(Context);
      const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
      };

  useEffect(() => {
    if (location.pathname === "/services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] text-gray-400 border border-gray-100 items-end px-[80.11px] py-8">
      <Link to="/" className="link">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <ul className="flex gap-[64px] text-xl font-medium justify-center items-center self-center">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>

        <Link to="/about" className="link">
          <li>About Us</li>
        </Link>

        <a href="/services" className="link">
          Services
        </a>

        <Link to="/contact" className="link">
          <li>Contact Us</li>
        </Link>
      </ul>

      {user ? (
        <div className="flex gap-6 justify-center items-center">
          <img
            src="assets/dashboard/dp.png"
            className="w-[50px] h-[50px]"
            alt=""
          />
          <Link to="/dashboard" className="link">
            <PrimaryButton text="Dashboard" />
          </Link>
            <SecondaryButton text="Log Out" onClick={handleLogout}/>
        </div>
      ) : (
        <div className="flex gap-4 justify-center items-center">
          <Link to="/login" className="link">
            <SecondaryButton text="Log In"/>
          </Link>
          <Link to="/signup" className="link">
            <PrimaryButton text="Sign Up" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomeNav;
