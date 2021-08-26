import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';
import { fetchCRM,fetchCRF } from '../../atomos/FetchAPIData';
import { LinkBinanceFeature3 } from '../../atomos/link'


const Dashboard = (props:{symbol?:string}) => {
    var pair = 'ALICEUSDT'
    if(!isUndefined(props.symbol)){pair=props.symbol}
    const altInfo=  fetchCRF({symbol:pair})
    const altInfo2=  fetchCRF({symbol:'BTCUSDT'})
    const altInfo3=  fetchCRM()

    if (isUndefined(altInfo)||isUndefined(altInfo2)||isUndefined(altInfo3)){
        return (
            <div>now loading</div>
        )
    }
    
    const percentCol = (data:string) => {
        var c = '#FFFFFF'
        var value = Number(data)
        if (value < 0){c = '#E35561'}
        if (value > 0){c = '#5CC686'}
        return(
            <div style={{color:c,textAlign:'center'}}>{value}%</div>
        )
    }
    var headerStyle = {fontSize:'1em',padding:5}
    var colStyle = {paddingLeft:1,textAilgn:'center'}
    return (
        <>
        <Card style={{display:'inline-block',backgroundColor:'black',padding:5,width:730}}>
            <Typography style={{fontSize:'1em',backgroundColor:'#333333',paddingLeft:5}}>変動率 ※BTCDOMUSDTは除外</Typography>
            <table style={{borderColor:'#FFFFFF',border:1}}>
            <thead>            
            <tr style={{marginBottom:0}}>
            <th style={colStyle}><Typography style={headerStyle}>Symbol</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>1min</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>5min</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>10min</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>15min</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>30min</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>1hour</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>4hour</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>6hour</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>8hour</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>12hour</Typography></th>
            <th style={colStyle}><Typography style={headerStyle}>24hour</Typography></th>
            </tr>
            </thead>
            <tbody>
            <tr style={{padding:5,paddingBlock:5}}>
            <td>{LinkBinanceFeature3({symbol:altInfo.Pair})}</td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate01)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate05)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate10)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate15)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate30)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate60)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate240)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate360)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate480)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate720)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo.CRate1440)}</Typography></td>
            </tr>
            <tr style={{padding:5,paddingBlock:5}}>
            <td>{LinkBinanceFeature3({symbol:'BTCUSDT'})}</td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate01)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate05)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate10)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate15)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate30)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate60)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate240)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate360)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate480)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate720)}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo2.CRate1440)}</Typography></td>
            </tr>
            <tr style={{padding:5,paddingBlock:5}}>
            <td>全体中央値</td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['1M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['5M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['10M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['15M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['30M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['60M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['240M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['360M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['480M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['720M'])}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{percentCol(altInfo3.Value.CRM['1440M'])}</Typography></td>
            </tr>
            </tbody>
        </table>
        </Card>
        </>
    )
}

export default Dashboard;

