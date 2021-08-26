import { isUndefined } from 'lodash';
import { fetchCRVRankValue, fetchVolumeInfo2,fetchVolumeInfo1, fetchRSIInfo,fetchBBBInfo,fetchBBWRInfo } from '../../atomos/FetchAPIData';
import { Card, Typography } from '@material-ui/core'
import TrendChart from './OHLC';
import { PriceInfo2, RSITrend } from '../../block/SparkLineCol';

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
  if (value < 21){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{value}位</Typography>
  )
}
const colRSI = (value:any) => {
  var c = '#FFFFFF'
  if (value < 30){c = '#E35561'}
  if (value > 70){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{Number(value).toFixed(1)}%</Typography>
  )
}
const colBBB = (value:any) => {
  var c = '#FFFFFF'
  if (value < -50){c = '#E35561'}
  if (value > 50){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{Number(value).toFixed(1)}%</Typography>
  )
}
const colBBWR = (value:any) => {
  var c = '#FFFFFF'
  if (value < 1){c = '#E35561'}
  if (value > 5){c = '#5CC686'}
  return (
    <Typography style={{color:c}}>{Number(value).toFixed(1)}%</Typography>
  )
}

const colVol = (value:any) =>{
  var vol = ''
  if (String(value).length>7){
    vol = String((Number(value)/1000000).toFixed(1)) + 'M'
  }else if(String(value).length > 4){
    vol = String((Number(value)/1000).toFixed(1)) + 'K'
  }
  return (
    <Typography>{vol}</Typography>
    )
}

const Header1 = () => {
  const colWidth = 100
  const colWidth2 = 100

  return(
    <>
    <thead>
      <tr style={{backgroundColor:"#222222"}}>
        <th style={{textAlign:'center',width:colWidth2}}>-</th>
        <th style={{textAlign:'center',width:colWidth2}}>変動率</th>
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
        <th style={{textAlign:'center',width:colWidth2}}>RSI(14)</th>
      </tr>
    </thead>
    </>
  )
}

export const Dashboard = (p:{symbol:string,span:string}) => {
    const dataCR = fetchCRVRankValue({symbol:p.symbol,span:p.span})
    const dataVolA = fetchVolumeInfo1({symbol:p.symbol,span:p.span})
    const dataVolB = fetchVolumeInfo2({symbol:p.symbol,span:p.span})
    const dataRSI = fetchRSIInfo({symbol:p.symbol,span:p.span})
    const dataBBB = fetchBBBInfo({symbol:p.symbol,span:p.span})
    const dataBBWR = fetchBBWRInfo({symbol:p.symbol,span:p.span})

    if(
      isUndefined(dataCR)||
      isUndefined(dataVolA)||
      isUndefined(dataVolB)||
      isUndefined(dataRSI)||
      isUndefined(dataBBB)||
      isUndefined(dataBBWR)
    ){
      return (<div>now loading...</div>)
    }
    const chart_width = 300;
    const chart_height = 200;
  
    return (
      <>
        <table style={{border:2,borderColor:'white',backgroundColor:'black'}}>
          <Header1/>
          <tbody>
          <tr>
            <td style={{textAlign:'center'}}>値</td>
            <td style={{textAlign:'center'}}>{colCR(dataCR.Value)}</td>
            <td style={{textAlign:'center'}} colSpan={2}>{colVol(dataVolA.Result.Value)}</td>
            <td style={{textAlign:'center'}}>{colBBB(dataBBB.Result.Value)}</td>
            <td style={{textAlign:'center'}}>{colBBWR(dataBBWR.Result.Value)}</td>
            <td style={{textAlign:'center'}}>{colRSI(dataRSI.Result.Value)}</td>
          </tr>
          <tr>
            <td style={{textAlign:'center'}}>偏差値</td>
            <td style={{textAlign:'center'}}>{colDV(dataCR.DV)}</td>
            <td style={{textAlign:'center'}}>{colDV(dataVolA.Result.DV)}</td>
            <td style={{textAlign:'center'}}>{colDV(dataVolB.Result.PDV)}</td>
            <td style={{textAlign:'center'}}>{colDV(dataBBB.Result.DV)}</td>
            <td style={{textAlign:'center'}}>{colDV(dataBBWR.Result.DV)}</td>
            <td style={{textAlign:'center'}}>{colDV(dataRSI.Result.DV)}</td>
          </tr>
          <tr>
            <td style={{textAlign:'center'}}>RANK</td>
            <td style={{textAlign:'center'}}>{colRank(dataCR.Rank)}</td>
            <td style={{textAlign:'center'}}>{colRank(dataVolA.Result.Rank)}</td>
            <td style={{textAlign:'center'}}>{colRank(dataVolB.Result.Rank)}</td>
            <td style={{textAlign:'center'}}>{colRank(dataBBB.Result.Rank)}</td>
            <td style={{textAlign:'center'}}>{colRank(dataBBWR.Result.Rank)}</td>
            <td style={{textAlign:'center'}}>{colRank(dataRSI.Result.Rank)}</td>
          </tr>
          <tr  style={{backgroundColor:"#222222"}}>
            <td></td>
            <td colSpan={3}>
              <TrendChart symbol={p.symbol} span={p.span} width={chart_width} height={chart_height} />
            </td>
          </tr>
          <tr  style={{backgroundColor:"#222222"}}>
            <td></td>
            <td colSpan={3}>
              <TrendChart symbol={'BTCUSDT'} span={p.span} width={chart_width} height={chart_height} />
            </td>
          </tr>
        </tbody>
        </table>
        </>
    )
}

export default Dashboard;