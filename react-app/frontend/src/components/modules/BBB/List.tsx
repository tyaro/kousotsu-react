import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Ranking from './Dashboard';
import {useState} from 'react'
import { Card, Typography } from '@material-ui/core'

const Dashboard = () => {
    const [state,setState] = useState(1)
    return (
        <>
        <Card style={{backgroundColor:'black'}}>
        <Typography style={{backgroundColor:'blue',padding:5}}>リアルタイム出来高</Typography>
        <Tabs  defaultIndex={state} onSelect={(index)=>setState(index)}>
        <TabPanel><Ranking span={'15M'} /></TabPanel>
        <TabPanel><Ranking span={'30M'} /></TabPanel>
        <TabPanel><Ranking span={'1H'} /></TabPanel>
        <TabPanel><Ranking span={'4H'} /></TabPanel>
        <TabPanel><Ranking span={'6H'} /></TabPanel>
        <TabPanel><Ranking span={'8H'} /></TabPanel>
        <TabPanel><Ranking span={'12H'} /></TabPanel>
        <TabPanel><Ranking span={'1D'} /></TabPanel>
        <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
        <Tab>0-15M</Tab>
        <Tab>15-30M</Tab>
        <Tab>45-60M</Tab>
        <Tab>約4H</Tab>
        <Tab>約6H</Tab>
        <Tab>約8H</Tab>
        <Tab>約12H</Tab>
        <Tab>約24H</Tab>
        </TabList>
        </Tabs>
        </Card>
      </>

    )
}

export default Dashboard;
