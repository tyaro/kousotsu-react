import { isUndefined } from 'lodash';
import useSWR from 'swr';

// ロングショートアカウント比率 情報
export const fetchLongShortAccountRatio = (p:{symbol?:string,span:string,limit:number}):any=>{
    var pair = 'BTCUSDT'
    var span = '5m'
    if (!isUndefined(p.symbol)){
        pair = p.symbol
        span = p.span
    }

    const url = 'https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=' + pair + '&period=' + span +'&limit=' + p.limit
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

// バイナンス日足データ 情報
export const fetchKlines = (p:{symbol?:string,span:string,limit:number}):any=>{
    var pair = 'BTCUSDT'
    var span = '5m'
    if (!isUndefined(p.symbol)){
        pair = p.symbol
        span = p.span
    }

    const url = 'https://fapi.binance.com/fapi/v1/klines?symbol=' + pair + '&interval=' + span +'&limit=' + p.limit
    const {data : info} = useSWR(
      url
      ,{refreshInterval:120000}
    )
    var value = undefined
    if (!isUndefined(info)){
      value = info
    }
    return (value);
  
}

// TakerBuySellVolume 情報
export const fetchLongShortRatio = (p:{symbol?:string,span:string,limit:number}):any=>{
  var pair = 'BTCUSDT'
  var span = '5m'
  if (!isUndefined(p.symbol)){
      pair = p.symbol
      span = p.span
  }

  const url = 'https://fapi.binance.com/futures/data/takerlongshortRatio?symbol=' + pair + '&period=' + span +'&limit=' + p.limit
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

// Top Trader ロングショートポジション割合 情報
export const fetchTopLongShortPositionRatio = (p:{symbol?:string,span:string,limit:number}):any=>{
  var pair = 'BTCUSDT'
  var span = '5m'
  if (!isUndefined(p.symbol)){
      pair = p.symbol
      span = p.span
  }

  const url = 'https://fapi.binance.com/futures/data/topLongShortPositionRatio?symbol=' + pair + '&period=' + span +'&limit=' + p.limit
  const {data : info} = useSWR(
    url
    ,{refreshInterval:300000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}

// Top Trader ロングショートアカウント割合 情報
export const fetchTopLongShortAccountRatio = (p:{symbol?:string,span:string,limit:number}):any=>{
  var pair = 'BTCUSDT'
  var span = '5m'
  if (!isUndefined(p.symbol)){
      pair = p.symbol
      span = p.span
  }

  const url = 'https://fapi.binance.com/futures/data/topLongShortAccountRatio?symbol=' + pair + '&period=' + span +'&limit=' + p.limit
  const {data : info} = useSWR(
    url
    ,{refreshInterval:300000}
  )
  var value = undefined
  if (!isUndefined(info)){
    value = info
  }
  return (value);

}