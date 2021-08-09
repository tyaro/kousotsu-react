import React,{useState} from 'react';
import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import { Box, Typography } from '@material-ui/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import RSIDashboard from "../components/modules/RSI";
import BBBDashboard from "../components/modules/BBB";
import BBWRDashboard from "../components/modules/BBWR";
import ADRDashboard from "../components/modules/ADR";

type Props = {} & RouteComponentProps<{}>;


const TechnicalHeader = () => {

  return (
    <>
      <Tabs>
        <TabList>
          <Tab>RSI</Tab>
          <Tab>BB%B</Tab>
          <Tab>BBWR</Tab>
          <Tab>ADR</Tab>
        </TabList>
        <TabPanel>
          <RSIDashboard/>
        </TabPanel>
        <TabPanel>
          <BBBDashboard/>
        </TabPanel>
        <TabPanel>
          <BBWRDashboard/>
        </TabPanel>
        <TabPanel>
          <ADRDashboard/>
        </TabPanel>
      </Tabs>
    </>
  )
}


const TechnicalPage: React.FC = () => {
    return (
      <GenericTemplate title="テクニカル分析">
          <Box marginLeft='0px'>
        <TechnicalHeader />
          </Box>
      </GenericTemplate>
    );
  };
  
  export default TechnicalPage;