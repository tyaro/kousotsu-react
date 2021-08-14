import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { SparklinePriceVol} from '../../atomos/sline';
import useSWR from 'swr';

export const Dashboard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/ADRRank/ARR0'
    ,{refreshInterval:30000}
)
  const percentCol = (value:any) => {
    if(isUndefined(value)){
      return (
        <div>now loading...</div>
      )
    }
    return (
      <>
        <SparklinePriceVol value={value.Value} symbol={value.Pair} span={'1H'}/>
      </>
    )
  }
  const dvCol = (value:any) => {
  var c = '#FFFFFF'
  if (value < 50){c = '#E35561'}
  if (value > 50){c = '#5CC686'}
  return (
          <Typography style={{color:c}}>{value}</Typography>
      )
  }
  if (isUndefined(info)){
    return(
      <>
      <Typography>now loading...</Typography>
      </>
    )
  }
  return (
    <>
    <Typography style={{backgroundColor:'blue',paddingLeft:5}}>本日の最大ボラティリティ</Typography>
    <MaterialTable
    style={{
      maxWidth:360,
      backgroundColor:'#111111',
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        width: 50,
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>,
        customSort:(a,b)=>(a.Rank - b.Rank),
      },
      { 
        title: 'Symbol',
        field: 'Pair',
        render: row => linkBinanceFeature(row.Pair.replace('USDT','')),
        type:'string',
        width: 80,
      },
      {
        title: <div>Today(%)</div>,
        field: 'Value',
        render: row => percentCol(row),
        width:110,
        customSort:(a,b)=>(a.Value - b.Value),
      },      
      {
        title: <div>偏差値</div>,
        field: 'DV',
        render: row => dvCol(row.DV),
        width:100,
        customSort:(a,b)=>(a.DV - b.DV),
      },      
    ]}
    data={info.Result}
    options={{
      toolbar:true,
      sorting:true,
      search:true,
      showTitle: false,
      paging:true,
      tableLayout:'fixed',
      rowStyle:{
        maxHeight:30,
        marginTop:1,
        marginBottom:1,
        paddingTop:1,
        paddingBottom:1,
      },
      header:true,
      minBodyHeight:360,      
      headerStyle:{
        position:'sticky',top:0,
        maxHeight:30,
        minHeight:20,
        height:20,
        marginTop:1,
        marginBottom:1,
        paddingTop:1,
        paddingBottom:1,
      },
      searchFieldStyle:{
          maxHeight:20,
      }
    }}  
  />
  </>
  )
}

export default Dashboard;