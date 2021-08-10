import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import { Box } from '@material-ui/core';
import 'react-tabs/style/react-tabs.css';
import RSIInfo from '../components/atomos/RsiInfo';
import CRInfo from '../components/atomos/CRInfo';

type Props = {} & RouteComponentProps<{}>;

const TestPage: React.FC = () => {
    return (
      <GenericTemplate title="テストページ">
          <Box marginLeft='0px'>
          <RSIInfo symbol={'ALICEUSDT'} />
          <CRInfo symbol={'ALICEUSDT'} />
          </Box>
      </GenericTemplate>
    );
  };
  
  export default TestPage;