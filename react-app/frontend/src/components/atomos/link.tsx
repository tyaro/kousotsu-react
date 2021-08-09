// 外部リンク定義

// バイナンス先物取引へのリンク
export const linkBinanceFeature = (symbol:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + symbol + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{symbol}</a>
    )
}

// バイナンス先物取引へのリンク
export const linkBinanceFeature2 = (props:{symbol?:string}) =>{
  var url = 'https://www.binance.com/ja/futures/' + props.symbol + 'USDT'
  return (
    <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{props.symbol}</a>
  )
}