import React, { useEffect, useContext, useState } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
Chart.register(CategoryScale);

const Dashboard = () => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [loanData, setLoanData] = useState([]);
  const [loansSuccessful, setLoansSuccessful] = useState([]);
  const [loansDeclined, setLoansDeclined] = useState([]);
   useEffect(() => {
     const visitedDashboard = localStorage.getItem("visitedDashboard");

     if (!visitedDashboard) {
       // Show the toaster only for the first visit
       toast("Welcome to the dashboard!", { autoClose: 5000 });
       localStorage.setItem("visitedDashboard", "true");
     }
   }, []);

      
  const [monthlyData, setMonthlyData] = useState({
    January: {
      generated: "",
      successful: "",
      declined: "",
    },
    February: {
      generated: "",
      successful: "",
      declined: "",
    },
    March: {
      generated: "",
      successful: "",
      declined: "",
    },
    April: {
      generated: "",
      successful: "",
      declined: "",
    },
    May: {
      generated: "",
      successful: "",
      declined: "",
    },
    June: {
      generated: "",
      successful: "",
      declined: "",
    },
    July: {
      generated: "",
      successful: "",
      declined: "",
    },
    August: {
      generated: "",
      successful: "",
      declined: "",
    },
    September: {
      generated: "",
      successful: "",
      declined: "",
    },
    October: {
      generated: "",
      successful: "",
      declined: "",
    },
    November: {
      generated: "",
      successful: "",
      declined: "",
    },
    December: {
      generated: "",
      successful: "",
      declined: "",
    },
  });

  const status = ["generated", "successful", "declined"];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];



  const datasets = status.map((status) => {
    const data = labels.map(
      (month) => monthlyData[month][status.toLowerCase()]
    );
    const backgroundColor =
      status === "generated"
        ? "#3585FF"
        : status === "successful"
        ? "#4ED273"
        : "#FF2727";
    return {
      label: status,
      data: data,
      backgroundColor: backgroundColor,
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
        align: "center",
        color: "#1A1A1A",
        font: {
          size: 20,
          weight: 500,
        },
        padding: 20,
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
        display: true,
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

  useEffect(() => {
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
        const response = await loans.get(`/loans/company-loans`, config);
        console.log(response.data);
        console.log(response.data.data.loans);
        const loansList = response.data.data.loans;
        setLoanData(loansList);
        const declinedLoansCount = loansList.filter(
          (loan) => loan.eligibility === false
        ).length;
        setLoansDeclined(declinedLoansCount);

        const successfulLoansCount = loansList.filter(
          (loan) => loan.eligibility === true
        ).length;
        setLoansSuccessful(successfulLoansCount);

        const updatedMonthlyData = {
          January: { generated: 0, successful: 0, declined: 0 },
          February: { generated: 0, successful: 0, declined: 0 },
          March: { generated: 0, successful: 0, declined: 0 },
          April: { generated: 0, successful: 0, declined: 0 },
          May: { generated: 0, successful: 0, declined: 0 },
          June: { generated: 0, successful: 0, declined: 0 },
          July: { generated: 0, successful: 0, declined: 0 },
          August: { generated: 0, successful: 0, declined: 0 },
          September: { generated: 0, successful: 0, declined: 0 },
          October: { generated: 0, successful: 0, declined: 0 },
          November: { generated: 0, successful: 0, declined: 0 },
          December: { generated: 0, successful: 0, declined: 0 },
        };

        loansList.forEach((loan) => {
          const createdAt = new Date(loan.createdAt);
          const month = createdAt.toLocaleString("en-US", { month: "long" });

          updatedMonthlyData[month].generated += 1;

          if (loan.eligibility === true) {
            updatedMonthlyData[month].successful += 1;
          } else {
            updatedMonthlyData[month].declined += 1;
          }
        });
        setMonthlyData(updatedMonthlyData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    handleSubmit();
  }, []);

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <DashHeader />
      <div className="flex gap-8 relative">
        <Sidebar />
        {loading === true ? (
          <div
            role="status"
            className=" flex mt-20 justify-center items-center absolute top-[212px] left-[750px]"
          >
            <svg
              aria-hidden="true"
              className="w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className=" max-w-[calc(100% - 323px)] lg:pt-[40px] lg:pl-[49px] absolute top-[112px] left-[300px]">
            <div className="mb-[24px] text-[24px] font-[600] text-[#0267FF]">
              Dashboard
            </div>
            <div className="text-[#4D4D4D] text-[20px] font-[500]">
              Analysis
            </div>

            <div className="flex flex-wrap gap-[17px]">
              <Link to="/loan-applications">
                {" "}
                <LoanCard
                  status="generated"
                  amount={loanData.length}
                  percent="2.15%"
                />
              </Link>
              <Link to="/loans-successful">
                {" "}
                <LoanCard
                  status="successful"
                  amount={loansSuccessful}
                  percent="2.15%"
                />
              </Link>
              <Link to="/loans-declined">
                {" "}
                <LoanCard
                  status={"declined"}
                  amount={loansDeclined}
                  percent="2.15%"
                />
              </Link>
            </div>
            {loanData.length > 0 ? (
              <>
                <div className="flex items-center w-[890px] bg-[#F9F9F96B] border border-[#E6F0FF] pl-[55px] mt-[91px]  pt-[12px] pb-[35px] mb-[92px] hover:shadow-lg">
                  <div className="w-[790px]">
                    <Bar options={options} data={data} />
                  </div>
                </div>
                <div className="flex gap-[31px] mb-12 w-[890px]">
                  <div className="w-[575px] h-[318px] border py-[20px] border-[#E6F0FF] hover:shadow-lg">
                    <Graph monthlyData={monthlyData} />
                  </div>
                  <div className=" flex border border-[#E6F0FF] py-[40px] items-center justify-center w-[300px] h-[318px] bg-[#FAFCFF] relative hover:shadow-lg">
                    <div className="flex flex-col items-center justify-center absolute top-[85px] left-[118px]">
                      <div className="font-[600] text-[24px] text-[#0267FF]">
                        {`${parseInt(
                          (loansSuccessful / loanData.length) * 100
                        )}%`}
                      </div>
                      <div className="font-[400] text-[16px] text-[#808080]">
                        Success
                      </div>
                    </div>
                    <Donut
                      successful={loansSuccessful}
                      declined={loansDeclined}
                      generated={loanData.length}
                    />
                  </div>
                </div>
              </>
            ) : (
              <Link className="text-blue-500" to="/borrower-data">
                <div className="flex justify-center items-center mt-24">
                  No loan stats to display, click here to create a new loan
                  application
                </div>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
