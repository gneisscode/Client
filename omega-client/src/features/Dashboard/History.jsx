import React from 'react'
import DashHeader from '../../components/Dashboard/DashHeader';
import Sidebar from '../../components/Dashboard/Sidebar';

const History = () => {
     const data = [
       {
         Date: "12-1",
         Description: "Capital",
         "Interest rate": "48%",
         "Time of refund": "2 months",
         "Borrower’s Name": "Tunde Malimi",
         "Loan Type": "*****",
         Amount: "56,000"
       },
     ];

  




  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />

        <div className="flex flex-col max-w-[calc(100% - 323px)] lg:pt-[40px] lg:pl-[49px] absolute top-[112px] left-[300px]">
          <div className="flex  justify-between items-center mb-[34px]">
            <div className="flex justify-center items-center text-[24px] font-[600] text-[#0267FF]">
              History
            </div>
          </div>

          <div className="grid grid-cols-7 gap-[56px] bg-[#E6F0FF]  w-[983px] h-[51px] text-[16px] font-[600] mb-[24px] items-center  pl-4 text-[#666666]">
            {data.map((data) => {
              {
                return Object.keys(data).map((key) => {
                  return <div className="min-w-max">{key}</div>;
                });
              }
            })}
          </div>
          <div className="grid grid-cols-7 gap-[56px] text-[#666666]  text-[16px] font-[400]  w-[983px] h-[51px] bg-[#FAFCFF] mb-[24px] items-center pl-4">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="min-w-max">
                    {value}
                  </div>
                );
              });
            })}
          </div>

          <div className="grid grid-cols-7 gap-[56px] text-[#666666] text-[16px] font-[400]  w-[983px] h-[51px] bg-[#FAFCFF] mb-[24px] items-center pl-4 ">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="min-w-max">
                    {value}
                  </div>
                );
              });
            })}
          </div>

          <div className="grid grid-cols-7 gap-[56px] text-[#666666]  text-[16px] font-[400]  w-[983px] h-[51px] bg-[#FAFCFF] mb-[24px] items-center pl-4">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="min-w-max">
                    {value}
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History