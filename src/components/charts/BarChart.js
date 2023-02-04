import React from 'react';
import Chart from "react-apexcharts";

const BarChart = () => {
  
  const series = [ //data on the y-axis
    {
      name: "Btc Price",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart',  background: '#fff'},
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
     dataLabels: {
                enabled: false
      },
    
      title: {
                text: 'Fundamental Analysis of Stocks',
                align: 'left'
          },
      subtitle: {
                text: 'Price Movements',
                align: 'left'
        }, 
      colors:['#E91E63', '#9C27B0'],
      fill:  {colors: ['#F44336'] },
      grid: {
            row: {
              colors: ['#fff']
            },
            column: {
              colors: ['#fff']
            }
          },
 
  
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="750px"
        height="400px"
      />
    </div>
  )
}

export default BarChart;