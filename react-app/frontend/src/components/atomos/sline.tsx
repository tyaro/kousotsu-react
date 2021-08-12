// 値と一緒に Sparkline を表示する
import { Card,Box, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { Sparklines, SparklinesLine } from 'react-sparklines';
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

