import useSWR from 'swr';
import { Typography } from '@material-ui/core';
import RSI from '../block/RSIList';

const Dashboard = () => {
  const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/RSI'
      ,{refreshInterval:30000}
  )

  return (
    <>
      <Typography>価格のトレンドは1分周期の30分間トレンド</Typography>
      <RSI data={info} />
    </>
  )
}

export default Dashboard;