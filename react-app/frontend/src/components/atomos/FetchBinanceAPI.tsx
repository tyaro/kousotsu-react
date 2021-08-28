import { isUndefined } from 'lodash';
import useSWR from 'swr';

// Volume Ranking 情報
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

// Volume Ranking 情報
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
      ,{refreshInterval:30000}
    )
    var value = undefined
    if (!isUndefined(info)){
      value = info
    }
    return (value);
  
}