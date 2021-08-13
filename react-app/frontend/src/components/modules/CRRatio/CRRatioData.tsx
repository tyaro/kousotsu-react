import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import CRCntPie from './CRCntPie';
import useSWR from 'swr';

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
    var chartStyle = {backgroundColor:'#000000',width:55,height:55}

    return(
        <>
        <table style={{marginBlock:5}}>
        <thead>            
        <tr style={{textAlign:'center'}}>
        <th></th>
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
        <td><Typography>現在値　</Typography></td>
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
        </>
    )
}

export default Dashboard;