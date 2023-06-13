import React, {useEffect} from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

const Graph = ({monthlyData}) => {
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
  const status = ["generated", "successful", "declined"];

  useEffect(() => {
    console.log(monthlyData);
  }, [monthlyData]);

  const datasets = status.map((status) => {
     const data = labels.map(
       (month) => monthlyData[month][status.toLowerCase()]
     );
    return {
      label: `${status}`,
      data:data,
      backgroundColor: `${
        status === "generated"
          ? ["#3585FF"]
          : status === "successful"
          ? ["#4ED273"]
          : ["#FF2727"]
      }`,
      borderColor: `${
        status === "generated"
          ? ["#3585FF"]
          : status === "successful"
          ? ["#4ED273"]
          : ["#FF2727"]
      }`,
      tension: 0.2,
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
        text: "Total Loans Per Month",
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
          padding: 20,
        },
        align: "center",
      },
    },
    pointStyle: "line",
    scales: {
      maintainAspectRatio: false,
      x: {
        max: labels.length - 1,
        grid: {
          display: false,
        },
      },
      y: {
        max: 20,
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <div className="h-[310px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
