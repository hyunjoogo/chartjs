import './App.css';
import ComboChart from "./Combo-Chart/ComboChart";
import VerticalBar from "./BarChart/VerticalBar";
import LineChart from "./LineChart/LineChart";
import DoughnutChart from "./Doughnut/DoughnutChart";
import ComboChartCarType from "./Combo-Chart/ComboChartCarType";
import Koreamap from "./KoreaMap/Koreamap";


function App() {

  return (
    <div className="container">

      <div className="row">
        <div className="col-6">
          <p className="text-center">1-1. 브랜드별 데이터 수집 차량</p>
        </div>
        <div className="col-6">
          <p className="text-center">1-2. 차종별 데이터 수집 차량</p>
          <VerticalBar/>
          <DoughnutChart/>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="text-center">2. 데이터 수집 지역</p>
        </div>
      </div>

      <div className="row">
        <p className="text-center">3. 누적 주행거리 평균 & 안전운전점수 평균</p>
        <div className="col-6">
          <p className="text-center">3-1. 연령대별</p>
          <ComboChart/>
        </div>
        <div className="col-6">
          <p className="text-center">3-2. 차종별</p>
          <ComboChartCarType/>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-center">주행거리별 배터리 수명</p>
          <LineChart/>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="text-center">지도</p>
          <Koreamap/>
        </div>
      </div>

    </div>
  );
}

export default App;
