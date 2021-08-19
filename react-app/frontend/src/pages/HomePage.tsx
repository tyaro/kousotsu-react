import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import CRRank from '../components/modules/CRRanikingv2/List';
import TrendInfo from '../components/modules/TrendInfo';
import CRMedian from '../components/modules/CRRatio/CRRatio';
import CRInfo from '../components/atomos/CRInfoBTCALT';
import CRMTrend from '../components/modules/CRMEvaluation/Dashboard';
import TDRRank from '../components/modules/ADRRanking/Dashboard';
import ADRRank from '../components/modules/ADRRanking/List';
import { Button, Card,Typography } from "@material-ui/core";
import VRank from '../components/modules/VRanking/List';
import { useState } from "react";
const ReactGridLayout = require('react-grid-layout');

const HomePage: React.FC = () => {
  const [ fixflag,setFixflag] = useState(false)
  const onClick =() =>{
    if(fixflag==false){setFixflag(true)}
    else{setFixflag(false)}
  }
  const layout = [
    { i: 'info1', x: 0, y: 0, w: 5, h: 6, static:fixflag,},
    { i: 'info2', x: 5, y: 0, w: 5, h: 6,  static:fixflag,},
    { i: 'info3', x: 10, y: 0, w: 5, h: 6, static:fixflag, },
    { i: 'CRMedian', x: 0, y: 6, w: 20, h: 15, static:fixflag, },
    { i: 'CRInfo', x: 0, y: 21, w: 20, h: 7, static:fixflag, },
    { i: 'VRank', x: 0, y: 59, w: 23, h: 35, static:fixflag,},
    { i: 'TDRRank', x: 20, y: 0, w: 10, h: 28, static:fixflag,},
    { i: 'ADRRank', x: 30, y: 0, w: 14, h: 28, static:fixflag,},
    { i: 'CRRank', x: 0, y: 28, w: 14, h: 32, static:fixflag,},
    { i: 'CRRank2', x: 14, y: 28, w: 14, h: 32, static:fixflag,},
    { i: 'CRMTrend', x: 28, y: 28, w: 15, h: 18, static:fixflag,},
  ];
  return (
    <GenericTemplate title={""}>
      <Button onClick={() => {onClick()}}>Fix</Button>
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={100}
      rows={8}
      rowHeight={10}
      width={3600}
      height={800}
    >
    <Card key='info1' style={{backgroundColor:'#111111',padding:5}}>
      <TrendInfo symbol={'BTCUSDT'}/>
    </Card>
    <Card key='info2' style={{backgroundColor:'#111111',padding:5}}>
      <TrendInfo symbol={'ETHUSDT'}/>
    </Card>
    <Card key='info3' style={{backgroundColor:'#111111',padding:5}}>
      <TrendInfo symbol={'ALICEUSDT'}/>
    </Card>
    <Card key='CRMedian' style={{backgroundColor:'#111111',padding:5}}>
      <CRMedian />
    </Card>
    <Card key='CRInfo' style={{backgroundColor:'#111111',padding:5}}>
      <CRInfo symbol={'BTCUSDT'} />
    </Card>
    <Card key='VRank' style={{backgroundColor:'#111111',padding:5}}>
    <VRank />
    </Card>
    <Card key='CRRank' style={{backgroundColor:'#111111',padding:5}}>
      <CRRank sort="asc"/>
    </Card>
    <Card key='CRRank2' style={{backgroundColor:'#111111',padding:5}}>
      <CRRank sort="desc"/>
    </Card>
    <Card key='TDRRank' style={{backgroundColor:'#111111',padding:5}}>
      <TDRRank />
    </Card>
    <Card key='ADRRank' style={{backgroundColor:'#111111',padding:5}}>
      <ADRRank />
    </Card>
    <Card key='CRMTrend' style={{backgroundColor:'#111111',padding:5}}>
      <CRMTrend />
    </Card>
    </ReactGridLayout>
    <br/><Typography>
      モバイル版は<a href='https://kousotsu-py.info/mobile' style={{color:"#FFFFFF"}}>こちら</a>
      </Typography>
    </GenericTemplate>
  );
};

export default HomePage;
/*
<GenericTemplate title={""}>
<tr>
    <td>
      <tr>
        <td><TrendInfo symbol={'BTCUSDT'}/></td>
        <td><TrendInfo symbol={'BTCDOMUSDT'}/></td>
        <td><TrendInfo symbol={'ETHUSDT'}/></td>
      </tr>
      <tr >
        <td colSpan={3}>
        <CRMedian />
        <CRInfo symbol={'BTCUSDT'} />
        </td>
      </tr>
    </td>
    <td><VRank /></td>
    <td rowSpan={1}>
    <CRMTrend />
    </td>
</tr>
<tr>
<td><CRRank /></td>
<td><ADRRank /></td>
</tr>
<br/><Typography>
モバイル版は<a href='https://kousotsu-py.info/mobile' style={{color:"#FFFFFF"}}>こちら</a>
</Typography>
</GenericTemplate>
*/