import React from "react";

const LoanCard = (props) => {
  return (
    <div className="flex flex-col  hover:shadow-lg transition-shadow hover:scale-105 hover:-translate-y-1 drop-shadow-sm ">
      <div className="lg:w-[300px] lg:h-[104px] border border-[#CCCCCC] mt-[24px] flex flex-col rounded-tl rounded-tr pl-[20px] gap-2  ">
        <div
          className={`text-[16px] font-semibold pt-[23px] ${
            props.status === "generated"
              ? "text-[#0267FF]"
              : props.status === "successful"
              ? "text-[#04AB33]"
              : "text-[#FF1C1C]"
          }`}
        >
          Loans {props.status}
        </div>
        <div className="flex justify-between items-center px-4">
          <div className="text-[24px] font-bold ">{props.amount}</div>
          <img src="assets/dashboard/wallet.svg" alt="" />
        </div>
      </div>
      <div className="lg:w-[300px] lg:h-[49px] border border-[#CCCCCC] bg-[#F2F2F2] flex gap-[108px] justify-center items-center w-[100%]  rounded-bl rounded-br">
        {/* <div className="flex gap-[8px] justify-center  items-center">
          <div
            className={`text-[16px] font-semibold pt-[23px] items-center justify-center ${
              props.status === "generated"
                ? "text-[#0267FF]"
                : props.status === "successful"
                ? "text-[#04AB33]"
                : "text-[#FF1C1C]"
            }`}
          >
            <div className="flex justify-center items-center gap-2 mt-[-1em]">
              <div
                className={`w-[16px] h-[16px] ${
                  props.status === "generated"
                    ? "bg-[#0267FF]"
                    : props.status === "successful"
                    ? "bg-[#04AB33]"
                    : "bg-[#FF1C1C]"
                }`}
              ></div>
              <div className="text-[12px] font-normal"> {props.percent}</div>
            </div>
          </div>
          <div className=" flex justify-center items-center text-[10px] font-light text-[#808080]">
            Last month
          </div>
        </div> */}
        <div className="text-[10px] font-medium hover:text-blue-500">View more</div>
      </div>
    </div>
  );
};

export default LoanCard;
