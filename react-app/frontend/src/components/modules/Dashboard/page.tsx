import React,{useState,useRef} from 'react';
const ReactGridLayout = require('react-grid-layout');
import KlinesTrend from './PriceBoard';
import { Autocomplete } from "@material-ui/lab";
import { fetchFSymbol } from "../../atomos/FetchAPIData";
import TextField from '@material-ui/core/TextField';
import CRInfo from './CRInfo';
import { isUndefined } from 'lodash';
import Grade from './Grade';
import Grade2 from './Grade2';
import { Typography,Card } from '@material-ui/core';
import { PriceInfo2, RSITrend } from '../../block/SparkLineCol';

const TestPage: React.FC = () => {
  const layout = [
    { i: 'symbolSelect', x: 0, y: 0, w: 20, h: 3, static:true},
    { i: 'TrendInfo', x: 0, y: 3, w: 320, h: 10, static: true },
    { i: 'TrendInfo2', x: 320, y: 3, w: 320, h: 10, static: true },
    { i: 'CRInfo', x: 0, y: 13, w: 650, h: 8, static: true },
    { i: 'Grade15M', x: 0, y: 21, w: 700, h:30 , static: false },
    { i: 'Grade1H', x: 700, y: 21, w: 700, h:30 , static: false },
    { i: 'Grade4H', x: 0, y: 51, w: 700, h:30 , static: false },
    { i: 'Grade6H', x: 700, y: 51, w: 700, h:30 , static: false },
    { i: 'Grade1D', x: 0, y: 81, w: 700, h:30 , static: false },
  ];
  const [pair,setPair] = useState('ALICEUSDT')

  const SelectSymbol = () => {
    const data = fetchFSymbol()
    if (isUndefined(data)){
      return (
        <div>now loading...</div>
      )
    }
    return (
        <Autocomplete
        /*disablePortal*/
        id='combo-box-symbol'
        options={data}
        value={pair}
        renderInput={(params) => <TextField {...params} label="SYMBOL" defaultValue={pair} style={{width:200}}/>}
        onChange={(event,values)=>{setPair(String(values))}}
        />
    )
  }
  

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={3840}
      rowHeight={10}
      width={3840}
    >
      <div key='symbolSelect'>
      <SelectSymbol />
      </div>
      <div key='TrendInfo'>
        <PriceInfo2 symbol={pair}/>
      </div>
      <div key='TrendInfo2'>
        <PriceInfo2 symbol={'BTCUSDT'}/>
      </div>
      <div key="CRInfo" >
           <CRInfo symbol={pair}/>
      </div>
      <Card key="Grade15M">
        <Typography style={{backgroundColor:'#2c4f54',padding:5}}>15min</Typography>
      <Grade2 symbol={pair} span={'15M'} />
      </Card>
      <Card key="Grade1H">
        <Typography style={{backgroundColor:'#1f3134',padding:5}}>1hour</Typography>
      <Grade2 symbol={pair} span={'1H'} />
      </Card>
      <Card key="Grade4H">
        <Typography style={{backgroundColor:'#47585c',padding:5}}>4hour</Typography>
      <Grade2 symbol={pair} span={'4H'} />
      </Card>
      <Card key="Grade6H">
        <Typography style={{backgroundColor:'#485859',padding:5}}>6hour</Typography>
      <Grade2 symbol={pair} span={'6H'} />
      </Card>
      <Card key="Grade1D">
        <Typography style={{backgroundColor:'#6c848d',padding:5}}>1day</Typography>
      <Grade2 symbol={pair} span={'1D'} />
      </Card>
    </ReactGridLayout>
  );
}
export default TestPage;

