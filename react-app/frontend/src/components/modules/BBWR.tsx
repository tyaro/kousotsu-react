import useSWR from 'swr';
import { Typography } from '@material-ui/core';
import BB from '../block/BBWRList';

const Dashboard = () => {
  const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/BBWR'
      ,{refreshInterval:30000}
  )

  return (
    <>
      <Typography>価格のトレンドは1分周期の20分間トレンド</Typography>
      <Typography>ボリンジャーバンド幅の推移が小さい場合はレンジ相場</Typography>
      <Typography>ボリンジャーバンド幅の推移が大きい場合はトレンド相場</Typography>
      <BB data={info} />
    </>
  )
}

export default Dashboard;