import React from "react";
import DashHeader from "../../../../components/Dashboard/DashHeader";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from "react-router-dom";

const Declined = () => {
  const tableData = {
    name: "Blessing Effiong",
    date: "15/02/23",
    status: "Declined",
    creditScore: 520,
    amount: "#5,000,000",
  };
  const secondRowData = {
    name: "Amaka Young",
    date: "15/02/23",
    status: "Declined",
    creditScore: 520,
    amount: "#5,000,000",
  };
  const rowData = Array(11).fill(tableData);
  const repeatData = [tableData, secondRowData, ...rowData];

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex relative ">
        <Sidebar />

        <div className="lg:w-[938px] lg:h-[fit] bg-[#FAFCFF] border border-[#CCE1FF] ml-[44px] mt-[128px] mb-16">
          <div className="flex justify-between">
          <div className="mt-5 p-5">
            <p className="font-semibold text-xl text-[#013E99]  ">Loans Declined</p>
            <p className="font-medium text-base text-[#FF2727] mt-5">Total Amount: 4,587,541.28</p>
            <p className="font-semibold text-base text-[#0252CC] mt-5">Last Month</p>
          </div>
          <div className="flex mt-10 p-10 mr-10 gap-2 items-center">
            <p className="text-[#0252CC]">Sort by</p>
            <TfiAngleDown />
            <p className="text-[#4D4D4D]">Month</p>
          </div>

          </div>
          <div className="lg:w-[938px] lg:h-[fit] bg-[#FAFCFF] border border-[#CCE1FF] mt-[40px] mb-16 ">
            <div className="flex justify-between">
              <div className="mt-5 p-5">
                <p className="font-semibold text-xl text-blue-800 ">
                  Loans Declined
                </p>
                <p className="font-medium text-base text-red-500 mt-5">
                  Total Amount: 4,587,541.28
                </p>
                <p className="font-semibold text-base text-blue-700 mt-5">
                  Last Month
                </p>
              </div>
              <div className="flex mt-10 p-10 mr-10 gap-2 items-center">
                <p className="text-blue-500">Sort by</p>
                <TfiAngleDown />
                <p className="text-gray-700">Month</p>
              </div>
            </div>

          <div className="overflow-x-auto flex items-center justify-center">
            <table className="min-w-full table-fixed border-collapse">
              <thead >
                <tr>
                  <th className="px-6 py-3 bg-blue-100 text-left font-semibold text-[#666666]">Borrower's Name</th>
                  <th className="px-6 py-3 bg-blue-100 text-left font-semibold text-[#666666]">Date</th>
                  <th className="px-6 py-3 bg-blue-100 text-left font-semibold text-[#666666]">Status</th>
                  <th className="px-6 py-3 bg-blue-100 text-left font-semibold text-[#666666]">Credit Score</th>
                  <th className="px-6 py-3 bg-blue-100 text-left font-semibold text-[#666666]">Amount</th>
                </tr>
              </thead>
              <tbody>
                {repeatData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-base text-[#666666]">{row.name}</td>
                    <td className="px-6 py-4 font-semibold text-base text-[#666666]">{row.date}</td>
                    <td className="px-6 py-4 font-semibold text-base text-[#666666]">
                      <span className={`text-[#FF2727]`}>{row.status}</span>
                    </td>
                    <td className="px-6 py-4 font-semibold text-base text-[#666666]">{row.creditScore}</td>
                    <td className="px-6 py-4 font-semibold text-base text-[#666666]">{row.amount}</td>

                  </tr>
                </thead>
                <tbody>
                  {repeatData.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="px-6 py-4 font-semibold text-base text-gray-700">
                        {row.name}
                      </td>
                      <td className="px-6 py-4 font-semibold text-base text-gray-700">
                        {row.date}
                      </td>
                      <td className="px-6 py-4 font-semibold text-base text-gray-700">
                        <span className={`text-red-700`}>{row.status}</span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-base text-gray-700">
                        {row.creditScore}
                      </td>
                      <td className="px-6 py-4 font-semibold text-base text-gray-700">
                        {row.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declined;




