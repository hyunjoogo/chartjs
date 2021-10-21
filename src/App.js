import './App.css';
import {Chart, registerables} from "chart.js";
import {useEffect, useRef} from "react";

function App() {
  const canvasDom = useRef(null);
  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    console.log(ctx);
    Chart.register(...registerables);

    const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb'], // x축 라벨
        datasets: [{  // 들어가는 자료들 object 형식으로 개수만큼 {},{} 던져주면 됨
          label: 'Net sales', // 상단과 마우스오버시 나오는 라벨
          data: data,
          backgroundColor: [ // 배경색
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
          ],
          borderColor: [ // 보더칼러
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
          ],
          parsing: {
            yAxisKey: 'net' // data에 바라봐야하는 값
          },
        }, {
          label: 'Cost of goods sold',
          data: data,
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          parsing: {
            yAxisKey: 'cogs'
          }
        }, {
          label: 'Gross margin',
          data: data,
          backgroundColor: [
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          parsing: {
            yAxisKey: 'gm'
          }
        }]
      },
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasDom}>
        <p>example chart</p>
      </canvas>
    </div>
  );
}

export default App;
