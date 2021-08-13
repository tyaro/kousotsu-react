import { Card,Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2';
import useSWR from 'swr';
import _, { isUndefined } from 'lodash';
import { loadPartialConfig } from '@babel/core';
import { Timelapse } from '@material-ui/icons';

const Dashboard = (props:{span?:string}) => {
    const {data : PV} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRMTREND/PV/'+ props.span
        ,{refreshInterval:30000}
    )
    const {data : EMA5} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRMTREND/EMA05/'+ props.span
        ,{refreshInterval:30000}
    )
    const {data : EMA15} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRMTREND/EMA15/'+ props.span
        ,{refreshInterval:30000}
    )
    const {data : EMA30} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRMTREND/EMA30/'+ props.span
        ,{refreshInterval:30000}
    )
    const {data : EMA60} = useSWR(
        'https://kousotsu-py.info/cryptoinfo/API/CRMTREND/EMA60/'+ props.span
        ,{refreshInterval:30000}
    )
    if (isUndefined(PV)||isUndefined(EMA5)||isUndefined(EMA15)||isUndefined(EMA30)||isUndefined(EMA60)){
        return (
            <div>now loading...</div>
        )
    }
    var span = PV.length
    var timeLabel:string[] = new Array(span)
    var pvData:number[] = new Array(span)

    var startTime = new Date()
    var unixTime = Number(startTime) - 480 * 60000
    for(var i=0;i<480;i++){
        var timeline = new Date(unixTime + i * 60000)
        timeLabel[i] = timeline.getHours().toLocaleString() + ":" + timeline.getMinutes().toLocaleString()
//        pvData[i] = Number(PV[i])
    }
    console.log(timeLabel)
    var data = {
        labels:timeLabel,
        datasets:[
            {
                label:'PV',
                data:PV.map(Number),
                backgroundColor: ['rgba(0, 255, 255, 0.2)',],
                borderColor: ['rgba(0, 255, 255, 1)',],
                borderWidth: 1,
            },
            {
                label:'EMA(5)',
                data:EMA5.map(Number),
                backgroundColor: ['rgba(255, 0, 255, 0.2)',],
                borderColor: ['rgba(255, 0, 255, 1)',],
                borderWidth: 1,
                hidden:true,
            },
            {
                label:'EMA(15)',
                data:EMA15.map(Number),
                backgroundColor: ['rgba(0, 255, 0, 0.2)',],
                borderColor: ['rgba(0, 255, 0, 1)',],
                borderWidth: 1,
                hidden:true,
            },
            {
                label:'EMA(30)',
                data:EMA30.map(Number),
                backgroundColor: ['rgba(255, 129, 0, 0.2)',],
                borderColor: ['rgba(255, 129, 0, 1)',],
                borderWidth: 1,
                hidden:true,
            },
            {
                label:'EMA(60)',
                data:EMA60.map(Number),
                backgroundColor: ['rgba(0, 129, 255, 0.2)',],
                borderColor: ['rgba(0, 129, 255, 1)',],
                borderWidth: 1,
            },


        ]
    }
    const options = {
        responsive: true,
        radius:1,
        scales: {
            x:[{
                ticks:{
                    display:false,
                },
                scaleLabel: {
                    display: false,
                    labelString: '時間'
                },
            }],
            y: {    
                grid:{
                    drawBorder:true,
                    color: "#5f5f5f",
                },
                ticks: {
                    beginAtZero: false,
                    color:"#FFFFFF",
                }
            },
        
        }
    }
    return (      
        <>
        <Card style={{backgroundColor:'black'}}>
            <Line data={data} options={options} />
        </Card>
        </>
    )
}

export default Dashboard;