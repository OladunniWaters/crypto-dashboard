import React from 'react';
import Chart from "react-apexcharts";

const SprinkLine = () => {
  
  const series = [ //data on the y-axis
    {
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
  ];
  const options = { //data on the x-axis
      chart: {
                type: 'area',
                height: 160,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              fill: {
                opacity: 0.3
              },
              xaxis: {
                crosshairs: {
                  width: 1
                },
              },
              yaxis: {
                min: 0
              },
              title: {
                text: '$135,965',
                offsetX: 0,
                style: {
                  fontSize: '24px',
                }
              },
              subtitle: {
                text: 'Profits',
                offsetX: 0,
                style: {
                  fontSize: '14px',
                }
              },
  
  };

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="area"
        width="600px"
      />
    </div>
  )
}

export default SprinkLine;