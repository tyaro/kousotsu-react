import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PChart from './PieChart';
import {useState} from 'react'
import { Card, Typography } from '@material-ui/core'

const Dashboard = () => {
    const [state,setState] = useState(1)
    return (
        <>
        <Card style={{backgroundColor:'black'}}>
        <Typography style={{backgroundColor:'blue',padding:5}}>平均出来高占有率</Typography>
        <Tabs  defaultIndex={state} onSelect={(index)=>setState(index)}>
        <TabPanel><PChart span={'3D'} /></TabPanel>
        <TabPanel><PChart span={'7D'} /></TabPanel>
        <TabPanel><PChart span={'10D'} /></TabPanel>
        <TabPanel><PChart span={'20D'} /></TabPanel>
        <TabPanel><PChart span={'30D'} /></TabPanel>
        <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
        <Tab style={{padding:2}}>3days</Tab>
        <Tab style={{padding:2}}>7days</Tab>
        <Tab style={{padding:2}}>10days</Tab>
        <Tab style={{padding:2}}>20days</Tab>
        <Tab style={{padding:2}}>30days</Tab>
        </TabList>
        </Tabs>
        </Card>
      </>

    )
}

export default Dashboard;
