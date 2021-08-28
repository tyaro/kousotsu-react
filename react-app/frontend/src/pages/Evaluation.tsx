import React from 'react';
//import ReactGridLayout from 'react-grid-layout';
import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import Dashboard from '../components/modules/Dashboard/page'
type Props = {} & RouteComponentProps<{}>;
const ReactGridLayout = require('react-grid-layout');

const TestPage: React.FC = () => {
  return (
    <GenericTemplate title=''>
      <Dashboard />
    </GenericTemplate>
  );
}
export default TestPage;

