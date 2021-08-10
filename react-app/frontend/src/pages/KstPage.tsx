import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';
import { FormatAlignCenter } from '@material-ui/icons';

type Props = {} & RouteComponentProps<{}>;

function orgRound(value:number, base:number) {
  return Math.round(value * base) / base;
}

const DashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/kousotsutan'
    ,{refreshInterval:3000}
    )
  
  const percentDataStyle = (params:number) => {
    var c = '#FFFFFF'
    if (params < 0){c = '#E35561'}
    if (params > 0){c = '#5CC686'}
    var value = orgRound(params,10)
    return (
      <div style={{color:c}}>{value}%</div>
    )
  }

  const ratingCol = (value:number) =>{
    return (
      <div>
      <Rating name="read-only" value={value} size='small' readOnly />
      </div>
    )
  }

  const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + value + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }
  
  return(
    <MaterialTable 
    style={{
      width:2000,
    }}
    columns={[
      { 
        title: 'Symbol',
        field: 'symbol',
        render: row => linkCol(row.symbol.replace('USDT','')),
        type:'string',
        width:80,
      },
      {
        title: '判断',
        field: 'Judgement',
        hidden:false,
        width:50,
      },
      {
        title: '評価',
        field: 'spoint',
        hidden:true,
      },
      {
        title: '評価',
        field: 'lpoint',
        hidden:true,
      },
      {
        title: '評価',
        field: 'point',
        render: row => Number(row.lpoint)+Number(row.spoint),
        hidden:true,
      },
      {
        title: '評価',
        field: 'value',
        render: row => ratingCol(Number(row.lpoint)+Number(row.spoint)),
        width:120,
        customSort:(a,b)=>(a.spoint+a.lpoint)-(b.spoint+b.lpoint)
      },
      { 
        title: 'Price', 
        field: 'price',
        render: row => ('$'+row.price),
        width:80,
        customSort:(a,b)=>a.price-b.price
      },
      { 
        title: <div>適正価格<br/>本日<br/>9時〜</div>, 
        field: 'kousotsuPrice1',
        render: row => ('$'+row.kousotsuPrice1),
        width:80,
        customSort:(a,b)=>a.kousotsuPrice1-b.kousotsuPrice1
      },
      { 
        title: <div>適正価格<br/>明日<br/>9時〜</div>, 
        field: 'kousotsuPrice2',
        render: row => ('$'+row.kousotsuPrice2),
        width:80,
        customSort:(a,b)=>a.kousotsuPrice2-b.kousotsuPrice2
      },
      { 
        title: <div>適正価格<br/>明後日<br/>9時〜</div>, 
        field: 'kousotsuPrice3',
        render: row => ('$'+row.kousotsuPrice3),
        width:80,
        customSort:(a,b)=>a.kousotsuPrice3-b.kousotsuPrice3
      },
      { 
        title: <div>適正価格<br/>乖離率</div>, 
        field: 'kousotsuDR',
        render: row => (
          percentDataStyle(Number(row.price)/Number(row.kousotsuPrice1)*100-100)),
          width:70,
          customSort:(a,b)=>(a.price/a.kousotsuPrice1)-(b.price/b.kousotsuPrice1)
      },
      { 
        title: <div>ロング<br/>エントリ<br/>推奨価格</div>, 
        field: 'EntryPointLong',
        render: row => ('$'+row.EntryPointLong),
        width:80,
        customSort:(a,b)=>a.EntryPointLong-b.EntryPointLong
      },
      { 
        title: <div>ショート<br/>エントリ<br/>推奨価格</div>, 
        field: 'EntryPointShort',
        render: row => ('$'+row.EntryPointShort),
        width:80,
        customSort:(a,b)=>a.EntryPointShort-b.EntryPointShort
      },
      { 
        title: <div>3〜2日前<br/>高値安値<br/>推移<br/>(5~4日前)</div>, 
        field: 'TREND',
        width:80,
      },
      { 
        title: <div>EMA200<br/>乖離率</div>, 
        field: 'DREMA200',
        render: row => (percentDataStyle(row.DREMA200)),
        width:70,
        customSort:(a,b)=>a.DREMA200-b.DREMA200
      },
      { 
        title: <div>EMA100<br/>乖離率</div>, 
        field: 'DREMA100',
        render: row => (percentDataStyle(row.DREMA100)),
        width:70,
        customSort:(a,b)=>a.DREMA100-b.DREMA100
      },
      { 
        title: <div>EMA50<br/>乖離率</div>, 
        field: 'DREMA50',
        render: row => (percentDataStyle(row.DREMA50)),
        width:70,
        customSort:(a,b)=>a.DREMA50-b.DREMA50
      },
      { 
        title: <div>EMA200<br/>乖離率<br/>BTC建て</div>, 
        field: 'DREMA200BTC',
        render: row => (percentDataStyle(row.DREMA200BTC)),
        width:70,
        customSort:(a,b)=>a.DREMA200BTC-b.DREMA200BTC
      },
      { 
        title: <div>RSI(14)<br/>6時間足</div>, 
        field: 'RSI14_1D',
        width:70,
        customSort:(a,b)=>a.RSI14_1D-b.RSI14_1D
      },
      { 
        title: <div>BTC<br/>連動率<br/>上昇</div>, 
        field: 'BTCFRUp',
        render: row => (percentDataStyle(row.BTCFRUp)),
        width:70,
        customSort:(a,b)=>a.BTCFRUp-b.BTCFRUp
      },
      { 
        title: <div>BTC<br/>連動率<br/>下落</div>, 
        field: 'BTCFRDown',
        render: row => (percentDataStyle(row.BTCFRDown)),
        width:70,
        customSort:(a,b)=>a.BTCFRDown-b.BTCFRDown
      },
      { 
        title: <div>変動率<br/>9時〜</div>, 
        field: 'ChangeRate',
        render: row => (percentDataStyle(row.ChangeRate)),
        width:70,
        customSort:(a,b)=>a.ChangeRate-b.ChangeRate
      },

    ]}
    data={info}
    options={{
      showTitle: false,
      paging:false,
      rowStyle:{
        height:10,
        whiteSpace:'nowrap',
        fontSize:'1em'
      },
      tableLayout:'fixed',
      columnResizable:false,
      maxBodyHeight:800,
      headerStyle:{
        position:'sticky',top:0,
        whiteSpace:'nowrap'
      },
      searchFieldAlignment:'left',
    }}
  />
  )
}
const KstPage: React.FC = () => {
  return (
    <GenericTemplate title="高卒たんメソッド V2">
        <Box marginLeft='0px'>
      <DashBoard />
        </Box>
    </GenericTemplate>
  );
};

export default KstPage;