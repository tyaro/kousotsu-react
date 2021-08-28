// 値と一緒に Sparkline を表示する
import { Card,Box, Typography } from '@material-ui/core';
import { isUndefined, sumBy } from 'lodash';
import { Sparklines, SparklinesLine,SparklinesBars,SparklinesText,SparklinesReferenceLine } from 'react-sparklines';
import useSWR from 'swr';
import _ from 'lodash';

// 価格表示 With SparkLine
export const slinePrice = (price:any)=>{
    var lastPrice = price.VALUE
    var preLastPrice = price.TREND.slice(-2)
    var c = '#FFFFFF'
    if (lastPrice < preLastPrice){c = '#E35561'}
    if (lastPrice > preLastPrice){c = '#5CC686'}
    return(
        <Box width={100} height={40}>
        <div style={{color:c}} >${lastPrice}</div>
        <Sparklines data={price.TREND}>
            <SparklinesLine />
        </Sparklines>
        </Box>
    )
}
// 価格表示 With SparkLine
export const slinePrice2 = (price:any)=>{
  var lastPrice = price.Value
  var preLastPrice = price.Trend.slice(-2)
  var c = '#FFFFFF'
  if (lastPrice < preLastPrice){c = '#E35561'}
  if (lastPrice > preLastPrice){c = '#5CC686'}
  return(
      <Box width={100} height={35} style={{marginTop:0}}>
        <Typography>
          <div style={{color:c}} >${lastPrice}</div>
        </Typography>
        <Sparklines data={price.Trend}>
          <SparklinesLine color={'white'}/>
      </Sparklines>
      </Box>
  )
}

// RSI With SparkLine
export const slineRSI = (value:any)=>{
    var lastValue = value.VALUE
    var c = '#FFFFFF'
    if (lastValue < 30){c = '#E35561'}
    if (lastValue > 70){c = '#5CC686'}
    return(
        <Box width={100} height={40}>
        <div style={{color:c}}>{lastValue}</div>
        <Sparklines data={value.TREND}>
            <SparklinesLine color={c}/>
        </Sparklines>
        </Box>
    )
}
// BB%B with Sparkline
export const slineBBB = (value:any)=>{
    var lastValue = value.VALUE
    var c = '#FFFFFF'
    if (lastValue < -50){c = '#E35561'}
    if (lastValue > 50){c = '#5CC686'}
    return(
      <Box width={100} height={40}>
        <div style={{color:c}}>{lastValue}%</div>
        <Sparklines data={value.TREND}>
          <SparklinesLine color={c}/>
        </Sparklines>
      </Box>
    )
}

