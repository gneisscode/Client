import React, { useEffect, useContext } from "react";
import DashHeader from "../../../components/Dashboard/DashHeader";
import Sidebar from "../../../components/Dashboard/Sidebar";
import LoanCard from "../../../components/Dashboard/LoanCard";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Donut from "./Donut";
import Graph from "./Graph";
import { Context } from "../../../context/Context";
import axios from "axios";
Chart.register(CategoryScale);

const Dashboard = () => {
   const { user } = useContext(Context);
  const status =[
    "Loans given out",
    "Loans paid",
    "Loans declined"
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
      data: Array.from({ length: 12 }, () => Math.random() * 100),
      backgroundColor: `${
        status === "Loans given out"
          ? ["#3585FF"]
          : status === "Loans paid"
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
        text: "Loan Monthly Frequency",
        align: "start",
        color: "#1A1A1A",
        font: {
          size: 20,
          weight: 500,
        },
        padding:30,
      },
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 50,
        },
        align: "end",
      },
    },
    indexAxis: "x",
    barPercentage: 1.2,
    categoryPercentage: 0.6,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        ticks: {
          precision: 0,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  useEffect(()=> {
    const handleSubmit = async () => {
      const loans = axios.create({
        baseURL: `https://nodebtdev.onrender.com/api`,
      });
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
          },
        };
        const response = await loans.get(
          `/loans/company-loans`,
          config
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }; handleSubmit()

  }, [])

   

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
          <div className="flex items-center w-[890px] bg-[#F9F9F96B] border border-[#E6F0FF] pl-[55px] mt-[91px]  pt-[12px] pb-[35px] mb-[92px]">
            <div className="w-[790px]">
              <Bar options={options} data={data} />
            </div>
          </div>
          <div className="flex gap-[31px] mb-12 w-[890px]">
            <div className="w-[575px] h-[318px] border py-[20px] border-[#E6F0FF]">
              <Graph />
            </div>
            <div className=" flex border border-[#E6F0FF] py-[40px] items-center justify-center w-[300px] h-[318px] bg-[#FAFCFF] relative">
              <div className="flex flex-col items-center justify-center absolute top-[100px] left-[118px]">
                <div className="font-[600] text-[24px] text-[#0267FF]">85%</div>
                <div className="font-[400] text-[16px] text-[#808080]">
                  Positive
                </div>
              </div>
              <Donut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
