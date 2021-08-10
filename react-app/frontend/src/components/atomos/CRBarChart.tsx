import { Bar } from 'react-chartjs-2';

const CRBarChart = (props:{data1:any,data2:any}) =>{
    var info1 = props.data1
    var info2 = props.data2
    const data = {
        labels:['1min','5min','10min','30min','1hour','4hour','6hour','8hour','12hour'],
        datasets:[
            {
                label:info1.Pair,
                data:[
                    info1.CRate01,
                    info1.CRate05,
                    info1.CRate10,
                    info1.CRate30,
                    info1.CRate60,
                    info1.CRate240,
                    info1.CRate360,
                    info1.CRate480,
                    info1.CRate720,
                ],
                backgroundColor: 'rgb(255, 99, 132)',
            },
            {
                label: info2.Pair,
                data:[
                    info2.CRate01,
                    info2.CRate05,
                    info2.CRate10,
                    info2.CRate30,
                    info2.CRate60,
                    info2.CRate240,
                    info2.CRate360,
                    info2.CRate480,
                    info2.CRate720,
                ],
                backgroundColor: 'rgb(54, 162, 235)',
            },
        ],
    }
    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
              borderWidth: 2,
            }
          },
        scales: {
            xAxes: [
                {
                  ticks: {
                    beginAtZero: false,
                  },
                },
              ],
            yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
            },
          ],
        },
      };
    return (
        <Bar data={data} options={options} />
    )
}

export default CRBarChart;