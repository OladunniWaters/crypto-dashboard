import React from 'react';
import Chart from "react-apexcharts";
import './BarChart.scss'

const BarChart = () => {
  
  const series = [{
              name: 'BTC',
              type: 'column',
              data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
            }, {
              name: 'ETH',
              data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
            }, {
              name: 'BNB',
              type: 'line',
              data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
            }];
            
  const options = { //data on the x-axis
    chart: {
                height: 350,
                type: 'line',
                stacked: false,
                background: '#1D1D41',
                foreColor: '#fff'
              },
              stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%'
                }
              },
              colors:['#64CFF6', '#6359E9', '#fff'],
              fill: {
                colors: ['#64CFF6', '#6359E9', '#fff'] ,
              },
              labels: ['01/01/2023', '02/01/2023', '03/01/2023', '04/01/2023', '05/01/2023', '06/01/2023', '07/01/2023',
                '08/01/2023', '09/01/2023', '10/01/2023', '11/01/2023'
              ],
              markers: {
                size: 0
              },
              xaxis: {
                type: 'datetime'
              },
              yaxis: {
                title: {
                  text: 'Points',
                },
                min: 0
              },
              tooltip: {
                shared: true,
                intersect: false,
                y: {
                  formatter: function (y) {
                    if (typeof y !== "undefined") {
                      return y.toFixed(0) + " points";
                    }
                    return y;
              
                  }
                }
              }
            };
 
  return (
    <div className="barChart">
      <Chart
        options={options}
        series={series}
        type="line"
        width="100%"
        height="100%"
      />
    </div>
  )
}

export default BarChart;