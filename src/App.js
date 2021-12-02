import './App.css';
import ComboChart from "./Combo-Chart/ComboChart";
import VerticalBar from "./BarChart/VerticalBar";
import LineChart from "./LineChart/LineChart";
import DoughnutChart from "./Doughnut/DoughnutChart";
import ComboChartCarType from "./Combo-Chart/ComboChartCarType";
import Koreamap from "./KoreaMap/Koreamap";
import MapMap from "./KoreaMap/MapMap";
import MapClass from "./KoreaMap/MapClass";
import Choropleth from "./KoreaMap/Choropleth";
import AP from "./KoreaMap/ap";
import SectionSpeed from "./sectionSpeed/SectionSpeed";
import HorizontalBar from "./HorizontalBarChart/HorizontalBar";
import NewChartKorea from "./newChart/NewChartKorea";
import NewChart from "./newChart/NewChart";


function App() {

  return (
    <div className="container">

      <div>
        <NewChartKorea />
      </div>

      {/*<div className="row">*/}
      {/*  <div className="col-6">*/}
      {/*    <p className="text-center">1-1. 브랜드별 데이터 수집 차량</p>*/}
      {/*    <SectionSpeed />*/}
      {/*  </div>*/}
      {/*  <div className="col-6">*/}
      {/*    <p className="text-center">1-2. 차종별 데이터 수집 차량</p>*/}
      {/*    <VerticalBar/>*/}
      {/*    <DoughnutChart/>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="row">*/}
      {/*  <div className="col-12">*/}
      {/*    <p className="text-center">2. 데이터 수집 지역</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="row">*/}
      {/*  <p className="text-center">3. 누적 주행거리 평균 & 안전운전점수 평균</p>*/}
      {/*  <div className="col-6">*/}
      {/*    <p className="text-center">3-1. 연령대별</p>*/}
      {/*    <ComboChart/>*/}
      {/*  </div>*/}
      {/*  <div className="col-6">*/}
      {/*    <p className="text-center">3-2. 차종별</p>*/}
      {/*    <ComboChartCarType/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="row">*/}
      {/*  <div className="col-6">*/}
      {/*    <p className="text-center">주행거리별 배터리 수명</p>*/}
      {/*    <LineChart/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="row">*/}
      {/*  <div className="col-12">*/}
      {/*    <p className="text-center">지도 예시1 (줌 안됨)</p>*/}
      {/*    <MapClass/>*/}
      {/*  </div>*/}
      {/*  <div className="col-12">*/}
      {/*    <p className="text-center">지도 예시2 (줌 안됨)s</p>*/}
      {/*    <Choropleth/>*/}
      {/*  </div>*/}
      {/*  /!*<AP/>*!/*/}
      {/*</div>*/}
      {/*<div className="row">*/}
      {/*  <div className="col-6" style={{height:"100vh"}}>*/}
      {/*    <p className="text-center">회사차량별 연비</p>*/}
      {/*    <HorizontalBar />*/}
      {/*  </div>*/}

      {/*  /!*<AP/>*!/*/}
      {/*</div>*/}

    </div>
  );
}

export default App;
