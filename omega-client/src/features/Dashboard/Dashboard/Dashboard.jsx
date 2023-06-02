import React from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import LoanCard from "../../../components/Dashboard/LoanCard";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Dashboard = () => {
  const status =[
    "Loan given out",
    "Loan paid",
    "Loan declined"
  ]

 
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const datasets = status.map((status) => {
    return {
      label: `${status}`,
      data: Array.from({ length: 12 }, () => Math.random() * 100), // Generate three random data points for each month
      backgroundColor: `${
        status === "Loan given out"
          ? ["#3585FF"]
          : status === "Loan paid"
          ? ["#4ED273"]
          : ["#FF2727"]
      }`,
      borderWidth: 1,
      borderRadius: 6,
    };
  });

  const data = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Users Gained between 2016-2020",
      },
      legend: {
        display: true,
      },
    },
    indexAxis: "x", // Group bars horizontally
    barPercentage: 1.1, // Set the width of each bar
    scales: {
      x: {
        categoryPercentage: 0, // Reduce the space taken up by each category
      },
    },
  };

  return (
    <div className="flex flex-col">
      <DashHeader />
      <div className="flex gap-8 relative">
        <Sidebar />
        <div className=" max-w-[calc(100% - 323px)] lg:pt-[40px] lg:pl-[49px] absolute top-[112px] left-[300px]">
          <div className="mb-[24px] text-[24px] font-[600] text-[#0267FF]">
            Dashboard
          </div>
          <div className="text-[#4D4D4D] text-[20px] font-[500]">Analysis</div>
          <div className="flex flex-wrap gap-[17px]">
            <Link to="/loans-generated">
              {" "}
              <LoanCard
                status="generated"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-refunded">
              {" "}
              <LoanCard
                status="refunded"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-declined">
              {" "}
              <LoanCard
                status="declined"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
            <Link to="/loans-pending">
              <LoanCard
                status="pending"
                amount="4,587,541.28"
                percent="2.15%"
              />
            </Link>
          </div>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
