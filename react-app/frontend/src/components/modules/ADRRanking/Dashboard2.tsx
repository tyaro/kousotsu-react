import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography,Card } from '@material-ui/core';
import { isUndefined } from 'lodash';
import useSWR from 'swr';
import { SparklinePriceVol} from '../../atomos/sline';

export const Dashboard = (props:{title?:string,span?:any}) => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/ADRRank/'+props.span
    ,{refreshInterval:30000}
  )
  const avgCol = (value:any) => {
    if(isUndefined(value)){
      return (
        <div>now loading...</div>
      )
    }
    return (
      <>
        <SparklinePriceVol value={value.Value} symbol={value.Pair} span={'1D'}/>
      </>
      )
  }
  const tdrCol = (value:any) => {
    if(isUndefined(value)){
      return (
        <div>now loading...</div>
      )
    }
    return (
      <>
        <SparklinePriceVol value={value.TDR} symbol={value.Pair} span={'1H'}/>
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
    <MaterialTable
    style={{
      maxWidth:480,
      backgroundColor:'#111111',
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        width: 50,
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>,
        customSort: (a,b)=>(a.Rank - b.Rank),
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
        field: 'TDR',
        render: row => tdrCol(row),
        width:110,
        customSort:(a,b)=>(a.TDR - b.TDR),
      },      
      {
        title: <div>AVG前日(%)</div>,
        field: 'Value',
        render: row => avgCol(row),
        width:135,
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
      maxBodyHeight:710,      
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
  )
}

export default Dashboard;