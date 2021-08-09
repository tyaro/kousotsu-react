import React from 'react';
import MaterialTable from '@material-table/core';
import { slinePrice,slineRSI } from '../atomos/sline';
import { linkBinanceFeature } from '../atomos/link';


export const Dashboard = (props:{data?:any}) => {
    return (
      <MaterialTable
      style={{
        width:1000,
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
          title: <div>RSI(14)<br/>1min</div>,
          field: 'RSI14_1M',
          render: row => slineRSI(row.RSI14_1M),
          width:115,
          customSort:(a,b)=>a.RSI14_1M.VALUE-b.RSI14_1M.VALUE,
        },
        {
          title: <div>RSI(14)<br/>15min</div>,
          field: 'RSI14_15M',
          render: row => slineRSI(row.RSI14_15M),
          width:115,
          customSort:(a,b)=>a.RSI14_15M.VALUE-b.RSI14_15M.VALUE,
        },
        {
          title: <div>RSI(14)<br/>1hour</div>,
          field: 'RSI14_1H',
          render: row => slineRSI(row.RSI14_1H),
          width:115,
          customSort:(a,b)=>a.RSI14_1H.VALUE-b.RSI14_1H.VALUE,
        },
        {
          title: <div>RSI(14)<br/>4hour</div>,
          field: 'RSI14_4H',
          render: row => slineRSI(row.RSI14_4H),
          width:115,
          customSort:(a,b)=>a.RSI14_4H.VALUE-b.RSI14_4H.VALUE,
        },
        {
          title: <div>RSI(14)<br/>1day</div>,
          field: 'RSI14_1D',
          render: row => slineRSI(row.RSI14_1D),
          width:115,
          customSort:(a,b)=>a.RSI14_1D.VALUE-b.RSI14_1D.VALUE,
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