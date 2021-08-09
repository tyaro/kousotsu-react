import useSWR from 'swr';
import { Typography } from '@material-ui/core';
import ADR from '../block/ADRList';

const Dashboard = () => {
  const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/ARR'
      ,{refreshInterval:30000}
  )

  return (
    <>
      <Typography>ADRを％表示にしたリスト</Typography>
      <Typography>1日のボラリティの平均値となります</Typography>
      <Typography>1日ローソク足ベースで計算しているため、日本時間9時を起点とした計算になります</Typography>
      <ADR data={info} />
    </>
  )
}

export default Dashboard;