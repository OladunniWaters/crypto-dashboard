import React from 'react';
import Chart from "react-apexcharts";
import './PieChart.scss'

const Btc = () => {
  
  const series = [ //data on the y-axis
      18, 50, 44,
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart' , width: 380,type: 'pie', background: '#fff', borderRadius: '10px', foreColor: '#000'},
    labels: ['Demand', 'Supply', 'Revenue',],
    dataLabels: {
      enabled: false,
  },
   colors:['#64CFF6', '#6359E9', '#EFF4FB'],
   fill:  {colors: ['#64CFF6', '#6359E9', '#EFF4FB'] }, 
};

  return (
    <div className="pie">
      <Chart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default Btc;