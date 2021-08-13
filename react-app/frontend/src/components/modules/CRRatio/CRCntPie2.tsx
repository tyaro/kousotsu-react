
import { Pie } from 'react-chartjs-2';

const PieChart = (props:{info?:any,span:string}) => {
    const data = {
        labels: ['UP', 'DOWN', 'HOLD'],
        datasets: [
          {
            label: '',
            data: [props.info.UP,props.info.DOWN,props.info.HOLD],
            backgroundColor: [
              'rgba(92, 198, 134, 0.2)',
              'rgba(227, 85, 97, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(92, 198, 134, 1)',
              'rgba(227, 85, 97, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
    };
    const options = {
        plugins: {
            title: {
              display: false,
              text: 'Chart Title',
            },
            legend:false,
          }
    };
    return (
        <>
            <Pie data={data} options={options}/>
        </>
    )
}

export default PieChart;