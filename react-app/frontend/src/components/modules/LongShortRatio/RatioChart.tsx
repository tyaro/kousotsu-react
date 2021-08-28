import { fetchKlines, fetchLongShortAccountRatio } from '../../atomos/FetchBinanceAPI';
import { Line } from "react-chartjs-2";
import { isUndefined } from 'lodash';
import _ from 'lodash';
import { Card, Typography } from '@material-ui/core';

const RatioChart = (p:{symbol?:string,span:string}) => {

    var limit=30
    if(p.span==='12h'){
        limit=60
    }else if(p.span==='6h'){
        limit=120
    }else if(p.span==='4h'){
        limit=180
    }else if(p.span==='2h'){
        limit=360
    }else if(p.span==='1h'||p.span==='30m'||p.span==='15m'||p.span==='5m'){
        limit=500
    }

    const info = fetchLongShortAccountRatio({symbol:p.symbol,span:p.span,limit:limit})
    const info2 = fetchKlines({symbol:p.symbol,span:p.span,limit:limit})

    if (isUndefined(info)||isUndefined(info2)){
        return (
            <div>now loading...</div>
        )
    }
    //ロングショート比率データ作成
    const longAccount = _.map(info,'longAccount')
    const long = _.map(longAccount,(value)=>value*100)
    const shortAccount = _.map(info,'shortAccount')
    const short = _.map(shortAccount,(value)=>value*100)
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
    var i = 0
    _.forEach(info2,row=>{
        closeData[i] = row[4]
        buyVolData[i] = row[10]
        i++
    })

    const data = {
        labels:labels,
        datasets:[
            {
                type:'bar',
                label:'Long Account',
                data:long,
                fill:true,
                backgroundColor: "rgba(92,198,134,0.5)",
                //borderColor: "rgba(92,198,134,1)",
                xAxisID:'x1',
                yAxisID:'y1',
                stacked:true,
            },
            {
                type:'bar',
                label:'Short Account',
                data:short,
                fill:true,
                backgroundColor: "rgba(227,85,97,0.5)",
                //borderColor: "rgba(227,85,97,1)",
                xAxisID:'x1',
                yAxisID:'y1',
                stacked:true,
            },
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
                min:0,
                max:100,
            },
            y2:{
                type:'linear',
                display:true,
                position:'right',
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