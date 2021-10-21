import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2';
import {barEx} from "./dataExample";

const VerticalBar = () => {

  const [listData, setListData] = useState();

  useEffect(() => {
    setListData(barEx)
  }, [])

  if (!listData) {
    return null;
  }

  const data = {
    // ['소나타', '아반떼'] 이런 형식으로 필요
    labels: listData.carList.top10,
    datasets: [
      {
        label: '대수',
        data: listData.carList.top10Int,
        // 지정범위를 초과하면 다시 1번부터
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text: '대수'
        },
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(val, index) {
            console.log(val, index)
          },
        }
      }
    }
  };


  return <Bar data={data} options={options}/>
}

export default VerticalBar