import { Typography } from '@material-ui/core';
import Trend from './Trend';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  return (
    <>
      <tr>
        <td>
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
        <TabList>
        <Tab>1min</Tab>
        <Tab>5min</Tab>
        <Tab>10min</Tab>
        <Tab>15min</Tab>
        <Tab>30min</Tab>
        <Tab>1hour</Tab>
        <Tab>4hour</Tab>
        <Tab>6hour</Tab>
        <Tab>8hour</Tab>
        <Tab>12hour</Tab>
        <Tab>24hour</Tab>
        </TabList>
        </Tabs>
        </td>
      </tr>
    </>
  )
}

export default Dashboard;