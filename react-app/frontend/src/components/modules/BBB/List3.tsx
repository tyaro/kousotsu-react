import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PChart from './PieChart';
import {useState} from 'react'
import { Card, Typography } from '@material-ui/core'

const Dashboard = () => {
    const [state,setState] = useState(1)
    return (
        <>
        <Card style={{backgroundColor:'black'}}>
        <Typography style={{backgroundColor:'blue',padding:5}}>リアルタイム出来高占有率</Typography>
        <Tabs  defaultIndex={state} onSelect={(index)=>setState(index)}>
        <TabPanel><PChart span={'15M'} /></TabPanel>
        <TabPanel><PChart span={'30M'} /></TabPanel>
        <TabPanel><PChart span={'1H'} /></TabPanel>
        <TabPanel><PChart span={'4H'} /></TabPanel>
        <TabPanel><PChart span={'6H'} /></TabPanel>
        <TabPanel><PChart span={'8H'} /></TabPanel>
        <TabPanel><PChart span={'12H'} /></TabPanel>
        <TabPanel><PChart span={'1D'} /></TabPanel>
        <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
        <Tab style={{padding:2}}>0-15M</Tab>
        <Tab style={{padding:2}}>15-30M</Tab>
        <Tab style={{padding:2}}>45-60M</Tab>
        <Tab style={{padding:2}}>約4H</Tab>
        <Tab style={{padding:2}}>約6H</Tab>
        <Tab style={{padding:2}}>約8H</Tab>
        <Tab style={{padding:2}}>約12H</Tab>
        <Tab style={{padding:2}}>約24H</Tab>
        </TabList>
        </Tabs>
        </Card>
      </>

    )
}

export default Dashboard;
