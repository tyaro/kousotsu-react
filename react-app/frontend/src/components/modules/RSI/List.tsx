import { LinkBinanceFeature3 } from '../../atomos/link';
import { PriceInfo, RSITrend } from '../../block/SparkLineCol';
import { Card, Typography } from '@material-ui/core'

export const RSIInfo = (props:{symbol:string}) =>{
    const pair = props.symbol
    return (
        <>
        <Card style={{backgroundColor:'black',padding:5}}>
        <tr style={{backgroundColor:'#333333'}}>
        <td style={{width:90}}></td>
        <td style={{width:160}}>price</td>
        <td style={{width:100}}>1min</td>
        <td style={{width:100}}>15min</td>
        <td style={{width:100}}>1hour</td>
        <td style={{width:100}}>4hour</td>
        <td style={{width:100}}>6hour</td>
        <td style={{width:100}}>1day</td>
        </tr>
        <tr>
        <td><LinkBinanceFeature3 symbol={pair}></LinkBinanceFeature3></td>
            <td><PriceInfo symbol={pair} /></td>
            <td><RSITrend symbol={pair} span={'1M'} /></td>
            <td><RSITrend symbol={pair} span={'15M'} /></td>
            <td><RSITrend symbol={pair} span={'1H'} /></td>
            <td><RSITrend symbol={pair} span={'4H'} /></td>
            <td><RSITrend symbol={pair} span={'6H'} /></td>
            <td><RSITrend symbol={pair} span={'1D'} /></td>
        </tr>
        </Card>
        </>
    )
}

export default RSIInfo;