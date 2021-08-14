import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { SparklinePriceVol} from '../../atomos/sline';
import useSWR from 'swr';

export const Dashboard = (props:{span:string}) => {
  const {data : rankData} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/VOLUME/RANK/PV/' + props.span
      ,{refreshInterval:30000}
  )

  if( isUndefined(rankData)){
    return(
      <div>now loading..</div>
    )
  }
  const volumeCol = (value:any) =>{
    var vol = (Number(value)/1000).toFixed(1)
    return (
      <Typography style={{textAlign:'center'}}>{vol}K</Typography>
    )
  }
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
  return (
    <>
    <MaterialTable
    style={{
      backgroundColor:'#111111',
      width:360,
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>,
        customSort:(a,b)=>(a.Rank - b.Rank),
        width:30,
      },
      { 
        title: 'Symbol',
        field: 'Pair',
        render: row => linkBinanceFeature(row.Pair.replace('USDT','')),
        type:'string',
        width:60,
      },
      {
        title: <div style={{textAlign:'center'}}>出来高<br/>(USDT)</div>,
        field: 'Value',
        render: row => volumeCol(row.Value),
        customSort:(a,b)=>(a.Value - b.Value),
        width:80,
      },      
      {
        title: <div>全体<br/>偏差値</div>,
        field: 'VOLDV',
        render: row => dvCol(row.VOLDV),
        customSort:(a,b)=>(a.VOLDV - b.VOLDV),
        width:60,
      },      
      {
        title: <div>銘柄<br/>偏差値</div>,
        field: 'PDV',
        render: row => dvCol(row.PDV),
        customSort:(a,b)=>(a.PDV - b.PDV),
        width:60,
      },
      {
        title: <div>出来高<br/>換算値</div>,
        field: 'PVC',
        render: row => volumeCol(row.PVC),
        customSort:(a,b)=>(a.PVC - b.PVC),
        hidden:true,
      },      
      {
        title: <div>中央値</div>,
        field: 'MED',
        render: row => volumeCol(row.MED),
        customSort:(a,b)=>(a.MED - b.MED),
        hidden:true,
      },      
    ]}
    data={rankData.Result}
    options={{
      toolbar:true,
      sorting:true,
      search:true,
      showTitle: false,
      paging:true,
      tableLayout:'fixed',
      rowStyle:{
        marginTop:1,
        marginBottom:1,
        paddingTop:1,
        paddingBottom:1,
      },
      header:true,
      headerStyle:{
        position:'sticky',top:0,
        whiteSpace:'nowrap',
        maxHeight:20,
        maxWidth:20,
        paddingTop:0,
        paddingBottom:0,
        paddingRight:1,
      },
      doubleHorizontalScroll:false,
    }}  
  />
  </>
  )
  /*
  return (
    <>
    <MaterialTable
    style={{
      maxWidth:420,
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
        title: <div>出来高(USDT)</div>,
        field: 'Value',
        render: row => volumeCol(row.Value),
        width:100,
        customSort:(a,b)=>(a.Value - b.Value),
      },      
      {
        title: <div>全体<br/>偏差値</div>,
        field: 'VOLDV',
        render: row => dvCol(row.VOLDV),
        width:100,
        customSort:(a,b)=>(a.VOLDV - b.VOLDV),
      },      
      {
        title: <div>銘柄<br/>偏差値</div>,
        field: 'PDV',
        render: row => dvCol(row.PDV),
        width:100,
        customSort:(a,b)=>(a.PDV - b.PDV),
      },
      {
        title: <div>出来高<br/>換算値</div>,
        field: 'PVC',
        render: row => volumeCol(row.PVC),
        width:110,
        customSort:(a,b)=>(a.PVC - b.PVC),
        hidden:true,
      },      
      {
        title: <div>中央値</div>,
        field: 'MED',
        render: row => volumeCol(row.MED),
        width:110,
        customSort:(a,b)=>(a.MED - b.MED),
        hidden:true,
      },      
    ]}
    data={rankData.Result}
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
  */
}

export default Dashboard;