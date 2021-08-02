import React ,{useState} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import { Line,Bar } from 'react-chartjs-2';
import useSWR  from 'swr';
import _, { isNull, isUndefined } from 'lodash';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

type Props = {} & RouteComponentProps<{}>;


const CompareBtc2Alt = () => {

    const [alt,setAlt] = useState('ALICE')
    const [span,setSpan] = useState(72)

    const handleSliderChange = (event: any, newValue: number | Array<number>) => {
        setSpan(Number(newValue));
      };

    const {data : btcInfo} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol=BTCUSDT&limit='+span+'&interval=1h'
        ,{refreshInterval:60000}
    )
    const {data : altInfo} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol='+alt+'USDT&limit='+span+'&interval=1h'
        ,{refreshInterval:60000}
    )

    var btcTimeLabel:string[] = new Array(span)
    var btcChangeRate:number[] = new Array(span)
    var btcCloseRate:number[] = new Array(span)
    var btcVolRate:number[] = new Array(span)

    //var altTimeLabel:Date[] = new Array(500)
    var altChangeRate:number[] = new Array(span)
    var altCloseRate:number[] = new Array(span)
    var altVolRate:number[] = new Array(span)

    var i = 0
    var maxClose = 0
    var minClose = 0
    _.forEach(btcInfo,row=>{
        btcTimeLabel[i] = new Date(row[0]).toLocaleString()
        btcChangeRate[i] = row[4]/row[1]*100-100
        btcCloseRate[i] = row[4]/btcInfo[0][4]*100-100
        btcVolRate[i] = row[7]/btcInfo[0][7]
        if(maxClose < btcCloseRate[i]){ maxClose = btcCloseRate[i]}
        if(minClose > btcCloseRate[i]){ maxClose = btcCloseRate[i]}
        i++
    })
    i=0
    if(!isUndefined(altInfo) && !isNull(altInfo)){
        if(altInfo.length>0){
            _.forEach(altInfo,row=>{
                //altTimeLabel[i] = new Date(row[0])
                altChangeRate[i] = row[4]/row[1]*100-100
                altCloseRate[i] = row[4]/altInfo[0][4]*100-100
                altVolRate[i] = row[7]/altInfo[0][7]
                if(maxClose < altCloseRate[i]){ maxClose = altCloseRate[i]}
                if(minClose > altCloseRate[i]){ maxClose = altCloseRate[i]}
                i++
            })
        
        }
    }
    const dataCR = {
        labels: btcTimeLabel,
        datasets: [
            {
                label: 'BTCUSDT Change Rate',
                data: btcChangeRate,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: 1,
            },
            {
                label: alt+'USDT Change Rate',
                data: altChangeRate,
                backgroundColor: ['rgba(54, 162, 235, 0.2)',],
                borderColor: ['rgba(54, 162, 235, 1)',],
                borderWidth: 1,
            },
        ]

    }
    const dataPR = {
        labels: btcTimeLabel,
        datasets: [
            {
                type:'line',
                label: 'BTCUSDT Close Price Rate',
                data: btcCloseRate,
                backgroundColor: ['rgba(255, 205, 86, 0.2)',],
                borderColor: ['rgba(255, 205, 86, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-CR',
            },
            {
                type:'line',
                label: alt+'USDT Close Price Rate',
                data: altCloseRate,
                backgroundColor: ['rgba(75, 192, 192, 0.2)',],
                borderColor: ['rgba(75, 192, 192, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-CR',
            },
            {
                type:'bar',
                label: 'BTCUSDT Vol Rate',
                data: btcVolRate,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-Vol',
            },
            {
                type:'bar',
                label: alt+'USDT Vol Rate',
                data: altVolRate,
                backgroundColor: ['rgba(54, 162, 235, 0.2)',],
                borderColor: ['rgba(54, 162, 235, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-Vol',
            }
        ]

    }
    const optionsCR = {
        scales: {
            xAxes:[{
                ticks:{
                    display:true,
                },
                scaleLabel:{
                    display:false,
                }
            }],
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                },
            ]
        }
    }
    const optionsPR = {
        scales: {
            xAxes:[{
                ticks:{
                    display:true,
                },
                scaleLabel:{
                    display:false,
                }
            }],
            yAxes: [
                {
                    id:"y-axis-CR",
                    ticks: {
                        beginAtZero: true,
                    }
                },
                {
                    id:"y-axis-Vol",
                    ticks: {
                        beginAtZero: true,
                    }
                },
            ]
        }
    }
    return (
        <>
            <TextField required id="standard-required" label="Symbol" defaultValue="ALICE" onChange={event=>setAlt(event.target.value)} />
            <br/>
            <Typography>Span : {Number(span)}時間</Typography>
            <Slider
                defaultValue={72}
                step={4}
                marks
                min={12}
                max={500}
                valueLabelDisplay="auto"
                value={typeof span === 'number' ? Number(span):0 }
                onChange={handleSliderChange}
            />
            期間の左端を基準としての価格推移<br/>
            棒グラフは出来高比率(左端基準)
            <Line
                data={dataPR}
                width={100}
                height={50}
                options={optionsPR}
            />
            変動率の比較
            <Line
                data={dataCR}
                width={100}
                height={50}
                options={optionsCR}
            />
        </>
    );
};

const CompareChangeRatePage: React.FC<Props> = (props) => {
    return (
        <GenericTemplate title={'BTCとALTの比較'}>
            <CompareBtc2Alt />
        </GenericTemplate>
    );
}

export default withRouter(CompareChangeRatePage);
