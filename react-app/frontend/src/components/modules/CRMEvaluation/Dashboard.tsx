import { Typography } from '@material-ui/core';
import Trend from './Trend';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  return (
    <>
      <Tabs style={{padding:0}} defaultIndex={7}>
      <Typography style={{backgroundColor:'blue',paddingLeft:5}}>変動率中央値グラフ(お試し)</Typography>
      <Typography style={{backgroundColor:'#222222',paddingLeft:5}}>トレンド反転の検出に使えないか思案中</Typography>
      <TabPanel><Trend span={'MED01'} /></TabPanel>
      <TabPanel><Trend span={'MED05'} /></TabPanel>
      <TabPanel><Trend span={'MED10'} /></TabPanel>
      <TabPanel><Trend span={'MED15'} /></TabPanel>
      <TabPanel><Trend span={'MED30'} /></TabPanel>
      <TabPanel><Trend span={'MED60'} /></TabPanel>
      <TabPanel><Trend span={'MED240'} /></TabPanel>
      <TabPanel><Trend span={'MED360'} /></TabPanel>
      <TabPanel><Trend span={'MED480'} /></TabPanel>
      <TabPanel><Trend span={'MED720'} /></TabPanel>
      <TabPanel><Trend span={'MED1440'} /></TabPanel>
      <TabList style={{fontSize:'0.5em'}}>
      <Tab style={{padding:2}}>1min</Tab>
      <Tab style={{padding:2}}>5min</Tab>
      <Tab style={{padding:2}}>10min</Tab>
      <Tab style={{padding:2}}>15min</Tab>
      <Tab style={{padding:2}}>30min</Tab>
      <Tab style={{padding:2}}>1hour</Tab>
      <Tab style={{padding:2}}>4hour</Tab>
      <Tab style={{padding:2}}>6hour</Tab>
      <Tab style={{padding:2}}>8hour</Tab>
      <Tab style={{padding:2}}>12hour</Tab>
      <Tab style={{padding:2}}>24hour</Tab>
      </TabList>
      </Tabs>
    </>
  )
}

export default Dashboard;