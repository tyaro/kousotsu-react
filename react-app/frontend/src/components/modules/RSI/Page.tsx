import React from 'react';
//import ReactGridLayout from 'react-grid-layout';
import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../../../templates/GenericTemplate';
import RSIInfo from './Dashboard';
import RSIInfo2 from './List';
type Props = {} & RouteComponentProps<{}>;
const ReactGridLayout = require('react-grid-layout');


const Widget = (props:{id:any, backgroundColor:any}) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor:props.backgroundColor }}>{props.id}</div>
  );
}

const RSIPage: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 10, h: 2, static: true },
    { i: 'b', x: 0, y: 2, w: 10, h: 50, static:true},
  ];
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={60}
      width={1200}
    >
      <div key="a">
        <RSIInfo2 symbol={'BTCUSDT'} />
      </div>
      <div key="b">
        <RSIInfo />
      </div>
    </ReactGridLayout>
  );
}
export default RSIPage;

