import { fetchKlines, fetchLongShortAccountRatio,fetchTopLongShortAccountRatio,fetchTopLongShortPositionRatio } from '../../atomos/FetchBinanceAPI';
import { Line } from "react-chartjs-2";
import { isUndefined } from 'lodash';
import _ from 'lodash';
import { Card, Typography } from '@material-ui/core';

const RatioChart = (p:{symbol?:string,span:string}) => {

    var limit=30
    if(p.span==='12h'){
        limit=60
    }else if(p.span==='6h'){
        limit=100
    }else if(p.span==='4h'){
        limit=100
    }else if(p.span==='2h'){
        limit=100
    }else if(p.span==='1h'||p.span==='30m'||p.span==='15m'||p.span==='5m'){
        limit=100
    }

    const info = fetchLongShortAccountRatio({symbol:p.symbol,span:p.span,limit:limit})
    const info3 = fetchTopLongShortAccountRatio({symbol:p.symbol,span:p.span,limit:limit})
    const info4 = fetchTopLongShortPositionRatio({symbol:p.symbol,span:p.span,limit:limit})
    const info2 = fetchKlines({symbol:p.symbol,span:p.span,limit:limit})

    if (isUndefined(info)||isUndefined(info2)||isUndefined(info3)||isUndefined(info4)){
        return (
            <div>now loading...</div>
        )
    }
    //ロングショート比率データ作成
    const ratio1 = _.map(info,'longShortRatio')
    const ratio2 = _.map(info3,'longShortRatio')
    const ratio3 = _.map(info4,'longShortRatio')
    const timestamp = _.map(info,'timestamp')
    const labels = _.map(timestamp,(value)=>{
        let dateTime = new Date(value)
        let time = dateTime.toLocaleTimeString()
        if (p.span==='1d'){
            time = dateTime.toLocaleDateString()
        }
        return(
            time
        )
    })
    const ratioData1 = _.map(ratio1,value=>value-0)
    const ratioData2 = _.map(ratio2,value=>value-0)
    const ratioData3 = _.map(ratio3,value=>value-0)

    const span = info2.length
    var closeData:number[] = new Array(span)
    var buyVolData:number[] = new Array(span)
    var sellVolData:number[] = new Array(span)
    //var buySellVol:number[] = new Array(span)
    var buySellVolDiff:number[] = new Array(span)
    var volDisp:number[] = new Array(span)
    var max = 0
    var min = 0

    var i = 0
    _.forEach(info2,row=>{
        closeData[i] = row[4]
        buyVolData[i] = row[10]
        sellVolData[i] = row[7]-row[10]
        volDisp[i] = row[7]-row[7]/2
        if (row[4] > row[1]){ volDisp[i] = buyVolData[i] * 1}
        else if( row[4] < row[1]){ volDisp[i]= sellVolData[i] * -1}
        buySellVolDiff[i] = buyVolData[i]-sellVolData[i]
        if(max<row[7]){max=row[7]*2}
        if(min>volDisp[i]){min=volDisp[i]*2}
        i++
    })

    const lastPrice=closeData.slice(-1)
    const lastRatio1 = ratioData1.slice(-1)[0].toFixed(2)
    const lastRatio2 = ratioData2.slice(-1)[0].toFixed(2)
    const lastRatio3 = ratioData3.slice(-1)[0].toFixed(2)
    
    const ratioCol = (value:any) => {
        var c = '#FFFFFF'
        if(value > 1){c="rgba(92,198,134,1)"}
        if(value < 1){c="rgba(227,85,97,1)"}
        return (
            <span style={{color:c}}>{value}</span>
        )

    }

    const data = {
        labels:labels,
        datasets:[
            {
                type:'line',
                label:'Price',
                data:closeData,
                fill:false,
                backgroundColor: 'rgba(230, 0, 18, 1)',
                borderColor: 'rgba(230, 0, 18, 1)',
                xAxisID:'x1',
                yAxisID:'y2',
            },
            {
                type:'line',
                label:'ぱんぴー垢比率',
                data:ratioData1,
                fill:false,
                backgroundColor: 'rgba(243, 152, 0, 0.5)',
                borderColor: 'rgba(243, 152, 0, 0.5)',
                xAxisID:'x1',
                yAxisID:'y1',
                stacked:false,
                pointRadius:1,
            },
            {
                type:'line',
                label:'トップ垢比率',
                data:ratioData2,
                fill:false,
                backgroundColor: 'rgba(255, 241, 0, 0.5)',
                borderColor: 'rgba(255, 241, 0, 0.5)',
                xAxisID:'x1',
                yAxisID:'y1',
                stacked:false,
                pointRadius:1,
            },
            {
                type:'line',
                label:'トップポジション比率',
                data:ratioData3,
                fill:false,
                backgroundColor: 'rgba(0, 153, 68, 0.5)',
                borderColor: 'rgba(0, 153, 68, 0.5)',
                xAxisID:'x1',
                yAxisID:'y4',
                stacked:false,
                pointRadius:1,
            },
            {
                type:'bar',
                label:'Taker Buy Volume',
                data:buyVolData,
                fill:true,
                backgroundColor: "rgba(92,198,134,0.5)",
                //borderColor: "rgba(92,198,134,1)",
                xAxisID:'x1',
                yAxisID:'y3',
            },
            {
                type:'bar',
                label:'Taker Sell Volume',
                data:sellVolData,
                fill:true,
                backgroundColor: "rgba(227,85,97,0.5)",
                //borderColor: "rgba(227,85,97,1)",
                xAxisID:'x1',
                yAxisID:'y3',
            },
        ]
    }
    const options={
        backgroundColor:'#000000',
        responsive:true,
        scales:{
            x1:{
                stacked:true,
                ticks: {
                    maxTicksLimit:10
                },
            },
            y1:{
                type:'linear',
                stacked:false,
                display:true,
            },
            y2:{
                type:'linear',
                display:true,
                position:'right',
            },
            y3:{
                type:'linear',
                stacked:true,
                display:false,
                max:max*2,
            },
            y4:{
                type:'linear',
                stacked:false,
                display:true,
            },
        },
    }
    return (
        <>
        <Card style={{padding:5,backgroundColor:'black'}}>
            <Typography style={{backgroundColor:"#222222",padding:5}}>価格：${lastPrice} 全体アカウント比率：{ratioCol(lastRatio1)} トップアカウント比率：{ratioCol(lastRatio2)} トップポジション比率：{ratioCol(lastRatio3)}</Typography>
        <Line data={data} options={options}/>
        </Card>
        </>
    )
}

export default RatioChart;