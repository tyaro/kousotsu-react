import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography } from '@material-ui/core';
import { FormatAlignCenter } from '@material-ui/icons';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { relative } from 'path';

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
  const slineRSI_1M = (value:any)=>{
    var lastValue = value.slice(-1)[0]
    return(
      <Box width={100} height={40}>
        <div>{lastValue}</div>
        <Sparklines data={value}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
  }

  const sline = (value:any)=>{
    var lastValue = value.slice(-1)[0]
    return(
      <Box width={100} height={40}>
        <div >{lastValue}</div>
        <Sparklines data={value}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
  }

  console.log(info)
  return (
    <>
      <Typography>hage</Typography>
      <MaterialTable
        columns={[
          { 
            title: 'Symbol',
            field: 'pair',
            render: row => linkCol(row.pair.replace('USDT','')),
            type:'string',
            width:100,
          },
          {
            title: 'price',
            field: 'Price',
            render: row => slinePrice(row.Price),
            width:120,
            customSort:(a,b)=>a.Price.slice(-1)[0]-b.Price.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>1min</div>,
            field: 'RSI14_1M',
            render: row => slineRSI_1M(row.RSI14_1M),
            width:120,
            customSort:(a,b)=>a.RSI14_1M.slice(-1)[0]-b.RSI14_1M.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>15min</div>,
            field: 'RSI14_15M',
            render: row => slineRSI_1M(row.RSI14_15M),
            width:120,
            customSort:(a,b)=>a.RSI14_15M.slice(-1)[0]-b.RSI14_15M.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>1hour</div>,
            field: 'RSI14_1H',
            render: row => slineRSI_1M(row.RSI14_1H),
            width:120,
            customSort:(a,b)=>a.RSI14_1H.slice(-1)[0]-b.RSI14_1H.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>4hour</div>,
            field: 'RSI14_4H',
            render: row => slineRSI_1M(row.RSI14_4H),
            width:120,
            customSort:(a,b)=>a.RSI14_4H.slice(-1)[0]-b.RSI14_4H.slice(-1)[0],
          },
          {
            title: <div>RSI(14)<br/>1Day</div>,
            field: 'RSI14_1D',
            render: row => slineRSI_1M(row.RSI14_1D),
            width:120,
            customSort:(a,b)=>a.RSI14_1D.slice(-1)[0]-b.RSI14_1D.slice(-1)[0],
          },
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


const TestPage: React.FC = () => {
    return (
      <GenericTemplate title="開発中なう">
          <Box marginLeft='0px'>
        <DashBoard />
          </Box>
      </GenericTemplate>
    );
  };
  
  export default TestPage;