import { fetchPriceTrendAll, fetchRSITrend } from '../atomos/FetchAPIData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ ,{ isUndefined } from 'lodash';
import { Sparklines,SparklinesLine, SparklinesNormalBand, SparklinesReferenceLine } from 'react-sparklines';
import { Typography,Card } from '@material-ui/core';
import { useState } from 'react';

export const SparklinePriceInfo = (props:{info?:any,span:string})=>{
  var c = '#FFFFFF'

  var trendData = props.info.Trend[props.span]
  var lastPrice = Number(trendData.slice(-1))
  var avgPrice = _.mean(trendData.map(Number))
  if (lastPrice < avgPrice){c = '#FF0000'}
  if (lastPrice > avgPrice){c = '#00FF00'}
  return(
    <>
      <Typography >${lastPrice}</Typography>
      <Sparklines data={trendData} style={{width:120,height:30}}>
          <SparklinesLine color={c} />
      </Sparklines>
    </>
  )
}
export const SparklinePriceInfo2 = (props:{info?:any,span:string})=>{
  var c = '#FFFFFF'

  var trendData = props.info.Trend[props.span]
  var lastPrice = Number(trendData.slice(-1))
  var avgPrice = _.mean(trendData.map(Number))
  if (lastPrice < avgPrice){c = '#FF0000'}
  if (lastPrice > avgPrice){c = '#00FF00'}
  //console.log(props.info)
  return(
    <>
    <Card style={{backgroundColor:"black",padding:5}}>
    <Typography style={{fontSize:'0.5em'}}>{props.info.Pair}</Typography>
    <Typography style={{fontSize:'2em'}}>${lastPrice}</Typography>
      <Sparklines data={trendData} style={{width:300,height:100}}>
          <SparklinesLine color={c} />
      </Sparklines>
      </Card>
    </>
  )
}




// 価格表示 With SparkLine
export const PriceInfo = (props:{symbol?:string})=>{
  const info = fetchPriceTrendAll({symbol:props.symbol})
  const [state,setState] = useState(1)
  if(isUndefined(info)){
      return (
          <div>now loading...</div>
      )
  }

  return(
    <>
      <Tabs style={{fontSize:'0.2em'}} defaultIndex={state} onSelect={(index)=>setState(index)}>
      <TabPanel><SparklinePriceInfo info={info} span={'1M'} /></TabPanel>
      <TabPanel><SparklinePriceInfo info={info} span={'15M'} /></TabPanel>
      <TabPanel><SparklinePriceInfo info={info} span={'1H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo info={info} span={'4H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo info={info} span={'6H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo info={info} span={'1D'} /></TabPanel>
      <TabList style={{padding:0,lightingColor:'#222222'}}>
      <Tab style={{padding:2}}>1M</Tab>
      <Tab style={{padding:2}}>15M</Tab>
      <Tab style={{padding:2}}>1H</Tab>
      <Tab style={{padding:2}}>4H</Tab>
      <Tab style={{padding:2}}>6H</Tab>
      <Tab style={{padding:2}}>1D</Tab>
      </TabList>
      </Tabs>
    </>
  )
}
// 価格表示 With SparkLine
export const PriceInfo2 = (props:{symbol?:string})=>{
  const info = fetchPriceTrendAll({symbol:props.symbol})
  const [state,setState] = useState(1)
  if(isUndefined(info)){
      return (
          <div>now loading...</div>
      )
  }

  return(
    <>
      <Tabs defaultIndex={state} onSelect={(index)=>setState(index)}>
      <TabPanel><SparklinePriceInfo2 info={info} span={'1M'} /></TabPanel>
      <TabPanel><SparklinePriceInfo2 info={info} span={'15M'} /></TabPanel>
      <TabPanel><SparklinePriceInfo2 info={info} span={'1H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo2 info={info} span={'4H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo2 info={info} span={'6H'} /></TabPanel>
      <TabPanel><SparklinePriceInfo2 info={info} span={'1D'} /></TabPanel>
      <TabList style={{padding:0,lightingColor:'#222222',fontSize:'0.2em'}}>
      <Tab style={{padding:2}}>1M</Tab>
      <Tab style={{padding:2}}>15M</Tab>
      <Tab style={{padding:2}}>1H</Tab>
      <Tab style={{padding:2}}>4H</Tab>
      <Tab style={{padding:2}}>6H</Tab>
      <Tab style={{padding:2}}>1D</Tab>
      </TabList>
      </Tabs>
    </>
  )
}

export const RSITrend = (props:{symbol?:string,span:string}) => {
      const info = fetchRSITrend({symbol:props.symbol,span:props.span})
      if(isUndefined(info)){
          return (
              <div>now loading...</div>
          )
      }
      var lastValue = Number(info.Value)
      var c = '#FFFFFF'
      if (lastValue < 30){c = '#E35561'}
      if (lastValue > 70){c = '#5CC686'}
      return (
          <>
          <Typography style={{color:c}}>{info.Value}%</Typography>
          <Sparklines data={info.Trend} style={{width:90,height:50}} max={100} min={0}>
              <SparklinesLine color={c} />
              <SparklinesReferenceLine type='custom' value={15} style={{stroke:'green',strokeOpacity:0.75,strokeWidth:1}} />
              <SparklinesReferenceLine type='custom' value={40} style={{stroke:'red',strokeOpacity:0.75,strokeWidth:1}} />
          </Sparklines>
        </>
      )

}