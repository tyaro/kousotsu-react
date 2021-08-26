import { isUndefined } from 'lodash';
import { fetchCRVRankValue, fetchVolumeInfo2,fetchVolumeInfo1 } from '../../atomos/FetchAPIData';
import { Card, Typography } from '@material-ui/core'
import TrendChart from './OHLC';
import { LinkBinanceFeature3 } from '../../atomos/link';

const colDV = (value:any) => {
  var c = '#FFFFFF'
  if (value < 50){c = '#E35561'}
  if (value > 50){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{Number(value).toFixed(1)}</Typography>
  )
}
const colCR = (value:any) => {
  var c = '#FFFFFF'
  if (value < 0){c = '#E35561'}
  if (value > 0){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{value}%</Typography>
  )
}
const colRank = (value:any) => {
  var c = '#FFFFFF'
  if (value > 100){c = '#E35561'}
  if (value < 11){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{value}位</Typography>
  )
}

const colVol = (value:any) =>{
  var vol = ''
  if (String(value).length>7){
    vol = String((Number(value)/1000000).toFixed(1)) + 'M'
  }else if(String(value).length > 4){
    vol = String((Number(value)/1000).toFixed(1)) + 'K'
  }
  return (vol)
}

const Header1 = () => {
  const colWidth = 100
  const colWidth2 = 60

  return(
    <>
    <th style={{textAlign:'center',width:colWidth}}>変動率</th>
    <th style={{textAlign:'center',width:colWidth2*2}} colSpan={2}>
      <tr>
        <th style={{textAlign:'center'}} colSpan={2}>出来高</th>
      </tr>
      <tr>
        <th style={{textAlign:'center',width:colWidth2}}>全体</th>
        <th style={{textAlign:'center',width:colWidth2}}>銘柄</th>
      </tr>
    </th>
    <th style={{textAlign:'center',width:colWidth2*2}} colSpan={2}>
      <tr>
        <th style={{textAlign:'center',fontSize:'0.5em'}} colSpan={2}>ボリンジャーバンド</th>
      </tr>
      <tr>
        <th style={{textAlign:'center',width:colWidth2,fontSize:'0.5em'}}>BB%B-50</th>
        <th style={{textAlign:'center',width:colWidth2}}>BB幅</th>
      </tr>
    </th>
    </>
  )
}

