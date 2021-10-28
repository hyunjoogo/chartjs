import React, {useEffect, useRef, useState} from "react";
import * as ChartGeo from "chartjs-chart-geo";
import {Chart} from "chart.js";

// const kr = fetch('./kor.json').then((r) => console.log(r)); // promise를 리턴


const Koreamap = () => {
  const [kr, setKr] = useState();
  const [us, setUs] = useState();
  const [data, setData] = useState();

  const chartRef = useRef(null);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/kor.topo.json')
      .then((r) => r.json())
      .then(setKr)
    fetch('https://unpkg.com/us-atlas/states-10m.json')
      .then((r) => r.json())
      .then(setUs)




  }, [])


  if (!kr) {
    return null
  }
  if (!us) {
    return null
  }

  const statesUs = ChartGeo.topojson.feature(us, us.objects.states).features;
  const stateskr = ChartGeo.topojson.feature(kr, kr.objects.kor).features;
  console.log(statesUs)
  console.log(stateskr)
  // const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
  //   type: 'bubbleMap',
  //   data: {
  //     labels: [].map((d) => d.description),
  //     datasets: [{
  //       outline: stateskr,
  //       showOutline: true,
  //       backgroundColor: 'steelblue',
  //       data: [].map((d) => Object.assign(d, {value: Math.round(Math.random() * 10)})),
  //     }]
  //   },
  //   options: {
  //     plugins: {
  //       legend: {
  //         display: false
  //       },
  //       datalabels: {
  //         align: 'top',
  //         formatter: (v) => {
  //           return v.description;
  //         }
  //       }
  //     },
  //     scales: {
  //       xy: {
  //         projection: 'albersUsa',
  //       },
  //       r: {
  //         size: [1, 20],
  //       },
  //     }
  //   }
  // });

return (
  <canvas ref={chartRef} />
)
}


export default Koreamap
