import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import { Box, Typography } from '@material-ui/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type Props = {} & RouteComponentProps<{}>;



const TestPage: React.FC = () => {
    return (
      <GenericTemplate title="テストページ">
          <Box marginLeft='0px'>
          にゃーん
          </Box>
      </GenericTemplate>
    );
  };
  
  export default TestPage;