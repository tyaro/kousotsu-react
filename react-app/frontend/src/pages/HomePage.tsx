import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import CRRank from '../components/modules/CRRanikingv2/List';
import TrendInfo from '../components/modules/TrendInfo';
import CRMedian from '../components/modules/CRRatio/CRRatio';
import CRInfo from '../components/atomos/CRInfoBTCALT';
import CRMTrend from '../components/modules/CRMEvaluation/Dashboard';
import TDRRank from '../components/modules/ADRRanking/Dashboard';
import ADRRank from '../components/modules/ADRRanking/List';
import { Card,Typography } from "@material-ui/core";
import VRank from '../components/modules/VRanking/List';
const ReactGridLayout = require('react-grid-layout');

const HomePage: React.FC = () => {
  const layout = [
    { i: 'info1', x: 0, y: 0, w: 5, h: 6, },
    { i: 'info2', x: 5, y: 0, w: 5, h: 6, },
    { i: 'info3', x: 10, y: 0, w: 5, h: 6 },
    { i: 'CRMedian', x: 0, y: 5, w: 20, h: 15 },
    { i: 'CRInfo', x: 0, y: 21, w: 20, h: 7 },
    { i: 'VRank', x: 0, y: 59, w: 23, h: 35},
    { i: 'TDRRank', x: 20, y: 0, w: 10, h: 28},
    { i: 'ADRRank', x: 30, y: 0, w: 14, h: 28},
    { i: 'CRRank', x: 0, y: 27, w: 14, h: 32},
    { i: 'CRRank2', x: 14, y: 27, w: 14, h: 32},
    { i: 'CRMTrend', x: 37, y: 59, w: 15, h: 18},
  ];
  return (
    <GenericTemplate title={""}>
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