export const slineBBWR = (value:any)=>{
    var lastValue = value.VALUE
    return(
      <Box width={100} height={40}>
        <div>{lastValue}%</div>
        <Sparklines data={value.TREND}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
}

export const SlineTrend = (props:{value?:any})=>{
  return(
    <Box style={{display:'flex',flex:1,flexDirection:'row'}} height={40}>
      <Box style={{flex:1}} maxWidth={80} maxHeight={40} paddingRight={1}>
        <div style={{fontSize:'0.5em'}}>1min</div>
        <Sparklines data={props.value['1M']}>
            <SparklinesLine color={'white'}/>
        </Sparklines>
      </Box>
      <Box/>
      <Box style={{flex:2}} maxWidth={80} maxHeight={40} paddingRight={1}>
        <div style={{fontSize:'0.5em'}}>1hour</div>
        <Sparklines data={props.value['1H']}>
            <SparklinesLine color={'white'}/>
        </Sparklines>
      </Box>
      <Box style={{flex:3}} maxWidth={80} maxHeight={40} paddingRight={1}>
      <div style={{fontSize:'0.5em'}}>1day</div>
        <Sparklines data={props.value['1D']}>
            <SparklinesLine color={'white'}/>
        </Sparklines>
      </Box>
    </Box>
  )
}
// RSI With SparkLine
export const SlineRSI = (props:{value?:any})=>{
  var lastValue = props.value.VALUE
  var c = '#FFFFFF'
  if (lastValue < 30){c = '#E35561'}
  if (lastValue > 70){c = '#5CC686'}
  return(
      <Card style={{width:120,height:60}}>
      <Typography>
        <div style={{color:c}}>{lastValue}</div>
      </Typography>
      <Sparklines data={props.value.TREND} >
          <SparklinesLine color={c} />
      </Sparklines>
      </Card>
  )
}

// 価格表示 With SparkLine
export const SparklinePrice = (props:{price:any})=>{
  var lastPrice = props.price.Value
  var preLastPrice = props.price.Trend.slice(-2)
  var c = '#FFFFFF'
  if (lastPrice < preLastPrice){c = '#E35561'}
  if (lastPrice > preLastPrice){c = '#5CC686'}
  return(
    <>
      <Box width={100} height={35} style={{marginTop:0}}>
        <Typography style={{color:c}}>${lastPrice}</Typography>
        <Sparklines data={props.price.Trend}>
          <SparklinesLine color='#FFFFFF'/>
      </Sparklines>
      </Box>
    </>
  )
}

// 価格表示 With SparkLine
export const SparklinePriceCR = (props:{price:any,crate:any})=>{
  var lastPrice = props.price.Value
  var c = '#FFFFFF'
  var bcc = '#FFFFFF'
  if (props.crate < 0){c = '#E35561';bcc='red'}
  if (props.crate > 0){c = '#5CC686';bcc='#00ff00'}
  return(
    <>
      <Box width={100} height={35} style={{marginTop:0}}>
        <Typography style={{color:c}}>${lastPrice}</Typography>
        <Sparklines data={props.price.Trend}>
          <SparklinesLine color={bcc} />
      </Sparklines>
      </Box>
    </>
  )
}

// 価格表示 With SparkLine
export const SparklinePriceVol = (props:{value?:any,symbol?:string,span:string})=>{
  var c = '#FFFFFF'
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/'+props.symbol
    ,{refreshInterval:30000}
  )
  if(isUndefined(info)){
    return (
      <div>now loading...</div>
    )
  }

  var trendData = info.Trend[props.span]
  var lastPrice = Number(trendData.slice(-1))
  var avgPrice = _.mean(trendData.map(Number))
  if (lastPrice < avgPrice){c = '#FF0000'}
  if (lastPrice > avgPrice){c = '#00FF00'}
  return(
    <>
      <Box width={95} height={35} style={{marginTop:0}}>
        <Typography style={{color:'#FFFFFF'}}>{props.value}%</Typography>
        <Sparklines data={trendData}>
          <SparklinesLine color={c} />
      </Sparklines>
      </Box>
    </>
  )
}
// 価格表示 With SparkLine
export const SparklinePriceInfo = (props:{symbol?:string,span:string})=>{
  var c = '#FFFFFF'
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/'+props.symbol
    ,{refreshInterval:30000}
  )
  if(isUndefined(info)){
    return (
      <div>now loading...</div>
    )
  }

  var trendData = info.Trend[props.span]
  var lastPrice = Number(trendData.slice(-1))
  var avgPrice = _.mean(trendData.map(Number))
  if (lastPrice < avgPrice){c = '#FF0000'}
  if (lastPrice > avgPrice){c = '#00FF00'}
  return(
    <>
      <Typography style={{fontSize:'1.5em'}}>${lastPrice}</Typography>
      <Sparklines data={trendData}>
          <SparklinesLine color={c} />
      </Sparklines>
    </>
  )
}
// 価格表示 With SparkLine
export const SparklinePriceInfo2 = (props:{symbol?:string,span:string,changeRate?:string})=>{
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/'+props.symbol
    ,{refreshInterval:30000}
  )
  if(isUndefined(info)||isUndefined(props.changeRate)){
    return (
      <div>now loading...</div>
    )
  }

  var trendData = info.Trend[props.span]
  var lastPrice = Number(trendData.slice(-1))
  var c = '#FFFFFF'
  var value = Number(props.changeRate)
  if (value < 0){c = '#E35561'}
  if (value > 0){c = '#5CC686'}
  return(
    <>
      <Box width={95} height={35} style={{marginTop:0}}>
      <Typography style={{fontSize:'1.2em',color:c}}>${lastPrice}</Typography>
      <Sparklines data={trendData}>
          <SparklinesLine color={c} />
      </Sparklines>
      </Box>
    </>
  )
}
// 価格表示 With SparkLine
export const SparklineCRRatio = (props:{value?:any,num:number})=>{
  var c = '#FFFFFF'
  if(isUndefined(props.value)){
    return (
      <div>now loading...</div>
    )
  }

  var trendData = props.value
  var lastValue = Number(trendData.slice(-1))
  var avgValue = _.mean(trendData.map(Number))
  if (lastValue < avgValue){c = '#FF0000'}
  if (lastValue > avgValue){c = '#00FF00'}
  return(
    <>
      <Box width={55} height={55} style={{alignSelf:'normal',paddingTop:5}}>
        <Sparklines data={trendData} min={0} max={props.num} svgWidth={55} svgHeight={55}  >
          <SparklinesLine color={c} />
      </Sparklines>
      </Box>
    </>
  )
}

