import React from 'react';
import MaterialTable from '@material-table/core';
import { slinePrice,slineBBB,slineBBWR } from '../atomos/sline';
import { linkBinanceFeature } from '../atomos/link';

export const Dashboard = (props:{data?:any}) => {
  return (
    <MaterialTable
    style={{
      width:800,
    }}
    columns={[
      { 
        title: 'Symbol',
        field: 'pair',
        render: row => linkBinanceFeature(row.pair.replace('USDT','')),
        type:'string',
        width:100,
      },
      {
        title: <div>Price</div>,
        field: 'Price',
        render: row => slinePrice(row.Price),
        width:120,
        customSort:(a,b)=>a.Price.VALUE-b.Price.VALUE,
      },
      {
        title: <div>BB%B - 50<br/>15min</div>,
        field: 'BBB_15M',
        render: row => slineBBB(row.BBB_15M),
        width:115,
        customSort:(a,b)=>a.BBB_15M.VALUE-b.BBB_15M.VALUE,
      },
      {
        title: <div>BB%B - 50<br/>1hour</div>,
        field: 'BBB_1H',
        render: row => slineBBB(row.BBB_1H),
        width:115,
        customSort:(a,b)=>a.BBB_1H.VALUE-b.BBB_1H.VALUE,
      },
      {
        title: <div>BB%B - 50<br/>4hour</div>,
        field: 'BBB_4H',
        render: row => slineBBB(row.BBB_4H),
        width:115,
        customSort:(a,b)=>a.BBB_4H.VALUE-b.BBB_4H.VALUE,
      },
      {
        title: <div>BB%B -50<br/>1day</div>,
        field: 'BBB_1D',
        render: row => slineBBB(row.BBB_1D),
        width:115,
        customSort:(a,b)=>a.BBB_1D.VALUE-b.BBB_1D.VALUE,
      },
    ]}
    data={props.data}
    options={{
      sorting:true,
      showTitle: false,
      paging:false,
      tableLayout:'fixed',
      rowStyle:{
        height:40,
      },
      maxBodyHeight:800,      
      headerStyle:{
        position:'sticky',top:0,
      },
      searchFieldAlignment:'left',
    }}  
  />
  )
}

export default Dashboard;