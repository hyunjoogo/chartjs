import React, {useEffect, useState} from "react";
import {Line} from "react-chartjs-2";
import {dataSample} from "../Combo-Chart/dataSample";
import {lineDataSample} from "./lineDataSample";


export default () => {
  const [listData, setListData] = useState();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setListData(lineDataSample)
  })

  if (!listData) {
    return null;
  }

  const data = {
    labels: lineDataSample.list[tab].data.map(({meter}) => meter),
    datasets: [
      {
        label: lineDataSample.list[tab].carName,
        data: lineDataSample.list[tab].data.map(({battery수명}) => battery수명),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      }
    }
  };

  return (
    <>
      {lineDataSample.list.map((value, index) => {
        return <button onClick={() => setTab(index)} key={index}>차종{index + 1}</button>
      })}
      <Line data={data} options={options}/>
    </>
  )
}

