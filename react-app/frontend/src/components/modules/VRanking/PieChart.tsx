
import { Pie } from 'react-chartjs-2';
import useSWR from 'swr';
import {isUndefined } from 'lodash';
import { Card,Box, Typography } from '@material-ui/core';

const PieChart = (props:{symbol?:any,span?:string}) => {
  var url = 'https://kousotsu-py.info/cryptoinfo/API/VOLUME/'+props.symbol +'/' + props.span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var buy = 100
  var sell = 100
  if(isUndefined(info)||isUndefined(props.symbol)){}else{
    buy = Number(info.RATIO)
    sell = 100 - buy
  }
  const data = {
      labels: ['BUY', 'SELL'],
      datasets: [
        {
          label: '',
          data: [buy,sell],
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
        <Box style={{width:40,height:40}}>
          <Pie data={data} options={options}/>
        </Box>
      </>
  )
}

export default PieChart;