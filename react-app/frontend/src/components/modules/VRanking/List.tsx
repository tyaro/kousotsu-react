import { Typography } from '@material-ui/core';
import Ranking from './Dashboard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  return (
    <>
        <Tabs style={{padding:0}} defaultIndex={0}>
        <Typography style={{backgroundColor:'blue',paddingLeft:5}}>出来高ランキング</Typography>
        <TabPanel><Ranking span={'15MIN'} /></TabPanel>
        <TabPanel><Ranking span={'1HOUR'} /></TabPanel>
        <TabPanel><Ranking span={'4HOUR'} /></TabPanel>
        <TabPanel><Ranking span={'6HOUR'} /></TabPanel>
        <TabPanel><Ranking span={'1DAY'} /></TabPanel>
        <TabList style={{fontSize:'0.5em'}}>
        <Tab>15min</Tab>
        <Tab>1hour</Tab>
        <Tab disabled={true}>4hour</Tab>
        <Tab disabled={true}>6hour</Tab>
        <Tab>1day</Tab>
        </TabList>
        </Tabs>
    </>
  )
}

export default Dashboard;