export const Dashboard = (p:{symbol:string,span:string}) => {
    const dataCR15M = fetchCRVRankValue({symbol:p.symbol,span:'15M'})
    const dataVolA15M = fetchVolumeInfo1({symbol:p.symbol,span:'15M'})
    const dataVolB15M = fetchVolumeInfo2({symbol:p.symbol,span:'15M'})
    const dataCR1H = fetchCRVRankValue({symbol:p.symbol,span:'60M'})
    const dataVolA1H = fetchVolumeInfo1({symbol:p.symbol,span:'1H'})
    const dataVolB1H = fetchVolumeInfo2({symbol:p.symbol,span:'1H'})
    const dataCR4H = fetchCRVRankValue({symbol:p.symbol,span:'240M'})
    const dataVolA4H = fetchVolumeInfo1({symbol:p.symbol,span:'4H'})
    const dataVolB4H = fetchVolumeInfo2({symbol:p.symbol,span:'4H'})
    const dataCR6H = fetchCRVRankValue({symbol:p.symbol,span:'360M'})
    const dataVolA6H = fetchVolumeInfo1({symbol:p.symbol,span:'6H'})
    const dataVolB6H = fetchVolumeInfo2({symbol:p.symbol,span:'6H'})
    const dataCR1D = fetchCRVRankValue({symbol:p.symbol,span:'1440M'})
    const dataVolA1D = fetchVolumeInfo1({symbol:p.symbol,span:'1D'})
    const dataVolB1D = fetchVolumeInfo2({symbol:p.symbol,span:'1D'})

    if(isUndefined(dataCR15M)||isUndefined(dataVolA15M)||isUndefined(dataVolB15M)){return (<div>now loading...</div>)}
    if(isUndefined(dataCR1H)||isUndefined(dataVolA1H)||isUndefined(dataVolB1H)){return (<div>now loading...</div>)}
    if(isUndefined(dataCR4H)||isUndefined(dataVolA4H)||isUndefined(dataVolB4H)){return (<div>now loading...</div>)}
    if(isUndefined(dataCR6H)||isUndefined(dataVolA6H)||isUndefined(dataVolB6H)){return (<div>now loading...</div>)}
    const chart_width = 340;
    const chart_height = 250;
  
    return (
      <>
        <Card style={{backgroundColor:'black',padding:5}}>
        <Typography style={{backgroundColor:"#333333",padding:5}}>銘柄成績表</Typography>
        <table style={{border:2,borderColor:'white'}}>
          <thead>
            <tr>
            <td></td>
            <td style={{textAlign:'center',backgroundColor:"#ff7f7f"}} colSpan={5}>15min</td>
            <td style={{textAlign:'center',backgroundColor:"#ff7fbf"}} colSpan={5}>1hour</td>
            <td style={{textAlign:'center',backgroundColor:"#ff7fff"}} colSpan={5}>4hour</td>
            <td style={{textAlign:'center',backgroundColor:"#bf7fff"}} colSpan={5}>6hour</td>
            <td style={{textAlign:'center',backgroundColor:"#7f7fff"}} colSpan={5}>1day</td>
            </tr>
            <tr style={{backgroundColor:"#222222"}}>
              <th style={{textAlign:'center',width:80}}></th>
              <Header1/>
              <Header1/>
              <Header1/>
              <Header1/>
              <Header1/>
            </tr>
          </thead>
          <tbody>
          <tr>
          <td style={{textAlign:'center'}}>値</td>
          <td style={{textAlign:'center'}}>{colCR(dataCR15M.Value)}</td>
          <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA15M.Result.Value)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colCR(dataCR1H.Value)}</td>
          <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA1H.Result.Value)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colCR(dataCR4H.Value)}</td>
          <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA4H.Result.Value)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colCR(dataCR6H.Value)}</td>
          <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA6H.Result.Value)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colCR(dataCR1D.Value)}</td>
          <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA1D.Result.Value)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          </tr>
          <tr>
          <td style={{textAlign:'center'}}>偏差値</td>
          <td style={{textAlign:'center'}}>{colDV(dataCR15M.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolA15M.Result.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolB15M.Result.PDV)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colDV(dataCR1H.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolA1H.Result.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolB1H.Result.PDV)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colDV(dataCR4H.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolA4H.Result.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolB4H.Result.PDV)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colDV(dataCR1H.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolA6H.Result.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolB6H.Result.PDV)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colDV(dataCR1D.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolA1D.Result.DV)}</td>
          <td style={{textAlign:'center'}}>{colDV(dataVolB1D.Result.PDV)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          </tr>
          <tr>
          <td style={{textAlign:'center'}}>RANK</td>
          <td style={{textAlign:'center'}}>{colRank(dataCR15M.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolA15M.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolB15M.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colRank(dataCR1H.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolA1H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolB1H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colRank(dataCR4H.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolA4H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolB4H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colRank(dataCR6H.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolA6H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolB6H.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>{colRank(dataCR1D.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolA1D.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>{colRank(dataVolB1D.Result.Rank)}</td>
          <td style={{textAlign:'center'}}>-</td>
          <td style={{textAlign:'center'}}>-</td>
          </tr>
          <tr  style={{backgroundColor:"#222222"}}>
          <td><LinkBinanceFeature3 symbol={p.symbol}/></td>
          <td colSpan={5}>
            <TrendChart symbol={p.symbol} span={'15M'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={p.symbol} span={'1H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={p.symbol} span={'4H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={p.symbol} span={'6H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={p.symbol} span={'1D'} width={chart_width} height={chart_height} />
          </td>
          </tr>
          <tr  style={{backgroundColor:"#222222"}}>
          <td><LinkBinanceFeature3 symbol={'BTCUSDT'}/></td>
          <td colSpan={5}>
            <TrendChart symbol={'BTCUSDT'} span={'15M'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={'BTCUSDT'} span={'1H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={'BTCUSDT'} span={'4H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={'BTCUSDT'} span={'6H'} width={chart_width} height={chart_height} />
          </td>
          <td colSpan={5}>
            <TrendChart symbol={'BTCUSDT'} span={'1D'} width={chart_width} height={chart_height} />
          </td>
          </tr>
        </tbody>
        </table>

        </Card>
        </>
    )
}

export default Dashboard;