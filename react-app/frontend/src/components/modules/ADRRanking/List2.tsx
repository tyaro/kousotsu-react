import { Typography,Card } from '@material-ui/core';
import Ranking from './Dashboard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  return (
    <>
    <Card style={{backgroundColor:'black'}}>
        <Tabs  defaultIndex={3}>
        <Typography style={{backgroundColor:'blue',paddingLeft:5}}>ボラティリティランキング(9時〜)</Typography>
        <TabPanel><Ranking method={'ARR5'} /></TabPanel>
        <TabPanel><Ranking method={'ARR10'} /></TabPanel>
        <TabPanel><Ranking method={'ARR20'} /></TabPanel>
        <TabPanel><Ranking method={'ARRE5'} /></TabPanel>
        <TabPanel><Ranking method={'ARRE10'} /></TabPanel>
        <TabPanel><Ranking method={'ARRE20'} /></TabPanel>
        <TabList style={{fontSize:'0.5em'}}> 
        <Tab>ADR(5)</Tab>
        <Tab>ADR(10)</Tab>
        <Tab>ADR(20)</Tab>
        <Tab>ADRE(5)</Tab>
        <Tab>ADRE(10)</Tab>
        <Tab>ADRE(20)</Tab>
        </TabList>
        </Tabs>
      </Card>
    </>
  )
}

export default Dashboard;