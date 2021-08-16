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
      result = '1HHOUR'
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

  const span = parseSpanType1(props.span)
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