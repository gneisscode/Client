import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { Context } from "../context/Context";

const HomeNav = () => {
  const location = useLocation();
  const { user } = useContext(Context);

  useEffect(() => {
    if (location.pathname === "/services") {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="hidden lg:flex justify-between h-[112px] w-[100%] text-gray-400 border border-gray-100 items-end px-[60px] py-8 fixed z-30 bg-white">
      <Link to="/" className="link">
        <div className="flex justify-center items-center">
          <img src="/assets/omega-logo.png" alt="" />
        </div>
      </Link>

      <ul className="flex gap-[64px] text-xl font-medium justify-center items-center self-center">
        <Link to="/" className="link">
          <li
            className={` hover:text-blue-500 ${
              location.pathname === "/" ? " text-blue-500" : ""
            }`}
          >
            Home
          </li>
        </Link>

        <Link to="/about" className="link">
          <li
            className={` hover:text-blue-500 ${
              location.pathname === "/about" ? " text-blue-500" : ""
            }`}
          >
            About Us
          </li>
        </Link>

        <a
          href="/services"
          className={` link hover:text-blue-500 ${
            location.pathname === "/services" ? " text-blue-500" : ""
          }`}
        >
          Services
        </a>

        <Link to="/contact" className="link">
          <li
            className={`hover:text-blue-500 ${
              location.pathname === "/contact" ? " text-blue-500" : " "
            }`}
          >
            Contact Us
          </li>
        </Link>
      </ul>

      {user ? (
        <div className="flex gap-6 justify-center items-center">
          <Link to="/dashboard" className="link">
            <PrimaryButton text="Dashboard" />
          </Link>
        </div>
      ) : (
        <div className="flex gap-4 justify-center items-center">
          <Link to="/login" className="link">
            <SecondaryButton text="Log In" />
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
