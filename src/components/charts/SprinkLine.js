import React from 'react';
import Chart from "react-apexcharts";

const SprinkLine = () => {
  
  const series = [ //data on the y-axis
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
},
  ];
  const options = { //data on the x-axis
      chart: {
                type: 'line',
                height: 160,
                background: '#fff',
                foreColor: '#000',
                padding: 20,
                sparkline: {
                  enabled: true
                },
              },
              stroke: {
                curve: 'straight'
              },
              colors:['#6359E9',],
              fill:  {colors: ['#6359E9',] },  
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
                  fontSize: '14px',
                }
              },
              subtitle: {
                text: 'Profits',
                offsetX: 0,
                style: {
                  fontSize: '12px',
                }
              },
  
  };

  return (
    <div style={{marginRight: '20px'}}>
      <Chart
        options={options}
        series={series}
        type="area"
        width="200px"
        height="100px"
      />
    </div>
  )
}

export default SprinkLine;