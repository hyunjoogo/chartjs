import React from "react";
import * as ChartGeo from "chartjs-chart-geo";


const kr = fetch('./kor.json'); // promise를 리턴
console.log(kr)
const Koreamap = () => {
  Promise.all([
    fetch('./kor.topo.json')
      .then((r) => r.json()),
    fetch('https://gist.githubusercontent.com/mbostock/9535021/raw/928a5f81f170b767162f8f52dbad05985eae9cac/us-state-capitals.csv')
      .then((r) => r.text())
      .then((d) => {
        console.log(d); // csv를 text화 한거 = d
      Papa.parse(d, { dynamicTyping: true, header: true}).data
    })
  ])
    .then(([us, data]) => {
    const states = ChartGeo.topojson.feature(us, us.objects.states).features;


    console.log(us, data, states)
  })
  //   const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
  //     type: 'bubbleMap',
  //     data: {
  //       labels: data.map((d) => d.description),
  //       datasets: [{
  //         outline: states,
  //         showOutline: true,
  //         backgroundColor: 'steelblue',
  //         data: data.map((d) => Object.assign(d, {value: Math.round(Math.random() * 10)})),
  //       }]
  //     },
  //     options: {
  //       plugins: {
  //         legend: {
  //           display: false
  //         },
  //         datalabels: {
  //           align: 'top',
  //           formatter: (v) => {
  //             return v.description;
  //           }
  //         }
  //       },
  //       scales: {
  //         xy: {
  //           projection: 'albersUsa',
  //         },
  //         r: {
  //           size: [1, 20],
  //         },
  //       }
  //     }
  //   });
  // });
  return (
    <canvas id="canvas"></canvas>
  )
}


export default Koreamap
