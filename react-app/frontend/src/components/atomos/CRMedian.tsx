import useSWR from 'swr';
import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import CRCntPie from './CRCntPie';

const Dashboard = () => {
    var url =  'https://kousotsu-py.info/cryptoinfo/API/CRM'
    const {data : altInfo} = useSWR(
        url
        ,{refreshInterval:30000}
    )
    if (isUndefined(altInfo)){
        return (
            <div>now loading</div>
        )
    }
    var cntData = altInfo.Value.CNT
    var chartStyle = {backgroundColor:'#000000',width:50,height:50}
    var medianData = altInfo.Value.CRM
    return (
        <>
        <Card style={{display:'inline-block',backgroundColor:'black',padding:5}}>
            <Typography style={{fontSize:'1.5em',whiteSpace:'nowrap'}}>
                <span style={{color:'#5CC686',whiteSpace:'nowrap'}}>UP</span>/
                <span style={{color:'#E35561'}}>Down</span>
                 先物銘柄比率(BTCDOMUSDTは除外)
            </Typography>
            <Typography style={{fontSize:'0.8em'}}>※値は変動率の中央値</Typography>
            <table style={{marginBlock:5}}>
            <thead>            
                <tr style={{textAlign:'center'}}>
                <th>1min</th>
                <th>5min</th>
                <th>10min</th>
                <th>15min</th>
                <th>30min</th>
                <th>1hour</th>
                <th>4hour</th>
                <th>6hour</th>
                <th>8hour</th>
                <th>12hour</th>
                <th>24hour</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <td><Card style={chartStyle}><CRCntPie info={cntData['1M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['5M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['10M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['15M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['30M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['60M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['240M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['360M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['480M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['720M']}/></Card></td>
            <td><Card style={chartStyle}><CRCntPie info={cntData['1440M']}/></Card></td>
            </tr>
            </tbody>
        </table>
        </Card>
        </>
    )
}
            /*
            <tr>
            <td style={{textAlign:'center'}}>{medianData['1M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['5M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['10M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['30M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['60M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['240M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['360M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['480M']}%</td>
            <td style={{textAlign:'center'}}>{medianData['720M']}%</td>
            </tr>
            */

export default Dashboard;