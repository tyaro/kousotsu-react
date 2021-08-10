import useSWR from 'swr';
import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import BarChart from './CRBarChart';

const Dashboard = (props:{symbol?:string}) => {
    var url =  'https://kousotsu-py.info/cryptoinfo/API/CRFuture/' + props.symbol
    const {data : altInfo} = useSWR(
        url
        ,{refreshInterval:30000}
    )
    var url2 =  'https://kousotsu-py.info/cryptoinfo/API/CRFuture/BTCUSDT'
    const {data : btcInfo} = useSWR(
        url2
        ,{refreshInterval:30000}
    )
    if (isUndefined(btcInfo)||isUndefined(altInfo)){
        return (
            <div>now loading</div>
        )
    }
    var pair = altInfo.Pair
    var CR01 = altInfo.CRate01
    var CR05 = altInfo.CRate05
    var CR10 = altInfo.CRate10
    var CR30 = altInfo.CRate30
    var CR60 = altInfo.CRate60
    var CR240 = altInfo.CRate240
    var CR360 = altInfo.CRate360
    var CR480 = altInfo.CRate480
    var CR720 = altInfo.CRate720

    return (
        <>
        <Card style={{display:'inline-block',backgroundColor:'black',padding:5,margin:5}}>
            <Typography style={{fontSize:'1.5em'}}>Change Rate</Typography>
            <BarChart data1={btcInfo} data2={altInfo}/>
            <table style={{marginBlock:5}}>
            <thead>            
                <tr>
                <th><Typography>{CR01}%</Typography></th>
                <th><Typography>{CR05}%</Typography></th>
                <th><Typography>{CR10}%</Typography></th>
                <th><Typography>{CR30}%</Typography></th>
                <th><Typography>{CR60}%</Typography></th>
                <th><Typography>{CR240}%</Typography></th>
                <th><Typography>{CR360}%</Typography></th>
                <th><Typography>{CR480}%</Typography></th>
                <th><Typography>{CR720}%</Typography></th>
                </tr>
            </thead>
            <tbody>
                <tr style={{textAlign:'center'}}>
                <td>1min</td>
                <td>5min</td>
                <td>10min</td>
                <td>30min</td>
                <td>1hour</td>
                <td>4hour</td>
                <td>6hour</td>
                <td>8hour</td>
                <td>12hour</td>
                </tr>
            </tbody>
        </table>
        </Card>
        </>
    )
}

export default Dashboard;