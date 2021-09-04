import { fetchKlines, fetchLongShortRatio } from '../../atomos/FetchBinanceAPI';
import { Line } from "react-chartjs-2";
import { isUndefined } from 'lodash';
import _ from 'lodash';
import { Card, Typography } from '@material-ui/core';
import { stackOrderDescending } from 'd3';
import { spawnSync } from 'child_process';

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

    const info = fetchLongShortRatio({symbol:p.symbol,span:p.span,limit:limit})
    const info2 = fetchKlines({symbol:p.symbol,span:p.span,limit:limit})

    if (isUndefined(info)||isUndefined(info2)){
        return (
            <div>now loading...</div>
        )
    }
    //ロングショート比率データ作成
    //const buyVol = _.map(info,'buyVol')
    //const sellVol = _.map(info,'sellVol')
    const buySellRatio = _.map(info,'buySellRatio')
    const ratio = _.map(buySellRatio,(value)=>value*100-100)
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
    /*
    i = 0
    _.forEach(info,row=>{
        buySellVol[i] = row['buyVol'] - row['sellVol']
        i++
    })
    */

    const data = {
        labels:labels,
        datasets:[
            {
                type:'line',
                label:'Price',
                data:closeData,
                fill:false,
                backgroundColor: "rgba(0,0,255,1)",
                borderColor: "rgba(0,0,255,1)",
                xAxisID:'x1',
                yAxisID:'y2',
            },
            {
                type:'bar',
                label:'Taker Buy Volume',
                data:buyVolData,
                fill:true,
                backgroundColor: "rgba(92,198,134,0.5)",
                //borderColor: "rgba(92,198,134,1)",
                xAxisID:'x1',
                yAxisID:'y1',
            },
            {
                type:'bar',
                label:'Taker Sell Volume',
                data:sellVolData,
                fill:true,
                backgroundColor: "rgba(227,85,97,0.5)",
                //borderColor: "rgba(227,85,97,1)",
                xAxisID:'x1',
                yAxisID:'y1',
            },
            {
                type:'line',
                label:'volume',
                data:volDisp,
                fill: {above: 'rgba(0,255,0,0.3)', below: 'rgba(255,0,0,0.3)', target: {value: 0}},
                backgroundColor: "rgba(255,255,0,0.3)",
                borderColor: "rgba(255,255,0,0.3)",
                xAxisID:'x1',
                yAxisID:'y3',
                pointRadius:0,
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
                stacked:true,
                max:max*2,
            },
            y2:{
                type:'linear',
                display:true,
                position:'right',
            },          
            y3:{
                type:'linear',
                display:true,
                position:'right',
                min:min,
                //min:-100,
                //max:100,
            },
        },
    }
    return (
        <>
        <Card style={{padding:5,backgroundColor:'black'}}>
        <Line data={data} options={options}/>
        </Card>
        </>
    )
}

export default RatioChart;