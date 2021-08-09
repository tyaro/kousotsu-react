import useSWR from 'swr';
import { Box,Typography } from '@material-ui/core';
import RankList from '../atomos/CRankDashboard';

const Dashboard = () => {
    const {data : info5M} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR5M'
        ,{refreshInterval:30000}
    )
    const {data : info1H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR1H'
        ,{refreshInterval:30000}
    )
    const {data : info4H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR4H'
        ,{refreshInterval:30000}
    )
    const {data : info12H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR12H'
        ,{refreshInterval:30000}
    )
      
  return (
    <>
    <div style={{display:'flex',flex:1,flexDirection:'row'}}>
        <Box style={{flex:1}}>
            <Typography>5min</Typography>
            <RankList data={info5M} />
        </Box>
        <Box style={{flex:2}}>
            <Typography>1hour</Typography>
            <RankList data={info1H} />
        </Box>
        <Box style={{flex:1}}>
            <Typography>4hour</Typography>
            <RankList data={info4H} />
        </Box>
        <Box style={{flex:1}}>
        <Typography>12hour</Typography>
            <RankList data={info12H} />
        </Box>
    </div>
    </>
  )
}

export default Dashboard;