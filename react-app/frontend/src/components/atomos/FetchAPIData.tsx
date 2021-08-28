import { isUndefined } from 'lodash';
import useSWR from 'swr';


const parseSpanType1 = (span:string):string => {
    var result = span

    if(span==='1MIN'||span==='1min'){
        result = '1M'
      }else if(span==='15MIN'||span==='15min'){
        result = '15M'
      }else if(span==='60MIN'||span==='60min'||span==='1HOUR'||span==='1hour'||span==='1H'){
        result = '60M'
      }else if(span==='240MIN'||span==='240min'||span==='4Hour'||span==='4HOUR'||span==='4H'){
        result = '240M'
      }else if(span==='360MIN'||span==='6HOUR'||span==='360min'||span==='6Hour'||span==='6H'){
        result = '360M'
      }else if(span==='480MIN'||span==='8HOUR'||span==='480min'||span==='8Hour'||span==='8H'){
        result = '480M'
      }else if(span==='720MIN'||span==='12HOUR'||span==='720min'||span==='12Hour'||span==='12H'){
        result = '720M'
      }else if(span==='1440MIN'||span==='1DAY'||span==='1D'||span==='24H'){
        result = '1440M'
      }
    return result
} 
const parseSpanType2 = (span:string):string => {
  var result = span

  if(span==='1M'||span==='1min'){
      result = '1MIN'
    }else if(span==='15M'||span==='15min'){
      result = '15MIN'
    }else if(span==='60MIN'||span==='60M'||span==='60min'||span==='1Hour'||span==='1H'){
      result = '1HOUR'
    }else if(span==='240MIN'||span==='240M'||span==='240min'||span==='4Hour'||span==='4H'){
      result = '4HOUR'
    }else if(span==='360MIN'||span==='360M'||span==='360min'||span==='6Hour'||span==='6H'){
      result = '6HOUR'
    }else if(span==='480MIN'||span==='480M'||span==='480min'||span==='8Hour'||span==='8H'){
      result = '8HOUR'
    }else if(span==='720MIN'||span==='720M'||span==='720min'||span==='12Hour'||span==='12H'){
      result = '12HOUR'
    }else if(span==='1440MIN'||span==='1440M'||span==='1D'||span==='24H'){
      result = '1DAY'
    }
  return result
} 

const parseSpanType3 = (span:string):string => {
  var result = span

  if(span==='1MIN'||span==='1min'){
      result = '1M'
    }else if(span==='15MIN'||span==='15min'){
      result = '15M'
    }else if(span==='60MIN'||span==='60min'||span==='1HOUR'||span==='1hour'||span==='60M'){
      result = '1H'
    }else if(span==='240MIN'||span==='240min'||span==='4Hour'||span==='4HOUR'||span==='240M'){
      result = '4H'
    }else if(span==='360MIN'||span==='6HOUR'||span==='360min'||span==='6Hour'||span==='360M'){
      result = '6H'
    }else if(span==='480MIN'||span==='8HOUR'||span==='480min'||span==='8Hour'||span==='480M'){
      result = '8H'
    }else if(span==='720MIN'||span==='12HOUR'||span==='720min'||span==='12Hour'||span==='720M'){
      result = '12H'
    }else if(span==='1440MIN'||span==='1440M'||span==='1DAY'||span==='24H'){
      result = '1D'
    }
  return result
} 

