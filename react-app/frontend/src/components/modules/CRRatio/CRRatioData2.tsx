import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import CRCntPie from './CRCntPie';
import useSWR from 'swr';
import { SparklineCRRatio } from '../../atomos/sline';
import { Line } from 'react-chartjs-2';

const Dashboard = (props:{MA:string}) => {
    var url =  'https://kousotsu-py.info/cryptoinfo/API/UDRATIO/' + props.MA + '/Value'
    const {data : altInfo} = useSWR(
        url
        ,{refreshInterval:30000}
    )
    var url2 =  'https://kousotsu-py.info/cryptoinfo/API/UDRATIO/' + props.MA + '/Trend'
    const {data : altInfo2} = useSWR(
        url2
        ,{refreshInterval:30000}
    )
    if (isUndefined(altInfo)||isUndefined(altInfo2)){
        return (
            <div>now loading</div>
        )
    }
    var cntData = {
        '1M':{'UP':altInfo.UP1M,'DOWN':altInfo.DOWN1M,'HOLD':altInfo.HOLD1M},
        '5M':{'UP':altInfo.UP5M,'DOWN':altInfo.DOWN5M,'HOLD':altInfo.HOLD5M},
        '10M':{'UP':altInfo.UP10M,'DOWN':altInfo.DOWN10M,'HOLD':altInfo.HOLD10M},
        '15M':{'UP':altInfo.UP15M,'DOWN':altInfo.DOWN15M,'HOLD':altInfo.HOLD15M},
        '30M':{'UP':altInfo.UP30M,'DOWN':altInfo.DOWN30M,'HOLD':altInfo.HOLD30M},
        '60M':{'UP':altInfo.UP60M,'DOWN':altInfo.DOWN60M,'HOLD':altInfo.HOLD60M},
        '240M':{'UP':altInfo.UP240M,'DOWN':altInfo.DOWN240M,'HOLD':altInfo.HOLD240M},
        '360M':{'UP':altInfo.UP360M,'DOWN':altInfo.DOWN360M,'HOLD':altInfo.HOLD360M},
        '480M':{'UP':altInfo.UP480M,'DOWN':altInfo.DOWN480M,'HOLD':altInfo.HOLD480M},
        '720M':{'UP':altInfo.UP720M,'DOWN':altInfo.DOWN720M,'HOLD':altInfo.HOLD720M},
        '1440M':{'UP':altInfo.UP1440M,'DOWN':altInfo.DOWN1440M,'HOLD':altInfo.HOLD1440M},
    }
  
    var chartStyle = {backgroundColor:'#000000',width:55,height:55}
    var num = Number(altInfo.UP1M) + Number(altInfo.DOWN1M) + Number(altInfo.HOLD1M)

    return(
        <>
        <table style={{marginBlock:5}}>
        <tbody>
        <tr>
        <td><Typography>平均値　</Typography></td>
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
        <tr>
            <td><Typography style={{fontSize:'1em'}}>UP銘柄<br/>比率推移</Typography></td>
            <td><SparklineCRRatio value={altInfo2.UP1M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP5M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP10M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP15M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP30M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP60M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP240M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP360M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP480M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP720M} num={num}/></td>
            <td><SparklineCRRatio value={altInfo2.UP1440M} num={num}/></td>
        </tr>
        </tbody>
        </table>
        </>
    )
}

export default Dashboard;