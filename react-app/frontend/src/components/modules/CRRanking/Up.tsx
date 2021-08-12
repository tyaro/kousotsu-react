import useSWR from 'swr';
import RankList from './Dashboard';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Dashboard = () => {
    const {data : info5M} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR5M'
        ,{refreshInterval:30000}
    )
    const {data : info1H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR1H'
        ,{refreshInterval:30000}
    )
    const {data : info4H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR4H'
        ,{refreshInterval:30000}
    )
    const {data : info12H} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRRank/UPR12H'
        ,{refreshInterval:30000}
    )
      
  return (
    <>
        <Tabs>
            <TabPanel>
            <RankList data={info5M} />
            </TabPanel>
            <TabPanel>
            <RankList data={info1H} />
            </TabPanel>
            <TabPanel>
            <RankList data={info4H} />
            </TabPanel>
            <TabPanel>
            <RankList data={info12H} />
            </TabPanel>
            <TabList>
            <Tab>5min</Tab>
            <Tab>1hour</Tab>
            <Tab>4hour</Tab>
            <Tab>12hour</Tab>
            </TabList>
        </Tabs>
    </>
  )
}

export default Dashboard;