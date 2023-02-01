import React from 'react';
import Chart from "react-apexcharts";

const Btc = () => {
  
  const series = [ //data on the y-axis
      44, 55, 13, 43, 22
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart' , width: 380,type: 'donut', background: '#fff',},
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="600px"
      />
    </div>
  )
}

export default Btc;