import React, {useEffect, useRef, useState} from "react";
import {Bar, Chart} from 'react-chartjs-2';
import {barEx} from "./dataExample";
import zoomPlugin from 'chartjs-plugin-zoom';

const VerticalBar = () => {

  const [listData, setListData] = useState();
  const barRef = useRef();

  useEffect(() => {
    setListData(barEx);
  }, [])

  if (!listData) {
    return null;
  }

  Chart.register(zoomPlugin);


  const data = {
    // ['소나타', '아반떼'] 이런 형식으로 필요
    labels: listData.carList.map(({carName}) => carName),
    datasets: [
      {
        label: '대수',
        data: listData.carList.map(({carValue}) => carValue),
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
    responsive: true,
    plugins: {
      zoom: {
        limits: {
          y: {min: 0, max: 300},
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          drag: {
            enabled: true,
          },
        }
      },
      legend: {
        display: true,
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        },
        position : 'right',
        onHover:function handleHover(evt, item, legend) {
          data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
            console.log(index);
            console.log({color, index, colors});
            console.log(color + '4D');

          });
          legend.chart.update();

        }
      },
    },
    animation: {
      animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '대수'
        },
        beginAtZero: true,
      }
    }
  };


  return (
    <>
      <Bar data={data} options={options} ref={barRef}/>
      <button onClick={() => barRef.current.resetZoom()}> Zoom Reset
      </button>
    </>
  )
}

export default VerticalBar