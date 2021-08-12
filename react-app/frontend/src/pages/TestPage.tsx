import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import { Box } from '@material-ui/core';
import 'react-tabs/style/react-tabs.css';
import RSIInfo from '../components/atomos/RsiInfo';
import CRInfo from '../components/atomos/CRInfo';
import useSWR from 'swr';

type Props = {} & RouteComponentProps<{}>;

const TestPage: React.FC = () => {
  const [alt1,setAlt1] = useState('BTC')
  const [alt2,setAlt2] = useState('ALICE')
  const [alt3,setAlt3] = useState('')

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