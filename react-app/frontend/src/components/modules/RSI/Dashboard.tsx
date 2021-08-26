import MaterialTable from '@material-table/core';
import { linkBinanceFeature } from '../../atomos/link';
import { fetchRSIValue } from '../../atomos/FetchAPIData';
import { PriceInfo, RSITrend } from '../../block/SparkLineCol';
import { isUndefined } from 'lodash';

export const Dashboard = () => {
  const info = fetchRSIValue()
  if(isUndefined(info)){
    return(
      <div>now loading...</div>
    )
  }
  return (
    <>
    <MaterialTable
    style={{
      backgroundColor:'#111111',
//      width:900,
    }}
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => linkBinanceFeature(row.pair.replace('USDT','')),
        type:'string',
        width:90,
      },
      {
        title: <div style={{textAlign:'center'}}>Price<br/>(USDT)</div>,
        field: 'Price',
        render: row => PriceInfo({symbol:row.pair}),
        width:160,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },
      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>1min</div>,
        field: '1M',
        render: row => RSITrend({symbol:row.pair,span:'1M'}),
        customSort: (a,b) => (a['1M']-b['1M']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>15min</div>,
        field: '15M',
        render: row => RSITrend({symbol:row.pair,span:'15M'}),
        customSort: (a,b) => (a['15M']-b['15M']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },
      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>1hour</div>,
        field: '1H',
        render: row => RSITrend({symbol:row.pair,span:'1H'}),
        customSort: (a,b) => (a['1H']-b['1H']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },
      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>4hour</div>,
        field: '4H',
        render: row => RSITrend({symbol:row.pair,span:'4H'}),
        customSort: (a,b) => (a['4H']-b['4H']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>6hour</div>,
        field: '6H',
        render: row => RSITrend({symbol:row.pair,span:'6H'}),
        customSort: (a,b) => (a['6H']-b['6H']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },      {
        title: <div style={{textAlign:'center'}}>RSI(14)<br/>1day</div>,
        field: '1D',
        render: row => RSITrend({symbol:row.pair,span:'1D'}),
        customSort: (a,b) => (a['1D']-b['1D']),
        width:100,
        cellStyle:{
          paddingTop:2,
          paddingBottom:0,
        }
      },
      {}
    ]}
    data={info.Result}
    options={{
      pageSize:10,
      toolbar:true,
      sorting:true,
      search:true,
      showTitle: false,
      paging:false,
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
      maxBodyHeight:800, 
      doubleHorizontalScroll:false,
    }}  
  />
  </>
  )
}

export default Dashboard;