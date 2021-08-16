import { Typography } from '@material-ui/core';
import Ranking from './Dashboard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = (props:{sort:any}) => {
  return (
    <>
        <Tabs style={{padding:0}} defaultIndex={3}>
        <Typography style={{backgroundColor:'blue',paddingLeft:5}}>変動率ランキング</Typography>
        <TabPanel><Ranking span={'1M'} sort={props.sort} /></TabPanel>
        <TabPanel><Ranking span={'5M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'10M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'15M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'30M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'60M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'240M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'360M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'480M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'720M'} sort={props.sort}/></TabPanel>
        <TabPanel><Ranking span={'1440M'} sort={props.sort}/></TabPanel>
        <TabList style={{fontSize:'0.5em'}} >
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
        <Tab>1day</Tab>
        </TabList>
        </Tabs>
    </>
  )
}

export default Dashboard;