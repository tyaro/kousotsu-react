import { Typography,Card } from '@material-ui/core';
import Ranking from './Dashboard2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  return (
    <>
        <Card style={{backgroundColor:'black'}}>
        <Tabs  defaultIndex={3}>
        <Typography style={{backgroundColor:'blue',paddingLeft:5}}>ボラティリティ平均(%)</Typography>
        <TabPanel><Ranking span={'ARR5'} /></TabPanel>
        <TabPanel><Ranking span={'ARR10'} /></TabPanel>
        <TabPanel><Ranking span={'ARR20'} /></TabPanel>
        <TabPanel><Ranking span={'ARRE5'} /></TabPanel>
        <TabPanel><Ranking span={'ARRE10'} /></TabPanel>
        <TabPanel><Ranking span={'ARRE20'} /></TabPanel>
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