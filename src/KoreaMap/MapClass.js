import React from 'react';
import {Chart} from "chart.js";
import * as ChartGeo from "chartjs-chart-geo";
import {korData} from "./chartData";
import {center} from "./centerLocation";

const centerLocation = center;

class MapClass extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }


  componentDidMount() {
    Promise.all([
      fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/kor.topo.json').then((r) => r.json()),
      fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json()).then((us) => {
        const nation = ChartGeo.topojson.feature(us, us.objects.nation).features[0]; // 
        const states = ChartGeo.topojson.feature(us, us.objects.states).features; // 아래 states
        console.log(nation, states)
      })
    ]).then(([kor, ok]) => {
      const states = ChartGeo.topojson.feature(kor, kor.objects.kor).features;
      const data = centerLocation;
      console.log(ok)
      const ctx = this.chartRef.current.getContext('2d');
      new Chart(ctx, {
        type: 'bubbleMap',
        data: {
          labels: data.map((d) => d.name),
          datasets: [
            {
              outline: states,
              showOutline: true,
              backgroundColor: 'steelblue',
              data: data.map((d) => Object.assign(d, {value: Math.round(Math.random() * 10)})), // 나중에는 value 없애야함
            },
          ],
        },
        options: {
          plugins: {
            legend: { // 목차? 범례? 사라지게 하기
              display: false,
            },
            datalabels: {
              align: 'top',
              formatter: (v) => {
                console.log(v)
                return v.description;
              },
            },
          },
          scales: {
            xy: {
              projection: 'mercator',
            },
            r: {
              type: 'sizeLogarithmic',
              size: [1, 20],
            },
          },
          layout: {
            // padding: 20
          },
        },
      });
    })
  }


  render() {
    return (
      <canvas ref={this.chartRef}/>
    )
  }
}

export default MapClass
