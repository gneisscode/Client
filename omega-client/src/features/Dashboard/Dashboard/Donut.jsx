import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Donut = ({generated, successful, declined}) => {

 


  const data = {
    labels: ["generated", "successful", "declined"],
    datasets: [
      {
        label: "Total Number of Loans",
        data: [generated, successful, declined],
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
           pointStyle: "rectRounded",
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
