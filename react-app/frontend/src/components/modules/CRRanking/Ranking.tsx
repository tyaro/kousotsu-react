import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Card } from '@material-ui/core';
import Ranking from './List';
import { Typography } from '@material-ui/core';

const Dashboard = () => {
  return (
    <>
    <Card style={{padding:5,backgroundColor:'#111111',width:730}}>
        <Typography style={{padding:5,fontSize:'1.5em'}}>変動率 Top10</Typography>
        <Tabs style={{padding:5}} defaultIndex={1}>
        <TabPanel><Ranking span={'1M'} /></TabPanel>
        <TabPanel><Ranking span={'5M'} /></TabPanel>
        <TabPanel><Ranking span={'10M'} /></TabPanel>
        <TabPanel><Ranking span={'15M'} /></TabPanel>
        <TabPanel><Ranking span={'30M'} /></TabPanel>
        <TabPanel><Ranking span={'1H'} /></TabPanel>
        <TabPanel><Ranking span={'4H'} /></TabPanel>
        <TabPanel><Ranking span={'6H'} /></TabPanel>
        <TabPanel><Ranking span={'8H'} /></TabPanel>
        <TabPanel><Ranking span={'12H'} /></TabPanel>
        <TabPanel><Ranking span={'24H'} /></TabPanel>
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
    </Card>
    </>
  )
}

export default Dashboard;