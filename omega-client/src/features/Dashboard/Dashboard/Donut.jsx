import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Donut = () => {
  const data = {
    labels: ["Given", "Paid", "Declined"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#3585FF", "#4ED273", "#FF2727"],
        hoverOffset: 4,
      },
    ],
  };

   const options = {
     plugins: {
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
   };

  return (
    <div className="w-[258px] h-[268px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Donut;
