import React from 'react';
//import ReactGridLayout from 'react-grid-layout';
import { RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
type Props = {} & RouteComponentProps<{}>;
const ReactGridLayout = require('react-grid-layout');


const Widget = (props:{id:any, backgroundColor:any}) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor:props.backgroundColor }}>{props.id}</div>
  );
}

const TestPage: React.FC = () => {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2, static: false },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, },//minW: 2, maxW: 4 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    { i: 'd', x: 0, y: 2, w: 2, h: 2, },//isDraggable: false },
  ];
  return (
    <GenericTemplate title=''>
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={60}
      width={1200}
    >
      <div key="a">
        <Widget id="a" backgroundColor="#867ae9" />
      </div>
      <div key="b">
        <Widget id="b" backgroundColor="#fff5ab" />
      </div>
      <div key="c">
        <Widget id="c" backgroundColor="#ffcead" />
      </div>
      <div key="d">
        <Widget id="d" backgroundColor="#c449c2" />
      </div>
    </ReactGridLayout>
    </GenericTemplate>
  );
}
export default TestPage;

