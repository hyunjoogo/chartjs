import React from "react";
import ChartComponent from 'react-chartjs-2';
import {TreemapController, TreemapElement} from "chartjs-chart-treemap";

const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 2, max: 40};

const Treemap = () => {

  return (
    <>
      <ChartComponent/>
    </>
  )
}

export default Treemap
