import React, {useEffect, useState} from "react";
import {speedbysection} from "./speedbysection";

const SectionSpeed = () => {

  const [data, setData] = useState();

  useEffect(() => {
    setData(speedbysection)
  }, [])


  if (!data) {
    return null;
  }

  const dummy = {
    "name": "양재IC ~ 판교JC",
    "total": 8.9,
    "am6": 84,
    "am7": 85,
    "am8": 87,
    "am9": 90,
    "am10": 83
  }

  const changeColor = (value) => {
    if (value > 79) {
      return "backgroundGreen"
    } else if (value > 39) {
      return "backgroundYellow"
    } else {
      return "backgroundRed"
    }
  }


  return (
    <table className="speedTable">
      <thead>
      <tr>
        <th>구간</th>
        <th>연장<br/>(km)</th>
        <th>06</th>
        <th>07</th>
        <th>08</th>
        <th>09</th>
        <th>10</th>
      </tr>

      </thead>
      <tbody>
      {data.map((value, index) => {
        return (
          <tr ket={index}>
            <td>{value.name}</td>
            <td>{value.total}</td>
            <td className={changeColor(value.am6)}>{value.am6}</td>
            <td className={changeColor(value.am7)}>{value.am7}</td>
            <td className={changeColor(value.am8)}>{value.am8}</td>
            <td className={changeColor(value.am9)}>{value.am9}</td>
            <td className={changeColor(value.am10)}>{value.am10}</td>
          </tr>
        )
      })}
      </tbody>
    </table>

  )
}


export default SectionSpeed;
