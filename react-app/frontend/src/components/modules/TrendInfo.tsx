import useSWR from 'swr';
import { Card,Box, Typography } from '@material-ui/core';
import { SlineTrend } from '../atomos/sline';
import { isUndefined } from 'lodash';

const Dashboard = (props:{symbol?:string}) => {
  var url =  'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/' + props.symbol
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
  var trend = info.Trend
  var price = info.Value
  return (
    <>
    <Card style={{display:'inline-block',width:240,marginRight:5,backgroundColor:'#111111'}}>
        <Box style={{display:'flex',flex:1,flexDirection:'row',marginLeft:5,marginBottom:5}}>
            <Box style={{flex:1}} maxWidth={100}>
                <Typography>
                    {pair}</Typography>
            </Box>  
            <Box style={{flex:2}} paddingLeft={5} maxWidth={100} height={30}>
                <Typography style={{fontSize:'1.5em'}}>${price}</Typography>
            </Box>
        </Box>
        <Box style={{marginLeft:5}}>
        <SlineTrend value={trend} />
        </Box>
    </Card>
    </>
  )
}

export default Dashboard;