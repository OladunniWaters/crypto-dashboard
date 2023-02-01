import React from 'react';
import Chart from "react-apexcharts";

const ColumnChart = () => {
  
  const series = [ //data on the y-axis
             {
              name: 'Net Profit',
              data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
            }, {
              name: 'Revenue',
              data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
            }, {
              name: 'Free Cash Flow',
              data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
            },
  ];
  const options = { //data on the x-axis
    chart: {id: 'bar-chart', type: 'bar', height: 350},
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
      plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '55%',
                  endingShape: 'rounded'
                },
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
      stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
      colors:['#E91E63', '#9C27B0', '#F44336'],
      fill:  {colors: ['#E91E63', '#9C27B0', '#F44336'] },           
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
        type="bar"
        width="600px"
      />
    </div>
  )
}

export default ColumnChart;