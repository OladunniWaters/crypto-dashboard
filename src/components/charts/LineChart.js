import React from 'react';
import Chart from "react-apexcharts";

const Btc = () => {
  
  const series = [ //data on the y-axis
    {
      name: "Btc Price",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
  ];
  const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
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
      colors:['#9C27B0'],
      fill:  {colors: ['#F44336'] },
      grid: {
  row: {
    colors: ['#fff']
  },
  column: {
    colors: ['#fff']
  }
},
  chart: {
          background: '#fff',
      },

  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="line"
        width="600px"
      />
    </div>
  )
}

export default Btc;