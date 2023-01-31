import React from "react";
import Chart from "chart.js/auto";
import './BarChart.css'
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
    borderWidth: 1,
  };
  
   const options = {
      maintainAspectRatio: false	// Don't maintain w/h ratio
    }
  
  return (
    <div>
      <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;