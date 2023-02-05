import React from 'react';
import Chart from "react-apexcharts";
import './StackedColumn.scss'

const StackedColumn = () => {
  
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
    chart: {id: 'bar-chart', 
             type: 'bar', 
             height: 100 ,
             background: '#fff', 
             foreColor: '#000',           
             stacked: true,
             stackType: '100%'},
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
 
      stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
              },
      colors:['#64CFF6', '#6359E9', '#EFF4FB'],
      fill:  {colors: ['#64CFF6', '#6359E9', '#EFF4FB'] },           
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
    <div className="StackedColumn">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
      />
    </div>
  )
}

export default StackedColumn;