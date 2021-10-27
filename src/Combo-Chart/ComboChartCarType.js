import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {carGroup} from "./dataSample";

const ComboChartCarType = () => {

  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(carGroup)
  }, [])

  if (!listData) {
    return null;
  }

  const data = {
    labels: listData.carGroup.map(({carName}) => carName),
    datasets: [
      {
        label: '평균 안전운전 점수',
        data: listData.carGroup.map(({safeCount}) => safeCount),
        fill: false, //  라인 아래 채우기
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor:  'rgba(255, 99, 132, 1)',
        yAxisID: 'y',

      },
      {
        label: '평균 누적 주행거리',
        data: listData.carGroup.map(({cumulativeMeter}) => cumulativeMeter),
        fill: false,
        backgroundColor:  'rgba(255, 99, 132, 0.2)',
        borderColor:  'rgba(255, 99, 132, 1)',
        borderWidth: 1,
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
      tooltip: {}
    },
    interaction: {
      intersect: false,
      mode: 'index',
    },
  };


  return <Line data={data} options={options}/>
}


export default ComboChartCarType
