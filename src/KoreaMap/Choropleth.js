import React from 'react';
import {Chart} from "chart.js";
import * as ChartGeo from "chartjs-chart-geo";
import {center} from "./centerLocation";

const centerLocation = center;

class Choropleth extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }
  componentDidMount() {
    Promise.all([
      fetch('https://raw.githubusercontent.com/markmarkoh/datamaps/master/src/js/data/kor.topo.json').then((r) => r.json()),
      fetch('https://unpkg.com/us-atlas/states-10m.json').then((r) => r.json())
    ]).then(([kor, us]) => {
      const nation = ChartGeo.topojson.feature(kor, kor.objects.kor).features;
      const ctx = this.chartRef.current.getContext('2d');
      console.log(nation)
      new Chart(ctx, {
        type: 'choropleth',
        data: {
          labels: nation.map((d) => d.properties.name),
          datasets: [{
            label: 'States',
            outline: nation,
            data: nation.map((d) => ({feature: d, value: 10})),
          }]
        },
        options: {
          plugins: {
            legend: {
              display: true
            },
          },
          scales: {
            xy: {
              projection: 'mercator'
            },
            color: {
              quantize: 10,
              legend: {
                position: 'bottom-right',
                align: 'left' // 수직인지 수평인지
              },
            }
          },
        }
      });
    })
  }


  render() {
    return (
      <canvas ref={this.chartRef}/>
    )
  }
}

export default Choropleth
