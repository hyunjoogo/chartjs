import React from "react";
import {Bar} from 'react-chartjs-2';
import {gasMileage} from "./GasMileage";

const HorizontalBar = () => {
  const datalist = gasMileage;

  const data = {
    labels: datalist.map(({name}) => name),
    datasets: [
      {
        label: '# of Votes',
        data: datalist.map(({mileage}) => mileage),
        backgroundColor:
          datalist.map(({mileage}) => {
            if (mileage > 29) {
              return 'rgba(83, 198, 26, 0.2)'
            } else if (mileage > 19) {
              return 'rgba(255, 206, 86, 0.2)'
            } else {
              return 'rgba(255, 99, 132, 0.2)'
            }
          }),


        // [
        // 'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        borderColor:
          datalist.map(({mileage}) => {
            if (mileage > 29) {
              return 'rgba(83, 198, 26, 1)'
            } else if (mileage > 19) {
              return 'rgba(255, 206, 86, 1)'
              // return 'rgba(251, 253, 61, 1)'
            } else {
              return 'rgba(255, 99, 132, 1)'
            }
          }),
        //   [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'right',
      },
      title: {
        display: false,
        text: 'Chart.js Horizontal Bar Chart',
      },
    },
  };


  return <Bar data={data} options={options}/>
}

export default HorizontalBar
