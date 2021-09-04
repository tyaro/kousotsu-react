import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import CRRank from '../components/modules/CRRanikingv2/List';
import TrendInfo from '../components/modules/TrendInfo';
import CRMedian from '../components/modules/CRRatio/CRRatio';
import CRInfo from '../components/atomos/CRInfoBTCALT';
import CRMTrend from '../components/modules/CRMEvaluation/Dashboard';
import TDRRank from '../components/modules/ADRRanking/List2';
import ADRRank from '../components/modules/ADRRanking/List';
import { Button, Card,Typography } from "@material-ui/core";
//import VRank from '../components/modules/VRanking/List';
import { useState } from "react";
const ReactGridLayout = require('react-grid-layout');
import VolRank1 from '../components/modules/Volume/List'
import VolRank2 from '../components/modules/Volume/List2'
import VolChart from '../components/modules/Volume/List3'
import VolChart2 from '../components/modules/Volume/List4'
import LSARatio from '../components/modules/LongShortRatio/TopTraderRatio';

const HomePage: React.FC = () => {
  const [ fixflag,setFixflag] = useState(true)
  const onClick =() =>{
    if(fixflag==false){setFixflag(true)}
    else{setFixflag(false)}
  }
  const layout = [
    { i: 'info1', x: 0, y: 0, w: 200, h: 7, static:fixflag,},
    { i: 'info2', x: 200, y: 0, w: 200, h: 7,  static:fixflag,},
    { i: 'info3', x: 400, y: 0, w: 200, h: 7, static:fixflag, },
    { i: 'CRMedian', x: 0, y: 7, w: 750, h: 15, static:fixflag, },
    { i: 'CRInfo', x: 0, y: 22, w: 750, h: 7, static:fixflag, },
    { i: 'CRRank', x: 0, y: 29, w: 450, h: 45, static:fixflag,},
    { i: 'TDRRank', x: 450, y: 29, w: 450, h: 45, static:fixflag,},
    //{ i: 'CRRank2', x: 450, y: 29, w: 450, h: 45, static:fixflag,},
    { i: 'VolRank1', x: 0, y: 74, w: 450, h: 42, static:fixflag,},
    { i: 'VolRank2', x: 450, y: 74, w: 450, h: 42, static:fixflag,},
    { i: 'VolChart', x: 750, y: 0, w: 500, h: 29, static:fixflag,},
    { i: 'VolChart2', x: 1250, y: 0, w: 500, h: 29, static:fixflag,},
    { i: 'LSRatio', x: 900, y: 29, w: 800, h: 50, static:fixflag,},
    { i: 'ADRRank', x: 0, y: 116, w: 500, h: 28, static:fixflag,},
    { i: 'CRMTrend', x: 500, y: 116, w: 600, h: 20, static:fixflag,},
  ];
  return (
    <GenericTemplate title={""}>
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={3840}
      //rows={8}
      rowHeight={10}
      width={3840}
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
    <div key ='CRRank'>
      <CRRank sort="asc"/>
    </div>
    <div key ='TDRRank'>
      <TDRRank/>
    </div>
    <div key='VolRank1'>    
    <VolRank1 />
    </div>
    <div key='VolRank2'>    
    <VolRank2 />
    </div>
    <div key='VolChart'>    
    <VolChart />
    </div>
    <div key='VolChart2'>    
    <VolChart2 />
    </div>
    <div key='LSRatio'>    
    <LSARatio />
    </div>
    <div key='ADRRank'>
      <ADRRank />
    </div>
    <Card key='CRMTrend' style={{backgroundColor:'#111111',padding:5}}>
      <CRMTrend />
    </Card>
    </ReactGridLayout>
    <Button onClick={() => {onClick()}}>Edit</Button>
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