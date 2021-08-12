import useSWR from 'swr';
import { Card, Typography } from '@material-ui/core';
import { isUndefined } from 'lodash';

const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/futures/' + value + 'USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }
const Dashboard = (props:{symbol?:string}) => {
    var url =  'https://kousotsu-py.info/cryptoinfo/API/CRFuture/' + props.symbol
    const {data : altInfo} = useSWR(
        url
        ,{refreshInterval:30000}
    )
    if (isUndefined(altInfo)){
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
    var pair = linkCol(altInfo.Pair)
    var CR01 = percentCol(altInfo.CRate01)
    var CR05 = percentCol(altInfo.CRate05)
    var CR10 = percentCol(altInfo.CRate10)
    var CR15 = percentCol(altInfo.CRate15)
    var CR30 = percentCol(altInfo.CRate30)
    var CR60 = percentCol(altInfo.CRate60)
    var CR240 = percentCol(altInfo.CRate240)
    var CR360 = percentCol(altInfo.CRate360)
    var CR480 = percentCol(altInfo.CRate480)
    var CR720 = percentCol(altInfo.CRate720)
    var CR1440 = percentCol(altInfo.CRate1440)
    var headerStyle = {fontSize:'1em',padding:5}
    var colStyle = {paddingLeft:1,textAilgn:'center'}
    return (
        <>
        <Card style={{display:'inline-block',backgroundColor:'black',padding:5,width:730}}>
            <Typography style={{fontSize:'1em',backgroundColor:'#333333',paddingLeft:5}}>変動率</Typography>
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
            <td>{pair}</td>
            <td style={colStyle}><Typography style={colStyle}>{CR01}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR05}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR10}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR15}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR30}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR60}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR240}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR360}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR480}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR720}</Typography></td>
            <td style={colStyle}><Typography style={colStyle}>{CR1440}</Typography></td>
                </tr>
            </tbody>
        </table>
        </Card>
        </>
    )
}

export default Dashboard;