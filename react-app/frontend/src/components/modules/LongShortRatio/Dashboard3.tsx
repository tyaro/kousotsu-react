import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RatioChart from './RatioChart3';
import {useState} from 'react'
import { Card, Typography } from '@material-ui/core'

const Dashboard = (p:{symbol:string}) => {
    const pair = p.symbol
    const [state,setState] = useState(1)
    return (
        <>
        <Card style={{backgroundColor:'black'}}>
        <Typography style={{backgroundColor:'blue',padding:5}}>トップトレーダーロングショートポジション比率</Typography>
        <Tabs  defaultIndex={state} onSelect={(index)=>setState(index)}>
        <TabPanel><RatioChart symbol={pair} span={'5m'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'15m'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'30m'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'1h'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'2h'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'4h'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'6h'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'12h'} /></TabPanel>
        <TabPanel><RatioChart symbol={pair} span={'1d'} /></TabPanel>
        <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
        <Tab>5min</Tab>
        <Tab>15min</Tab>
        <Tab>30min</Tab>
        <Tab>1hour</Tab>
        <Tab>2hour</Tab>
        <Tab>4hour</Tab>
        <Tab>6hour</Tab>
        <Tab>12hour</Tab>
        <Tab>1day</Tab>
        </TabList>
        </Tabs>
        </Card>
      </>

    )
}

export default Dashboard;
