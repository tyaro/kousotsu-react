import { Card,Typography } from '@material-ui/core';
import useSWR from 'swr';
import RankList from './Dashboard';

const Dashboard = (props:{span?:string}) => {
    const {data : infoUp} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR'+props.span
        ,{refreshInterval:30000}
    )
    const {data : infoDown} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/LWR'+props.span
        ,{refreshInterval:30000}
    )

  return (
    <>
      <tr>
        <td>
        <Card style={{backgroundColor:"black",padding:5}}>
        <Typography style={{backgroundColor:'green',paddingLeft:5}}>UP</Typography>
          <RankList data={infoUp} />
        </Card>
        </td>
        <td>
        <Card style={{backgroundColor:"black",padding:5}}>
        <Typography style={{backgroundColor:'red',paddingLeft:5}}>DOWN</Typography>
          <RankList data={infoDown} />
        </Card>
        </td>
        </tr>
    </>
  )
}

export default Dashboard;