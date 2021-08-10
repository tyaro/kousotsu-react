// 値と一緒に Sparkline を表示する

import { Card,Box, Typography } from '@material-ui/core';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
          <SparklinesLine />
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

