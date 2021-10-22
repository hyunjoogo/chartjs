import React, {useEffect, useState} from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {dataSample} from "./dataSample";

const ComboChart = () => {

  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(dataSample)
  })

  if (!listData) {
    return null;
  }

  const data = {
    labels: listData.ageGroup.map(({age}) => age),
    datasets: [
      {
        label: '평균 안전운전 점수',
        data: listData.ageGroup.map(({safeCount}) => safeCount),
        fill: false, //  라인 아래 채우기
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        yAxisID: 'y',

      },
      {
        label: '평균 누적 주행거리',
        data: listData.ageGroup.map(({cumulativeMeter}) => cumulativeMeter),
        fill: false,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        yAxisID: 'y1',
        type: 'bar',
      },
    ],
  };

  const options = {
    scales: {
      y: { // 평균 안전운전 점수
        position: 'right',
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          display: false,
        },
        ticks: {}
      },
      y1: {},
    },
    plugins: {
      tooltip: {

      }
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };


  return <Line data={data} options={options}/>
}


export default ComboChart
