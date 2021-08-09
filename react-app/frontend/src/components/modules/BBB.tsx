import useSWR from 'swr';
import { Typography } from '@material-ui/core';
import BB from '../block/BBBList';

const Dashboard = () => {
  const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/BBB'
      ,{refreshInterval:30000}
  )

  return (
    <>
      <Typography>価格のトレンドは1分周期の20分間トレンド</Typography>
      <Typography>ボリンジャーバンド幅は2σ</Typography>
      <Typography>BB%Bから50引いているので0以上でSMA(20)より上、以下で下になります。</Typography>
      <Typography>50・-50がボリンジャーバンドの2σラインに相当するので、近辺の数字で推移していると強い上昇/下降トレンドとなります。</Typography>
      <BB data={info} />
    </>
  )
}

export default Dashboard;