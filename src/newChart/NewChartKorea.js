import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5themes_Micro from "@amcharts/amcharts5/themes/Micro";
import * as am5map from "@amcharts/amcharts5/map";
import {makegeo2, mygeodata} from "./NewChart";
import {geodataMap, makegeo} from "./makeGeodata";

const regionData = {
  "total": 36,
  "carCount": [
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  "updateDt": "2021-11-24 17:15",
  "region": [
    "인천광역시",
    "부산광역시",
    "대구광역시",
    "대전광역시",
    "울산광역시",
    "경기도",
    "서울특별시",
    "광주광역시"
  ]
}


const NewChartKorea = () => {
  const MapChart = useRef(null);
  const [tis, setTis] = useState("hello");

  useLayoutEffect(() => {
    const root = am5.Root.new("chartdiv");

    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    // Create the map chart
    // https://www.amcharts.com/docs/v5/charts/map-chart/
    var chart = root.container.children.push(am5map.MapChart.new(root, {
      panX: "rotateX",
      projection: am5map.geoMercator(),
      layout: root.horizontalLayout
    }));

    loadGeodata("KR");

// // Create polygon series for continents
// // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
    var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
      calculateAggregates: true,
      valueField: "value"
    }));

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "[bold]{name}[/]\n {hello} : {value}", // data에 넣어줄 때 들어가는 키의 값
      interactive: true
    });

    // 호버했을 때 map색상
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x677935)
    });

    polygonSeries.set("heatRules", [{
      target: polygonSeries.mapPolygons.template,
      dataField: "value",
      min: am5.color(0x8ab7ff),
      max: am5.color(0x25529a),
      key: "fill"
    }]);

    //
    polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
      heatLegend.showValue(ev.target.dataItem.get("value"));
      console.log(ev)
    });

    function loadGeodata(country) {

      // Default map
      var defaultMap = "usaLow";

      if (country == "US") {
        chart.set("projection", am5map.geoAlbersUsa());
      } else {
        chart.set("projection", am5map.geoMercator());
      }

      // calculate which map to be used
      var currentMap = defaultMap;
      var title = "제목으로 사용가능";

      am5.net.load("https://cdn.amcharts.com/lib/5/geodata/json/southKoreaLow.json", chart)
        .then(function (result) {
          var geodata = am5.JSONParser.parse(result.response);
          geodata = makegeo;
          console.log('원본', geodata)
          var data = [];
          // for (var i = 0; i < geodata.features.length; i++) {
          //   data.push({
          //     id: geodata.features[i].id, //"KR-11"
          //     value: regionData.carCount[i],
          //     hello: "hello"
          //   });
          // }

          // geodata.map(value=>console.log(value))


          regionData.region.map((value, index) => {
            // console.log(index, value)
            console.log(geodata)
            let key = geodataMap[value]
            console.log(key)
            if (key === undefined) {
              return
            }
            data.push({
              id: geodata.features[key].id,
              value: regionData.carCount[index] === undefined ? 0 : regionData.carCount[index],
              hello: "hello"
            })
          })
          console.log(data)


          // for (var i = 0; i < geodata.features.length; i++) {
          //   data.push({
          //     id: geodata.features[i].id, //"KR-11"
          //     value: regionData.carCount[i],
          //     hello: "hello"
          //   });
          // }


          // regionData.region.findIndex(value => value===geodata.features[i].properties.name)

          // const checkDataCd = value => value === geodata.features[i].properties.name
          // if (regionData.region.findIndex(checkDataCd) === -1) {
          //   return
          // }

          // makegeo[i] 순으로 carCount[i] 값을 넣어줌
          // carCount가 없는 곳은 1로 표기가 됨


          // regionData.carCount
          // regionData.region


          polygonSeries.set("geoJSON", geodata);
          polygonSeries.data.setAll(data)
        });

      // 왼쪽 상단 제목
      chart.seriesContainer.children.push(am5.Label.new(root, {
        x: 5,
        y: 5,
        text: title,
        background: am5.RoundedRectangle.new(root, {
          fill: am5.color(0xffffff),
          fillOpacity: 0.2
        })
      }))
    }

    // 오른쪽 막대 구성요성
    var heatLegend = chart.children.push(
      am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0x050B15),
        endColor: am5.color(0x25529a),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5
      })
    );

    heatLegend.startLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("startColor")
    });

    heatLegend.endLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("endColor")
    });

// change this to template when possible
    polygonSeries.events.on("datavalidated", function () {
      heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
      heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });

    MapChart.current = root;
    return () => {
      root.dispose()
    }
  }, [])


  return (
    <>
      <div id="chartdiv" style={{width: "100%", height: "500px"}}></div>
      <p>{tis}</p>
    </>
  );
}
export default NewChartKorea
