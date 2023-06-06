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
      <div className="flex ">
        <Sidebar />

        <div className="flex flex-col max-w-[calc(100% - 323px)] lg:pt-[80px] lg:pl-[49px]">
          <div className="mb-[24px] text-[24px] font-[600] text-[#0267FF]">
            History
          </div>
          <div className="flex gap-[56px] h-[51px] w-[982px] ">
            {data.map((data) => {
              {
                return Object.keys(data).map((key) => {
                  return <div>{key}</div>;
                });
              }
            })}
          </div>
          <div className="flex gap-[56px]  h-[51px] max-w-[982px]  text-[16px] font-[400]">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="p-4">
                    {value}
                  </div>
                );
              });
            })}
          </div>
          <div className="flex gap-[56px] justify-center items-center h-[51px] max-w-[982px]  text-[16px] font-[400]">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="p-4">
                    {value}
                  </div>
                );
              });
            })}
          </div>
          <div className="flex gap-[56px] justify-center items-center h-[51px] max-w-[982px]  text-[16px] font-[400]">
            {data.map((item) => {
              return Object.values(item).map((value, index) => {
                return (
                  <div key={index} className="p-4">
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