// 出来高表示 With SparkLine
export const SparklineVolumeInfo2 = (props:{symbol?:string,span:string})=>{
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/VOLUME/TREND/'+props.symbol +'/' + props.span
    ,{refreshInterval:30000}
  )
  if(isUndefined(info)||isUndefined(props.symbol)){
    return (
      <div>now loading...</div>
    )
  }
  var trendData = info.map(Number)
  var lastValue = trendData.slice(-1)
  var value = lastValue
  if (String(lastValue).length>7){
    value = String((Number(lastValue)/1000000).toFixed(1)) + 'M'
  }else if(String(lastValue).length > 4){
    value = String((Number(lastValue)/1000).toFixed(1)) + 'K'
  }
  var c = '#FFFFFF'
  return(
    <>
      <Box width={95} height={35} style={{marginTop:0}}>
      <Typography style={{fontSize:'1.2em',color:c}}>${value}</Typography>
      <Sparklines data={trendData}>
        <SparklinesLine color={'white'}/>
      </Sparklines>
      </Box>
    </>
  )
}

import { fetchCRVRankValue, fetchPriceTrend, fetchVolumeRatioTrend } from './FetchAPIData';

// 変動率表示＋価格トレンド With SparkLine
export const SparklineCRInfo = (props:{symbol?:string,span:string})=>{
  const info = fetchPriceTrend({symbol:props.symbol,span:props.span})
  const info2 = fetchCRVRankValue({symbol:props.symbol,span:props.span})
  var c = '#FFFFFF'
  var trendData = info
  var value = Number(info2.Value)
  var rank = info2.Rank
  var dv = info2.DV
  if (value < 0){c = '#E35561'}
  if (value > 0){c = '#5CC686'}
  return(
    <>
      <Typography style={{fontSize:'1.2em',color:c}}>{value}%</Typography>
      <Sparklines data={trendData}>
          <SparklinesLine color={c} />
      </Sparklines>
    </>
  )
}


export const SparklineVolumeRatio = (props:{symbol?:string,span:string}) => {
  const info = fetchVolumeRatioTrend({symbol:props.symbol,span:props.span})
  var lastValue = Number(info.slice(-1)).toFixed(1)
  var trendData = info.slice(-20)
  var c = '#FFFFFF'
  if (Number(lastValue) < 50){c = '#E35561'}
  if (Number(lastValue) > 50){c = '#5CC686'}
  return(
    <>
    <Typography key='value' style={{color:c,marginBottom:-10,textAlign:'center'}} >{lastValue}%</Typography>
      <Sparklines key='value' data={trendData} min={0} max={100} style={{padding:0}}  svgHeight={40} svgWidth={100} >
          <SparklinesLine color='#5CC686' style={{fillOpacity:0.2}} />
          <SparklinesReferenceLine type="custom" value={30} style={{stroke:'red',strokeOpacity:0.75,strokeWidth:2}} />
      </Sparklines>
    </>
  )
}

import { fetchVolumeTrend } from './FetchAPIData';

// 出来高表示 With SparkLine
export const SparklineVolumeTrend2 = (props:{symbol?:string,span:string})=>{
  const info = fetchVolumeTrend({symbol:props.symbol,span:props.span})
  var lastValue = Number(info.slice(-1)).toFixed(1)
  var trendData = info.slice(-20)
  var value = lastValue
  if (String(lastValue).length>7){
    value = String((Number(lastValue)/1000000).toFixed(1)) + 'M'
  }else if(String(lastValue).length > 4){
    value = String((Number(lastValue)/1000).toFixed(1)) + 'K'
  }
  var c = '#FFFFFF'
  return(
    <>
      <Typography style={{fontSize:'1.2em',color:c}}>${value}</Typography>
      <Sparklines data={trendData}  svgHeight={30} svgWidth={100} >
        <SparklinesBars />
      </Sparklines>
    </>
  )
}

import { fetchARRInfo  } from './FetchAPIData';

// ADR With SparkLine
export const SparklineADRInfo = (p:{symbol:string,method:string})=>{
  const info = fetchARRInfo({symbol:p.symbol,method:p.method})
  const trend = fetchPriceTrend({symbol:p.symbol,span:'1D'})
  if(isUndefined(info)||isUndefined(trend)){
    return (
      <div>now loading...</div>
    )
  }
  var value = info.Result.Value
  var c = '#FFFFFF'
  if (value < 0){c = '#E35561'}
  if (value > 0){c = '#5CC686'}
  return(
    <>
      <Box width={95} height={35} style={{marginTop:0}}>
      <Typography style={{fontSize:'1.2em',color:c}}>{value}%</Typography>
      <Sparklines data={trend}>
          <SparklinesLine color={c} />
      </Sparklines>
      </Box>
    </>
  )
}