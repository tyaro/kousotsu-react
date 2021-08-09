// 外部リンク定義

// バイナンス先物取引へのリンク
export const linkBinanceFeature = (symbol:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + symbol + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{symbol}</a>
    )
}