import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../context/Context";
import Button from "../Button";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const { dispatch, isFetching } = useContext(Context);
  const [logOutModal, setLogOutModal] = useState(false);
  // const [notifications, setNotifications] = useState(false);
  // const storedChats = JSON.parse(localStorage.getItem("chats"));

// useEffect(() => {
//   const hasUnreadMessages = storedChats.some(
//     (chat) => chat.checked < new Date(chat.latestMessage?.createdAt).getTime()
//   );
//   console.log(hasUnreadMessages)

//   setNotifications(hasUnreadMessages);
// }, [storedChats,location.pathname]);


  useEffect(() => {
    setActive(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("visitedDashboard");
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
  };

  return (
    <div className="lg:flex flex-col lg:min-h-[100%] hidden lg:min-w-[300px] bg-[#FAFCFF] fixed top-[112px] left-0">
      <div className="flex flex-col justify-center pl-[40px] pt-[50px] gap-[32px] ">
        <Link to="/dashboard">
          <div className="flex  items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.6287 11H14.2287C13.7869 11 13.4287 11.3838 13.4287 11.8571V22.1429C13.4287 22.6162 13.7869 23 14.2287 23H20.6287C21.0705 23 21.4287 22.6162 21.4287 22.1429V11.8571C21.4287 11.3838 21.0705 11 20.6287 11Z"
                stroke={
                  active === "dashboard" ||
                  active === "loans-generated" ||
                  active === "loans-successful" ||
                  active === "loans-declined"
                    ? "#0267FF"
                    : "#999999"
                }
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.7143 1H13.8571C13.3838 1 13 1.38376 13 1.85714V5.30286C13 5.77624 13.3838 6.16 13.8571 6.16H20.7143C21.1877 6.16 21.5714 5.77624 21.5714 5.30286V1.85714C21.5714 1.38376 21.1877 1 20.7143 1Z"
                stroke={
                  active === "dashboard" ||
                  active === "loans-generated" ||
                  active === "loans-successful" ||
                  active === "loans-declined"
                    ? "#0267FF"
                    : "#999999"
                }
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.2 1H1.8C1.35817 1 1 1.38376 1 1.85714V12.1429C1 12.6162 1.35817 13 1.8 13H8.2C8.64183 13 9 12.6162 9 12.1429V1.85714C9 1.38376 8.64183 1 8.2 1Z"
                stroke={
                  active === "dashboard" ||
                  active === "loans-generated" ||
                  active === "loans-successful" ||
                  active === "loans-declined"
                    ? "#0267FF"
                    : "#999999"
                }
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.71429 17.125H1.85714C1.38376 17.125 1 17.5088 1 17.9821V21.4279C1 21.9012 1.38376 22.285 1.85714 22.285H8.71429C9.18767 22.285 9.57143 21.9012 9.57143 21.4279V17.9821C9.57143 17.5088 9.18767 17.125 8.71429 17.125Z"
                stroke={
                  active === "dashboard" ||
                  active === "loans-generated" ||
                  active === "loans-successful" ||
                  active === "loans-declined"
                    ? "#0267FF"
                    : "#999999"
                }
                stroke-width="1.71429"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "dashboard" ||
                active === "loans-generated" ||
                active === "loans-successful" ||
                active === "loans-declined"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } `}
            >
              Dashboard
            </div>
          </div>
        </Link>

        <Link to="/borrower-data">
          <div className="flex  items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={
                active === "borrower-data" ||
                active === "borrower-profile" ||
                active === "borrower-eligibility" ||
                active === "borrower-saved-data" ||
                active === "upload" ||
                active === "send-status"
                  ? "#0267FF"
                  : "none"
              }
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.80039 12.3998C8.48213 12.3998 8.17691 12.2734 7.95186 12.0483C7.72682 11.8233 7.60039 11.5181 7.60039 11.1998V4.0994C5.82431 4.40509 4.22736 5.36552 3.1248 6.7911C2.02224 8.21668 1.49419 10.0038 1.64489 11.7997C1.79559 13.5956 2.61409 15.2697 3.93881 16.4916C5.26353 17.7135 6.9982 18.3944 8.80039 18.3998C10.502 18.3996 12.1485 17.7969 13.4482 16.6987C14.7479 15.6004 15.6167 14.0775 15.9008 12.3998H8.80039ZM7.60399 2.8838C8.26039 2.7902 8.80039 3.3374 8.80039 3.9998V11.1998H16.0004C16.6628 11.1998 17.21 11.7398 17.1164 12.3962C16.8089 14.4947 15.7192 16.3992 14.066 17.7277C12.4128 19.0562 10.3184 19.7104 8.20292 19.559C6.08747 19.4076 4.10753 18.4618 2.66037 16.9114C1.2132 15.361 0.405883 13.3207 0.400391 11.1998C0.400497 9.17912 1.1288 7.22616 2.45183 5.69882C3.77486 4.17149 5.60398 3.1721 7.60399 2.8838ZM11.2004 8.7998V1.5998C13.11 1.5998 14.9413 2.35837 16.2916 3.70863C17.6418 5.05889 18.4004 6.89024 18.4004 8.7998H11.2004ZM18.4748 9.9998C19.0724 9.9998 19.5872 9.5606 19.5992 8.963L19.6004 8.7998C19.6004 7.68293 19.3778 6.57726 18.9454 5.54748C18.513 4.5177 17.8796 3.58449 17.0822 2.80243C16.2849 2.02037 15.3396 1.40518 14.3016 0.992844C13.2636 0.580506 12.1539 0.3793 11.0372 0.401C10.4396 0.413 10.0004 0.929 10.0004 1.5254V8.7998C10.0004 9.11806 10.1268 9.42328 10.3519 9.64833C10.5769 9.87337 10.8821 9.9998 11.2004 9.9998H18.4748Z"
                fill={
                  active === "borrower-data" ||
                  active === "borrower-profile" ||
                  active === "borrower-eligibility" ||
                  active === "borrower-saved-data" ||
                  active === "upload" ||
                  active === "send-status"
                    ? "#0267FF"
                    : "#999999"
                }
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "borrower-data" ||
                active === "borrower-profile" ||
                active === "borrower-eligibility" ||
                active === "borrower-saved-data" ||
                active === "upload" ||
                active === "send-status"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } `}
            >
              Borrower's Data
            </div>
          </div>
        </Link>

        <Link to="/loan-applications">
          <div className="flex  items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4291 12.8571C19.6896 12.8571 23.1434 11.3221 23.1434 9.42857C23.1434 7.53502 19.6896 6 15.4291 6C11.1686 6 7.71484 7.53502 7.71484 9.42857C7.71484 11.3221 11.1686 12.8571 15.4291 12.8571Z"
                stroke={active === "loan-applications" ? "#0267FF" : "#999999"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.71484 9.42773V19.7134C7.71484 21.5992 11.1434 23.142 15.4291 23.142C19.7148 23.142 23.1434 21.5992 23.1434 19.7134V9.42773"
                stroke={active === "loan-applications" ? "#0267FF" : "#999999"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.1431 14.5711C23.1431 16.4568 19.7146 17.9997 15.4289 17.9997C11.1431 17.9997 7.71456 16.4568 7.71456 14.5711M15.2574 2.57113C13.2543 1.33491 10.9226 0.737041 8.57171 0.856842C4.30314 0.856842 0.857422 2.3997 0.857422 4.28541C0.857422 5.29684 1.85171 6.20541 3.42885 6.85684"
                stroke={active === "loan-applications" ? "#0267FF" : "#999999"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.42885 17.1423C1.85171 16.4909 0.857422 15.5823 0.857422 14.5709V4.28516"
                stroke={active === "loan-applications" ? "#0267FF" : "#999999"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.42885 12.0001C1.85171 11.3487 0.857422 10.4401 0.857422 9.42871"
                stroke={active === "loan-applications" ? "#0267FF" : "#999999"}
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "loan-applications"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } `}
            >
              Loan Applications
            </div>
          </div>
        </Link>

        <Link to="/admin">
          <div className="flex  items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 13V15C6.4087 15 4.88258 15.6321 3.75736 16.7574C2.63214 17.8826 2 19.4087 2 21H0C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10ZM17 16H18V21H10V16H11V15C11 14.2044 11.3161 13.4413 11.8787 12.8787C12.4413 12.3161 13.2044 12 14 12C14.7956 12 15.5587 12.3161 16.1213 12.8787C16.6839 13.4413 17 14.2044 17 15V16ZM15 16V15C15 14.7348 14.8946 14.4804 14.7071 14.2929C14.5196 14.1054 14.2652 14 14 14C13.7348 14 13.4804 14.1054 13.2929 14.2929C13.1054 14.4804 13 14.7348 13 15V16H15Z"
                fill={
                  active === "admin" || active === "add-admin"
                    ? "#0267FF"
                    : "#999999"
                }
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "admin" || active === "add-admin"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } `}
            >
              Admin
            </div>
          </div>
        </Link>

        <Link to="/messages">
          <div className="flex items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <i
              className={`fa-regular fa-envelope ${
                active === "messages" || active === "chat"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } text-2xl`}
            ></i>
            <div
              className={` text-[20px] font-600 ${
                active === "messages" || active === "chat"
                  ? "text-[#0267FF]"
                  : "text-[#999999]"
              } `}
            >
              Messages
            </div>
          </div>
        </Link>

        <Link to="/settings">
          <div className="flex items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4298 10.98C17.4698 10.66 17.4998 10.34 17.4998 10C17.4998 9.66005 17.4698 9.34005 17.4298 9.02005L19.5398 7.37005C19.7298 7.22005 19.7798 6.95005 19.6598 6.73005L17.6598 3.27005C17.6009 3.16687 17.5071 3.08807 17.3953 3.04775C17.2836 3.00744 17.1611 3.00825 17.0498 3.05005L14.5598 4.05005C14.0398 3.65005 13.4798 3.32005 12.8698 3.07005L12.4898 0.420047C12.4733 0.302388 12.4144 0.194807 12.3242 0.117483C12.234 0.0401581 12.1186 -0.00159773 11.9998 4.67889e-05H7.99984C7.74984 4.67889e-05 7.53984 0.180047 7.50984 0.420047L7.12984 3.07005C6.51984 3.32005 5.95984 3.66005 5.43984 4.05005L2.94984 3.05005C2.89186 3.03038 2.83107 3.02025 2.76984 3.02005C2.59984 3.02005 2.42984 3.11005 2.33984 3.27005L0.339839 6.73005C0.209839 6.95005 0.26984 7.22005 0.45984 7.37005L2.56984 9.02005C2.52984 9.34005 2.49984 9.67005 2.49984 10C2.49984 10.33 2.52984 10.66 2.56984 10.98L0.45984 12.63C0.26984 12.78 0.219839 13.05 0.339839 13.27L2.33984 16.73C2.39879 16.8332 2.49256 16.912 2.60434 16.9523C2.71612 16.9927 2.8386 16.9918 2.94984 16.95L5.43984 15.95C5.95984 16.35 6.51984 16.68 7.12984 16.93L7.50984 19.58C7.53984 19.82 7.74984 20 7.99984 20H11.9998C12.2498 20 12.4598 19.82 12.4898 19.58L12.8698 16.93C13.4798 16.68 14.0398 16.34 14.5598 15.95L17.0498 16.95C17.1098 16.97 17.1698 16.98 17.2298 16.98C17.3998 16.98 17.5698 16.89 17.6598 16.73L19.6598 13.27C19.7798 13.05 19.7298 12.78 19.5398 12.63L17.4298 10.98ZM15.4498 9.27005C15.4898 9.58005 15.4998 9.79005 15.4998 10C15.4998 10.21 15.4798 10.43 15.4498 10.73L15.3098 11.86L16.1998 12.56L17.2798 13.4L16.5798 14.61L15.3098 14.1L14.2698 13.68L13.3698 14.36C12.9398 14.68 12.5298 14.92 12.1198 15.09L11.0598 15.52L10.8998 16.65L10.6998 18H9.29984L9.10984 16.65L8.94984 15.52L7.88984 15.09C7.45984 14.91 7.05984 14.68 6.65984 14.38L5.74984 13.68L4.68984 14.11L3.41984 14.62L2.71984 13.41L3.79984 12.57L4.68984 11.87L4.54984 10.74C4.51984 10.43 4.49984 10.2 4.49984 10C4.49984 9.80005 4.51984 9.57005 4.54984 9.27005L4.68984 8.14005L3.79984 7.44005L2.71984 6.60005L3.41984 5.39005L4.68984 5.90005L5.72984 6.32005L6.62984 5.64005C7.05984 5.32005 7.46984 5.08005 7.87984 4.91005L8.93984 4.48005L9.09984 3.35005L9.29984 2.00005H10.6898L10.8798 3.35005L11.0398 4.48005L12.0998 4.91005C12.5298 5.09005 12.9298 5.32005 13.3298 5.62005L14.2398 6.32005L15.2998 5.89005L16.5698 5.38005L17.2698 6.59005L16.1998 7.44005L15.3098 8.14005L15.4498 9.27005ZM9.99984 6.00005C7.78984 6.00005 5.99984 7.79005 5.99984 10C5.99984 12.21 7.78984 14 9.99984 14C12.2098 14 13.9998 12.21 13.9998 10C13.9998 7.79005 12.2098 6.00005 9.99984 6.00005ZM9.99984 12C8.89984 12 7.99984 11.1 7.99984 10C7.99984 8.90005 8.89984 8.00005 9.99984 8.00005C11.0998 8.00005 11.9998 8.90005 11.9998 10C11.9998 11.1 11.0998 12 9.99984 12Z"
                fill={active === "settings" ? "#0267FF" : "#999999"}
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "settings" ? "text-[#0267FF]" : "text-[#999999]"
              } `}
            >
              Settings
            </div>
          </div>
        </Link>

        <Link to="/help">
          <div className="flex items-center gap-[10px] duration-500 transform hover:translate-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.08 15.395 11.2007 15.0993 11.2 14.75C11.2 14.4 11.0793 14.104 10.838 13.862C10.5967 13.62 10.3007 13.4993 9.95 13.5C9.6 13.5 9.30433 13.621 9.063 13.863C8.82167 14.105 8.70067 14.4007 8.7 14.75C8.7 15.1 8.821 15.396 9.063 15.638C9.305 15.88 9.60067 16.0007 9.95 16ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6867 3.825 17.9743 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.263333 12.6833 0.000666667 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31333 4.88333 2.02567 3.825 2.925 2.925C3.825 2.025 4.88333 1.31267 6.1 0.788C7.31667 0.263333 8.61667 0.000666667 10 0C11.3833 0 12.6833 0.262667 13.9 0.788C15.1167 1.31333 16.175 2.02567 17.075 2.925C17.975 3.825 18.6877 4.88333 19.213 6.1C19.7383 7.31667 20.0007 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6867 15.1167 17.9743 16.175 17.075 17.075C16.175 17.975 15.1167 18.6877 13.9 19.213C12.6833 19.7383 11.3833 20.0007 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18ZM10.1 5.7C10.5167 5.7 10.8793 5.83333 11.188 6.1C11.4967 6.36667 11.6507 6.7 11.65 7.1C11.65 7.46667 11.5377 7.79167 11.313 8.075C11.0883 8.35833 10.834 8.625 10.55 8.875C10.1667 9.20833 9.82933 9.575 9.538 9.975C9.24667 10.375 9.10067 10.825 9.1 11.325C9.1 11.5583 9.18767 11.7543 9.363 11.913C9.53833 12.0717 9.74233 12.1507 9.975 12.15C10.225 12.15 10.4377 12.0667 10.613 11.9C10.7883 11.7333 10.9007 11.525 10.95 11.275C11.0167 10.925 11.1667 10.6123 11.4 10.337C11.6333 10.0617 11.8833 9.79933 12.15 9.55C12.5333 9.18333 12.8627 8.78333 13.138 8.35C13.4133 7.91667 13.5507 7.43333 13.55 6.9C13.55 6.05 13.204 5.35433 12.512 4.813C11.82 4.27167 11.016 4.00067 10.1 4C9.46667 4 8.86267 4.13333 8.288 4.4C7.71333 4.66667 7.27567 5.075 6.975 5.625C6.85833 5.825 6.82067 6.03767 6.862 6.263C6.90333 6.48833 7.016 6.659 7.2 6.775C7.43333 6.90833 7.675 6.95 7.925 6.9C8.175 6.85 8.38333 6.70833 8.55 6.475C8.73333 6.225 8.96267 6.03333 9.238 5.9C9.51333 5.76667 9.80067 5.7 10.1 5.7Z"
                fill={active === "help" ? "#0267FF" : "#999999"}
              />
            </svg>
            <div
              className={` text-[20px] font-600 ${
                active === "help" ? "text-[#0267FF]" : "text-[#999999]"
              } `}
            >
              Help & Support
            </div>
          </div>
        </Link>
        <div
          className={`flex items-center gap-[10px] mt-[-10px] mb-16 cursor-pointer ${
            logOutModal ? "" : "duration-500 transform hover:translate-x-2"
          }  `}
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.25 12.75V14.625C12.25 15.1223 12.0525 15.5992 11.7008 15.9508C11.3492 16.3025 10.8723 16.5 10.375 16.5H2.875C2.37772 16.5 1.90081 16.3025 1.54917 15.9508C1.19754 15.5992 1 15.1223 1 14.625V3.375C1 2.87772 1.19754 2.40081 1.54917 2.04917C1.90081 1.69754 2.37772 1.5 2.875 1.5H10C11.0355 1.5 12.25 2.33953 12.25 3.375V5.25M15.25 12.75L19 9L15.25 5.25M6.25 9H18.25"
              stroke="#999999"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div
            className="text-[#999999] text-[20px] font-600"
            onClick={() => setLogOutModal(true)}
          >
            {logOutModal ? <p>Log out?</p> : <p>Log out</p>}
          </div>

          {logOutModal && (
            <section className="flex flex-col items-center justify-center w-[100px]">
              <div className="flex flex-col-2 ">
                <Button
                  className="text-[#FF2727]  hover:underline"
                  label="Yes"
                  onClick={handleLogout}
                />
                <Button
                  className="text-[#0267FF] hover:underline  ml-[-1em]"
                  label="No"
                  onClick={() => setLogOutModal(false)}
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
