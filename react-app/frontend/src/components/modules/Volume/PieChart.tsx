import { fetchVolumeRanking } from '../../atomos/FetchAPIData'
import { Pie } from 'react-chartjs-2'
import _, { isUndefined } from 'lodash'

const Dashboard = (p:{span:string}) => {
    const info = fetchVolumeRanking({span:p.span})

    if(isUndefined(info))
    {
        return(
            <div>now loading...</div>
        )
    }
    const num = (info.Result).length
    const labels = _.map(info.Result,'pair')
    const values = _.map(info.Result,'Value').map(Number)
    const lowerValues = values.slice(20)
    const etcValue = _.sum(lowerValues)
    var label = labels.slice(0,20)
    var value = values.slice(0,20)
    label.push('etc.')
    value.push(etcValue)

    const data = {
        labels: label,
        datasets: [
          {
            label: '# of Votes',
            data: value,
            backgroundColor: [
              'rgba(230, 0, 18, 0.5)',
              'rgba(243, 152, 0, 0.5)',
              'rgba(255, 241, 0, 0.5)',
              'rgba(143, 195, 31, 0.5)',
              'rgba(0, 153, 68, 0.5)',
              'rgba(0, 158, 150, 0.5)',
              'rgba(0, 160, 233, 0.5)',
              'rgba(0, 104, 183, 0.5)',
              'rgba(29, 32, 136, 0.5)',
              'rgba(146, 7, 131, 0.5)',
              'rgba(228, 0, 127, 0.5)',
              'rgba(229, 0, 79, 0.5)',
              'rgba(125, 0, 0, 0.5)',
              'rgba(131, 78, 0, 0.5)',
              'rgba(138, 128, 0, 0.5)',
              'rgba(72, 106, 0, 0.5)',
              'rgba(0, 86, 31, 0.5)',
              'rgba(0, 87, 82, 0.5)',
              'rgba(0, 89, 130, 0.5)',
              'rgba(0, 53, 103, 0.5)',
              'rgba(204, 204, 204, 0.5)',
            ],
            borderColor: [
              'rgba(230, 0, 18, 1)',
              'rgba(243, 152, 0, 1)',
              'rgba(255, 241, 0, 1)',
              'rgba(143, 195, 31, 1)',
              'rgba(0, 153, 68, 1)',
              'rgba(0, 158, 150, 1)',
              'rgba(0, 160, 233, 1)',
              'rgba(0, 104, 183, 1)',
              'rgba(29, 32, 136, 1)',
              'rgba(146, 7, 131, 1)',
              'rgba(228, 0, 127, 1)',
              'rgba(229, 0, 79, 1)',
              'rgba(125, 0, 0, 1)',
              'rgba(131, 78, 0, 1)',
              'rgba(138, 128, 0, 1)',
              'rgba(72, 106, 0, 1)',
              'rgba(0, 86, 31, 1)',
              'rgba(0, 87, 82, 1)',
              'rgba(0, 89, 130, 1)',
              'rgba(0, 53, 103, 1)',
              'rgba(204, 204, 204, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    const options={
        plugins:{
            legend:{
                display:true,
                position:'right',
                fontColor:'#FFFFFF',
            },
        },
        responsive:true,
    }

    return (
        <Pie data={data} options={options}/>
    )
    

}

export default Dashboard;