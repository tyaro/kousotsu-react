import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Ranking from './Dashboard';
import {useState} from 'react'
import { Card, Typography } from '@material-ui/core'

const Dashboard = () => {
    const [state,setState] = useState(1)
    return (
        <>
        <Card style={{backgroundColor:'black'}}>
        <Typography style={{backgroundColor:'blue',padding:5}}>1日当たりの出来高平均(当日除外)</Typography>
        <Tabs  defaultIndex={state} onSelect={(index)=>setState(index)}>
        <TabPanel><Ranking span={'3D'} /></TabPanel>
        <TabPanel><Ranking span={'7D'} /></TabPanel>
        <TabPanel><Ranking span={'10D'} /></TabPanel>
        <TabPanel><Ranking span={'20D'} /></TabPanel>
        <TabPanel><Ranking span={'30D'} /></TabPanel>
        <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
        <Tab>3days</Tab>
        <Tab>7days</Tab>
        <Tab>10days</Tab>
        <Tab>20days</Tab>
        <Tab>30days</Tab>
        </TabList>
        </Tabs>
        </Card>
      </>

    )
}

export default Dashboard;