export const fetchVolumeRatioTrend = (props:{symbol?:string,span:string}):any=>{

  const span = parseSpanType2(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/VOLUME/TREND/RATIO/' + props.symbol + '/' +span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  console.log(url)
 var trendData = new Array(30).fill(0)
  if (!isUndefined(info)){
    trendData = info
  }
  return (trendData);
}

export const fetchVolumeTrend = (props:{symbol?:string,span:string}):any=>{

  const span = parseSpanType2(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/VOLUME/TREND/' + props.symbol + '/' +span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
 var trendData = new Array(30).fill(0)
  if (!isUndefined(info)){
    trendData = info
  }
  return (trendData);
}

export const fetchPriceTrend = (props:{symbol?:string,span:string}):any=>{

  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/'+props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  //console.log(url,span)
  var trendData = new Array(30).fill(0)
  if (!isUndefined(info)||isUndefined(props.symbol)){
    trendData = info.Trend[span]
  }
  return (trendData);
}
export const fetchPriceTrendAll = (props:{symbol?:string}):any=>{

  const url = 'https://kousotsu-py.info/cryptoinfo/API/TrendPrice/'+props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var trendData = undefined
  if (!isUndefined(info)||isUndefined(props.symbol)){
    trendData = info
  }
  return (trendData);
}

export const fetchCRVRankValue = (props:{symbol?:string,span:string}):any=>{

  const span = parseSpanType1(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/CRRank/'+ span + '/' +props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  //console.log(url,span)
  var value = {"Type":"","Result":{"Pair":"","Value":"0","DV":"0","Rank":"0","calcTime":""}}
  if (!isUndefined(info)||isUndefined(props.symbol)){
    value = info.Result
  }
  return (value);
}

export const fetchRSIValue = ():any=>{

  const url = 'https://kousotsu-py.info/cryptoinfo/API/RSI/VALUE'
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = {"Result":[],"calcTime":""}
  if (!isUndefined(info)){
    value = {
      'Result':info.Result,
      'calcTime':info.calcTime,
  }
  return (value);
  }
}

export const fetchRSITrend = (props:{symbol?:string,span:string}):any=>{
  const span = parseSpanType3(props.span)

  const url = 'https://kousotsu-py.info/cryptoinfo/API/RSI/TREND/' + span + '/' + props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}


export const fetchOHLC30 = (props:{symbol?:string,span:string}):any=>{
  const span = parseSpanType3(props.span)

  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/KLINES/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}


export const fetchFSymbol = ():any=>{

  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/SYMBOL/FUTURE'
  const {data : info} = useSWR(
    url
    ,{refreshInterval:300000000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// 変動率中央値
export const fetchCRM = ():any=>{

  const url = 'https://kousotsu-py.info/cryptoinfo/API/CRM'
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

export const fetchCRF = (props:{symbol:string}):any=>{

  const url = 'https://kousotsu-py.info/cryptoinfo/API/CRFuture/' + props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}


// ボラティリティ平均情報
export const fetchARRInfo = (props:{symbol:string,method:string}):any=>{
  const url = 'https://kousotsu-py.info/cryptoinfo/API/ADRRank/' + props.method + '/' + props.symbol
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// 出来高情報(全体出来高偏差値ランク)
export const fetchVolumeInfo1 = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType2(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/VOLUME/RANK/PV/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// 出来高情報(銘柄別出来高偏差値ランク)
export const fetchVolumeInfo2 = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType2(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/VOLUME/RANK/DV/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// RSI情報
export const fetchRSIInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/RSI/RANK/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// RSIトレンド情報
export const fetchRSITrendInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/RSI/TREND/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}


// BB%B情報
export const fetchBBBInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/BBB/RANK/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// BB%Bトレンド情報
export const fetchBBBTrendInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/BBB/TREND/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// BB%WR情報
export const fetchBBWRInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/BBWR/RANK/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// BBWRトレンド情報
export const fetchBBWRTrendInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/BBWR/TREND/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}


// Volumeランキング情報(V3)
export const fetchVolumeRankInfo = (props:{symbol:string,span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/VOLUME/RANK/' + props.symbol + '/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// Volume Ranking 情報
export const fetchVolumeRanking = (props:{span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/VOLUME/RANK/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// Volume Ranking 情報
export const fetchVolumeWholeInfo = (props:{span:string}):any=>{
  const span = parseSpanType3(props.span)
  const url = 'https://kousotsu-py.info/cryptoinfo/API/V3/VOLUME/INFO/' + span
  const {data : info} = useSWR(
    url
    ,{refreshInterval:30000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}