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
        title: <div>BB幅率<br/>15min</div>,
        field: 'BBWR_15M',
        render: row => slineBBWR(row.BBWR_15M),
        width:115,
        customSort:(a,b)=>a.BBWR_15M.VALUE-b.BBWR_15M.VALUE,
      },
      {
        title: <div>BB幅率<br/>1hour</div>,
        field: 'BBWR_1H',
        render: row => slineBBWR(row.BBWR_1H),
        width:115,
        customSort:(a,b)=>a.BBWR_1H.VALUE-b.BBWR_1H.VALUE,
      },
      {
        title: <div>BB幅率<br/>4hour</div>,
        field: 'BBWR_4H',
        render: row => slineBBWR(row.BBWR_4H),
        width:115,
        customSort:(a,b)=>a.BBWR_4H.VALUE-b.BBWR_4H.VALUE,
      },
      {
        title: <div>BB幅率<br/>1day</div>,
        field: 'BBWR_1D',
        render: row => slineBBWR(row.BBWR_1D),
        width:115,
        customSort:(a,b)=>a.BBWR_1D.VALUE-b.BBWR_1D.VALUE,
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