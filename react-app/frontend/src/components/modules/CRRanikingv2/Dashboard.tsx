import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { SparklinePriceInfo2 } from '../../atomos/sline';
import useSWR from 'swr';


export const Dashboard = (props:{span:string,sort:any}) => {
  const {data : rankData} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/CRRank/' + props.span
      ,{refreshInterval:30000}
  )
  var info = []
  //console.log(rankData)
  if( !isUndefined(rankData)){ 
    info = rankData.Result
  }
  var trendSpan = '1M'
  var trendSpan2 = '15MIN'
  if(props.span==="15M"||props.span==="30M"){
    trendSpan = '15M'
  }else if(props.span==="60M"){
    trendSpan = '1H'
    trendSpan2 = '1HOUR'
  }else if(props.span==="240M"){
    trendSpan = '4H'
    trendSpan2 = '4HOUR'
  }else if(props.span==="360M"||props.span==="480M"||props.span==="720M"){
    trendSpan = '6H'
    trendSpan2 = '6HOUR'
  }else if(props.span==="1440M"){
    trendSpan = '1D'
    trendSpan2 = '1DAY'
  }

  const percentCol = (value:any) => {
    var c = '#FFFFFF'
    if (value < 0){c = '#E35561'}
    if (value > 0){c = '#5CC686'}
      return (
          <Typography style={{color:c}}>{value}%</Typography>
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
      //width:360,
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>,
        customSort:(a,b)=>(a.Rank - b.Rank),
        width:50,
        cellStyle:{
          minWidth:50,
          maxWidth:60,
        },
        defaultSort:props.sort
      },
      { 
        title: 'Symbol',
        field: 'Pair',
        render: row => linkBinanceFeature(row.Pair.replace('USDT','')),
        type:'string',
        width:60,
        cellStyle:{
          minWidth:50,
          maxWidth:60,
        },
      },
      { 
        title: 'Price',
        field: 'Price',
        render: row => SparklinePriceInfo2({symbol:row.Pair ,span:trendSpan, changeRate:row.Value}),
        type:'string',
        sorting:false,
        //width:120,
      },
      {
        title: <div style={{textAlign:'center'}}>変動率<br/>(%)</div>,
        field: 'Value',
        render: row => percentCol(row.Value),
        customSort:(a,b)=>(a.Value - b.Value),
        //width:80,
      },
      /*
      {
        title: <div style={{textAlign:'center'}}>出来高</div>,
        field: 'Volume',
        render: row => SparklineVolumeInfo2({symbol:row.Pair,span:trendSpan2}),
        sorting:false,
        //width:80,
      },  
      {
        title: <div style={{textAlign:'center'}}>売買<br/>比率</div>,
        field: 'Volume',
        render: row => Ratio({symbol:row.Pair,span:trendSpan2}),
        sorting:false,
        //width:80,
      },
      */  
      {
        title: <div>全体<br/>偏差値</div>,
        field: 'DV',
        render: row => dvCol(row.DV),
        customSort:(a,b)=>(a.DV - b.DV),
        //width:60,
      },      
    ]}
    data={info}
    options={{
      toolbar:true,
      sorting:true,
      search:true,
      showTitle: false,
      paging:true,
      tableLayout:'auto',
      rowStyle:{
        //marginTop:1,
        //marginBottom:1,
        padding:1,
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