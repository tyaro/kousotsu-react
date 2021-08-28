import MaterialTable from '@material-table/core';
import { LinkBinanceFeature3 } from '../../atomos/link';
import { Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { fetchVolumeRanking, fetchVolumeWholeInfo } from '../../atomos/FetchAPIData';

const colDV = (value:any) => {
    var c = '#FFFFFF'
    if (value < 50){c = '#E35561'}
    if (value > 50){c = '#5CC686'}
    return (
        <Typography style={{color:c}}>{value}</Typography>
    )
}

const colRatio = (value:any) => {
  var c = '#FFFFFF'
  const ratio = Number((value.Value2/value.Value*100).toFixed(1))
  if (ratio < 50){c = '#E35561'}
  if (ratio > 50){c = '#5CC686'}
  return (
      <Typography style={{color:c}}>{ratio}%</Typography>
  )
}

const colVol = (value:any) => {
    if (String(value).length>11){
    value = String((Number(value)/1000000000).toFixed(1)) + 'B'
    }else if (String(value).length>7){
    value = String((Number(value)/1000000).toFixed(1)) + 'M'
    }else if(String(value).length > 4){
    value = String((Number(value)/1000).toFixed(1)) + 'K'
    }
    return (
        <Typography>${value}</Typography>
    )
}

const colDOM = (value:any,wholeValue:any) => {
  const DOM = (value/wholeValue*100).toFixed(1)
  return (
    <Typography >{DOM}%</Typography>
  )
}
  
export const Dashboard = (p:{span:string}) => {
  const info = fetchVolumeRanking({span:p.span})
  const info2 = fetchVolumeWholeInfo({span:p.span})

  if( isUndefined(info)||isUndefined(info2)){
    return(
      <div>now loading..</div>
    )
  }
  const wholeValue = info2.SUM

  return (
    <>
    <MaterialTable
    style={{
      backgroundColor:'#111111',
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'RANK',
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.RANK}</Typography>,
        customSort:(a,b)=>(a.RANK - b.RANK),
        width:50,
      },
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => LinkBinanceFeature3({symbol:row.pair}),
        type:'string',
        width:80,
      },
      {
        title: <div style={{textAlign:'center'}}>出来高<br/>(USDT)</div>,
        field: 'Value',
        render: row => colVol(row.Value),
        customSort:(a,b)=>(Number(a.Value) - Number(b.Value)),
        width:80,
      },
      {
        title: <div>売買<br/>比率</div>,
        field: 'Value2',
        render: row => colRatio(row),
        customSort:(a,b)=>(a.Value2/a.Value - b.Value2/b.Value),
        width:60,
      },      
      {
        title: <div>占有率</div>,
        field: 'DOM',
        render: row => colDOM(row.Value,wholeValue),
        customSort:(a,b)=>(a.Value - b.Value),
        width:60,
      },
      /* 
      {
        title: <div>全体<br/>偏差値</div>,
        field: 'DV',
        render: row => colDV(row.DV),
        customSort:(a,b)=>(a.DV - b.DV),
        width:60,
      },
      */      
    ]}
    data={info.Result}
    options={{
      toolbar:true,
      sorting:true,
      search:true,
      showTitle: false,
      paging:false,
      tableLayout:'fixed',
      maxBodyHeight:700,
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
}


export default Dashboard;