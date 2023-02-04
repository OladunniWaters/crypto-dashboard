import React from 'react';
import Chart from "react-apexcharts";
import './PieChart.scss'

const Btc = () => {
  
  const series = [ //data on the y-axis
      44, 55, 13, 43, 22
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart' , width: 380,type: 'donut', background: '#fff', borderRadius: '10px'},
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

  };

  return (
    <div className="pie">
      <Chart
        options={options}
        series={series}
        type="donut"
        width="400px"
      />
    </div>
  )
}

export default Btc;