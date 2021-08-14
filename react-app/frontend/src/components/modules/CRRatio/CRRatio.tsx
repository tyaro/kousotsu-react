import { Card, Typography } from '@material-ui/core';
import PV from './CRRatioData';
import AVG from './CRRatioData2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
    return (
        <>
            <Typography style={{fontSize:'1.5em',whiteSpace:'nowrap'}}>
                <span style={{color:'#5CC686',whiteSpace:'nowrap'}}>UP</span>/
                <span style={{color:'#E35561'}}>Down</span>
                 先物銘柄比率(BTCDOMUSDTは除外)
            </Typography>
            <PV />
            <Tabs style={{fontSize:'0.5em',padding:0}} defaultIndex={5}>
            <TabPanel><AVG MA={'SMA5'} /></TabPanel>
            <TabPanel><AVG MA={'SMA15'} /></TabPanel>
            <TabPanel><AVG MA={'SMA30'} /></TabPanel>
            <TabPanel><AVG MA={'SMA60'} /></TabPanel>
            <TabPanel><AVG MA={'EMA5'} /></TabPanel>
            <TabPanel><AVG MA={'EMA15'} /></TabPanel>
            <TabPanel><AVG MA={'EMA30'} /></TabPanel>
            <TabPanel><AVG MA={'EMA60'} /></TabPanel>
            <TabList>
            <Tab>SMA(5)</Tab>
            <Tab>SMA(15)</Tab>
            <Tab>SMA(30)</Tab>
            <Tab>SMA(60)</Tab>
            <Tab>EMA(5)</Tab>
            <Tab>EMA(15)</Tab>
            <Tab>EMA(30)</Tab>
            <Tab>EMA(60)</Tab>
            </TabList>
            </Tabs>
        </>
    )
}

export default Dashboard;