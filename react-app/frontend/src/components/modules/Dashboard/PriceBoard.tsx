import TrendChart from './OHLC';
import {Card} from '@material-ui/core'
import {LinkBinanceFeature3} from '../../atomos/link'

export const Dashboard = (p:{symbol:string}) => {
  const chart_width = 200;
  const chart_height = 150;

  return (
    <>
    <Card style={{padding:5}}>
    <tr>
      <td style={{verticalAlign:'middle',padding:2,width:100}}>
        <LinkBinanceFeature3 symbol={p.symbol} />
      </td>
    <td style={{padding:2}}>
    <TrendChart symbol={p.symbol} span={'15M'} width={chart_width} height={chart_height} />
    </td>
    <td style={{padding:2}}>
      <TrendChart symbol={p.symbol} span={'1H'} width={chart_width} height={chart_height} />
    </td>
    <td style={{padding:2}}>
      <TrendChart symbol={p.symbol} span={'4H'} width={chart_width} height={chart_height} />
    </td>
    <td style={{padding:2}}>
      <TrendChart symbol={p.symbol} span={'6H'} width={chart_width} height={chart_height} />
    </td>
    <td style={{padding:2}}>
      <TrendChart symbol={p.symbol} span={'1D'} width={chart_width} height={chart_height} />
    </td>
    </tr>
    </Card>
    </>
  );
}

export default Dashboard;
