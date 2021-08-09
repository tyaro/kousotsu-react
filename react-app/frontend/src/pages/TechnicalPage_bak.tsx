import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import { Box, Typography } from '@material-ui/core';
import { Sparklines, SparklinesLine } from 'react-sparklines';

type Props = {} & RouteComponentProps<{}>;


const DashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/Technical'
    ,{refreshInterval:30000}
    )
  const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + value + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }
  const slinePrice = (value:any)=>{
    var lastPrice = value.slice(-1)[0]
    return(
      <Box width={100} height={40}>
        <div>${lastPrice}</div>
        <Sparklines data={value}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
  }
  const slineBBB = (value:any)=>{
    var lastValue = Math.round(value.slice(-1)[0]*100)
    var c = '#FFFFFF'
    if (lastValue < 0){c = '#E35561'}
    if (lastValue > 100){c = '#5CC686'}
    return(
      <Box width={100} height={40}>
        <div style={{color:c}}>{lastValue}%</div>
        <Sparklines data={value}>
          <SparklinesLine color={c}/>
        </Sparklines>
      </Box>
    )
  }
  const slineBBWR = (value:any)=>{
    var lastValue = value.slice(-1)[0]
    return(
      <Box width={100} height={40}>
        <div>{lastValue}%</div>
        <Sparklines data={value}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
  }
  const percentDataStyle = (params:Number) => {
    var c = '#FFFFFF'
    if (params < 0){c = '#E35561'}
    if (params > 0){c = '#5CC686'}
    return (
      <div style={{color:c}}>{params}%</div>
    )
  }
  const slineRSI_1M = (value:any)=>{
    var lastValue = value.slice(-1)[0]
    var c = '#FFFFFF'
    if (lastValue < 30){c = '#E35561'}
    if (lastValue > 70){c = '#5CC686'}
    return(
      <Box width={100} height={40}>
        <div style={{color:c}}>{lastValue}</div>
        <Sparklines data={value}>
          <SparklinesLine color={c}/>
        </Sparklines>
      </Box>
    )
  }
  //console.log(info)
  return (
    <>
      <Typography>価格のトレンドは1分周期の30分間トレンド</Typography>
      <MaterialTable
        style={{
          width:2100,
        }}
        columns={[
          { 
            title: 'Symbol',
            field: 'pair',
            render: row => linkCol(row.pair.replace('USDT','')),
            type:'string',
            width:100,
          },
          {
            title: <div>Price</div>,
            field: 'Price',
            render: row => slinePrice(row.Price),
            width:120,
            customSort:(a,b)=>a.Price.slice(-1)[0]-b.Price.slice(-1)[0],
          },
          /*
          {
            title: <div>RSI(14)</div>,
            field: 'TEST',
            render: row => RadarChart(row),
            width:120,
          },
          */
          {
            title: <div>RSI(14)<br/>1min</div>,
            field: 'RSI14_1M',
            render: row => slineRSI_1M(row.RSI14_1M),
            width:115,
            customSort:(a,b)=>a.RSI14_1M.slice(-1)[0]-b.RSI14_1M.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>15min</div>,
            field: 'RSI14_15M',
            render: row => slineRSI_1M(row.RSI14_15M),
            width:115,
            customSort:(a,b)=>a.RSI14_15M.slice(-1)[0]-b.RSI14_15M.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>1hour</div>,
            field: 'RSI14_1H',
            render: row => slineRSI_1M(row.RSI14_1H),
            width:115,
            customSort:(a,b)=>a.RSI14_1H.slice(-1)[0]-b.RSI14_1H.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>4hour</div>,
            field: 'RSI14_4H',
            render: row => slineRSI_1M(row.RSI14_4H),
            width:115,
            customSort:(a,b)=>a.RSI14_4H.slice(-1)[0]-b.RSI14_4H.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>1day</div>,
            field: 'RSI14_1D',
            render: row => slineRSI_1M(row.RSI14_1D),
            width:115,
            customSort:(a,b)=>a.RSI14_1D.slice(-1)[0]-b.RSI14_1D.slice(-1)[0],
          },
          {
            title: <div>ATR<br/>Rate<br/>1day</div>,
            field: 'ARR_1D',
            render: row => percentDataStyle(row.ARR_1D['ARR0']),
            width:80,
            customSort:(a,b)=>a.ARR_1D['ARR0']-b.ARR_1D['ARR0'],
          },
          {
            title: <div>ADR(5)<br/>Rate<br/>1day</div>,
            field: 'ARR5_1D',
            render: row => percentDataStyle(row.ARR_1D['ARR5']),
            width:80,
            customSort:(a,b)=>a.ARR_1D['ARR5']-b.ARR_1D['ARR5'],
          },
          {
            title: <div>ADR(10)<br/>Rate<br/>1day</div>,
            field: 'ARR10_1D',
            render: row => percentDataStyle(row.ARR_1D['ARR10']),
            width:80,
            customSort:(a,b)=>a.ARR_1D['ARR10']-b.ARR_1D['ARR10'],
          },
          {
            title: <div>ADR(20)<br/>Rate<br/>1day</div>,
            field: 'ARR20_1D',
            render: row => percentDataStyle(row.ARR_1D['ARR20']),
            width:80,
            customSort:(a,b)=>a.ARR_1D['ARR20']-b.ARR_1D['ARR20'],
          },
          {
            title: <div>BB%B<br/>15min</div>,
            field: 'BB_15M',
            render: row => slineBBB(row.BB_15M['BB2']['BBB']),
            width:115,
            customSort:(a,b)=>a.BB_15M['BB2']['BBB'].slice(-1)[0]-b.BB_15M['BB2']['BBB'].slice(-1)[0],
          },
          {
            title: <div>BB%B<br/>1hour</div>,
            field: 'BB_1H',
            render: row => slineBBB(row.BB_1H['BB2']['BBB']),
            width:115,
            customSort:(a,b)=>a.BB_1H['BB2']['BBB'].slice(-1)[0]-b.BB_1H['BB2']['BBB'].slice(-1)[0],
          },
          {
            title: <div>BB%B<br/>4hour</div>,
            field: 'BB_4H',
            render: row => slineBBB(row.BB_4H['BB2']['BBB']),
            width:115,
            customSort:(a,b)=>a.BB_4H['BB2']['BBB'].slice(-1)[0]-b.BB_4H['BB2']['BBB'].slice(-1)[0],
          },
          {
            title: <div>BB%B<br/>1day</div>,
            field: 'BB_1D',
            render: row => slineBBB(row.BB_1D['BB2']['BBB']),
            width:115,
            customSort:(a,b)=>a.BB_1D['BB2']['BBB'].slice(-1)[0]-b.BB_1D['BB2']['BBB'].slice(-1)[0],
          },
          {
            title: <div>BB幅率<br/>15min</div>,
            field: 'BBWR_15M',
            render: row => slineBBWR(row.BB_15M['BBWR']),
            width:115,
            customSort:(a,b)=>a.BB_15M['BBWR'].slice(-1)[0]-b.BB_15M['BBWR'].slice(-1)[0],
          },
          {
            title: <div>BB幅率<br/>1hour</div>,
            field: 'BBWR_1H',
            render: row => slineBBWR(row.BB_1H['BBWR']),
            width:115,
            customSort:(a,b)=>a.BB_1H['BBWR'].slice(-1)[0]-b.BB_1H['BBWR'].slice(-1)[0],
          },
          {
            title: <div>BB幅率<br/>4hour</div>,
            field: 'BBWR_4H',
            render: row => slineBBWR(row.BB_4H['BBWR']),
            width:115,
            customSort:(a,b)=>a.BB_4H['BBWR'].slice(-1)[0]-b.BB_4H['BBWR'].slice(-1)[0],
          },
          {
            title: <div>BB幅率<br/>1day</div>,
            field: 'BBWR_1D',
            render: row => slineBBWR(row.BB_1D['BBWR']),
            width:115,
            customSort:(a,b)=>a.BB_1D['BBWR'].slice(-1)[0]-b.BB_1D['BBWR'].slice(-1)[0],
          },
          {},
        ]}
        data={info}
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
    </>
  )
}


const TechnicalPage: React.FC = () => {
    return (
      <GenericTemplate title="テクニカル分析">
          <Box marginLeft='0px'>
        <DashBoard />
          </Box>
      </GenericTemplate>
    );
  };
  
  export default TechnicalPage;