import useSWR from 'swr';
import { Box,Typography } from '@material-ui/core';
import CRURankList from '../block/CRRankListUpper';
import CRLRankList from '../block/CRRankListLower';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
  const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR5M'
      ,{refreshInterval:30000}
  )

  return (
    <>
        <Tabs>
            <TabList>
            <Tab>上昇</Tab>
            <Tab>下落</Tab>
            </TabList>
        <TabPanel>
            <CRURankList />
        </TabPanel>
        <TabPanel>
            <CRLRankList />
        </TabPanel>
        </Tabs>
    </>
  )
}

export default Dashboard;