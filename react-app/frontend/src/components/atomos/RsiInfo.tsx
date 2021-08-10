import useSWR from 'swr';
import { Card,Box, Typography } from '@material-ui/core';
import { SlineRSI } from '../atomos/sline';
import { isUndefined } from 'lodash';


const Dashboard = (props:{symbol?:string}) => {
  var url =  'https://kousotsu-py.info/cryptoinfo/API/RSI/' + props.symbol
  const {data : info} = useSWR(
      url
      ,{refreshInterval:30000}
  )
  if (isUndefined(info)){
      return (
          <div>now loading</div>
      )
  }
  var pair = info.Pair
  var RSI14_1M = info.RSI14_1M
  var RSI14_15M = info.RSI14_15M
  var RSI14_1H = info.RSI14_1H
  var RSI14_4H = info.RSI14_4H
  var RSI14_6H = info.RSI14_6H
  var RSI14_1D = info.RSI14_1D

  return (
    <>
    <Card style={{display:'inline-block',backgroundColor:'black',padding:5,margin:5}}>
        <Typography style={{fontSize:'1.5em'}}>RSI(14)</Typography>
        <table style={{marginBlock:5}}>
        <thead>            
            <tr>
            <th><SlineRSI value={RSI14_1M} /></th>
            <th><SlineRSI value={RSI14_15M} /></th>
            <th><SlineRSI value={RSI14_1H} /></th>
            <th><SlineRSI value={RSI14_4H} /></th>
            <th><SlineRSI value={RSI14_6H} /></th>
            <th><SlineRSI value={RSI14_1D} /></th>
            </tr>
        </thead>
        <tbody>
            <tr style={{textAlign:'center'}}>
            <td>1min</td>
            <td>15min</td>
            <td>1hour</td>
            <td>4hour</td>
            <td>6hour</td>
            <td>1day</td>
            </tr>
        </tbody>
       </table>
    </Card>
    </>
  )
}

export default Dashboard;