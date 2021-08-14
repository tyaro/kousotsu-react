import {  Typography } from '@material-ui/core';
import {  SparklinePriceInfo } from '../atomos/sline';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = (props:{symbol?:string}) => {
  var pair = props.symbol
  return (
      <>
        <Typography>{pair}</Typography>
        <Tabs style={{fontSize:'0.5em'}} defaultIndex={5}>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'1M'} /></TabPanel>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'15M'} /></TabPanel>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'1H'} /></TabPanel>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'4H'} /></TabPanel>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'6H'} /></TabPanel>
        <TabPanel><SparklinePriceInfo symbol={pair} span={'1D'} /></TabPanel>
        <TabList style={{padding:0}}>
        <Tab style={{padding:2}}>1M</Tab>
        <Tab style={{padding:2}}>15M</Tab>
        <Tab style={{padding:2}}>1H</Tab>
        <Tab style={{padding:2}}>4H</Tab>
        <Tab style={{padding:2}}>6H</Tab>
        <Tab style={{padding:2}}>1D</Tab>
        </TabList>
        </Tabs>
    </>
  )
}
/*
    <Card style={{padding:5,backgroundColor:'#111111'}}>
    </Card>
*/
export default Dashboard;