import Dashboard4 from './Dashboard4'
import {Card, Typography} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import {useState} from 'react'
import {fetchFSymbol} from '../../atomos/FetchAPIData'
import { isUndefined } from 'lodash';
import { Autocomplete } from "@material-ui/lab";


const Dashboard = () => {
    const [pair,setPair] = useState('BTCUSDT')

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
    return(
        <>
        <Card style={{padding:0,backgroundColor:'black'}}>
        <Typography style={{padding:5,backgroundColor:'green'}}>ロングショート比率 ※ロング/ショート</Typography>
            <SelectSymbol />
            <Dashboard4 symbol={pair} />
        </Card>
        </>
    )
}

export default Dashboard;