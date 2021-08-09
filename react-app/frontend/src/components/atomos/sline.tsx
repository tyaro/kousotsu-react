// 値と一緒に Sparkline を表示する

import { Box } from '@material-ui/core';
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