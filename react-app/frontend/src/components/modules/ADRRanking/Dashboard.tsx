import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { Typography } from '@material-ui/core';
import { isUndefined, mapValues } from 'lodash';
import { SparklinePriceVol} from '../../atomos/sline';

export const Dashboard = (props:{title?:string,data?:any}) => {

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
  if (isUndefined(props.data)){
    return(
      <>
      <Typography>now loading...</Typography>
      </>
    )
  }
  var info = props.data.Result
  return (
    <>
    <MaterialTable
    style={{
      maxWidth:350,
      backgroundColor:'#111111',
    }}
    columns={[
      { 
        title: 'Rank',
        field: 'Rank',
        width: 50,
        render: row => <Typography style={{fontSize:'1.5em'}}>{row.Rank}</Typography>
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
      },      
    ]}
    data={info}
    options={{
      toolbar:false,
      sorting:true,
      search:false,
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
      minBodyHeight:350,      
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
          maxHeight:0,
      }
    }}  
  />
  </>
  )
}

export default Dashboard;