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

    const [alt1,setAlt1] = useState('ALICE')
    const [alt2,setAlt2] = useState('')
    const [alt3,setAlt3] = useState('')
    const [span,setSpan] = useState(72)

    const handleSliderChange = (event: any, newValue: number | Array<number>) => {
        setSpan(Number(newValue));
      };

    const {data : btcInfo} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol=BTCUSDT&limit='+span+'&interval=1h'
        ,{refreshInterval:600000}
    )
    const {data : altInfo1} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol='+alt1+'USDT&limit='+span+'&interval=1h'
        ,{refreshInterval:600000}
    )
    const {data : altInfo2} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol='+alt2+'USDT&limit='+span+'&interval=1h'
        ,{refreshInterval:600000}
    )
    const {data : altInfo3} = useSWR(
        'https://fapi.binance.com/fapi/v1/klines?symbol='+alt3+'USDT&limit='+span+'&interval=1h'
        ,{refreshInterval:600000}
    )

    var btcTimeLabel:string[] = new Array(span)
    var btcPrice:number[] = new Array(span)
    var btcChangeRate:number[] = new Array(span)
    var btcCloseRate:number[] = new Array(span)
    var btcVolRate:number[] = new Array(span)

    //var altTimeLabel:Date[] = new Array(500)
    var altPrice1:number[] = new Array(span)
    var altChangeRate1:number[] = new Array(span)
    var altCloseRate1:number[] = new Array(span)
    var altVolRate1:number[] = new Array(span)
    //var altTimeLabel:Date[] = new Array(500)
    var altPrice2:number[] = new Array(span)
    var altChangeRate2:number[] = new Array(span)
    var altCloseRate2:number[] = new Array(span)
    var altVolRate2:number[] = new Array(span)
    //var altTimeLabel:Date[] = new Array(500)
    var altPrice3:number[] = new Array(span)
    var altChangeRate3:number[] = new Array(span)
    var altCloseRate3:number[] = new Array(span)
    var altVolRate3:number[] = new Array(span)

    var i = 0
    _.forEach(btcInfo,row=>{
        btcTimeLabel[i] = new Date(row[0]).toLocaleString()
        btcPrice[i] = row[4]
        btcChangeRate[i] = row[4]/row[1]*100-100
        btcCloseRate[i] = row[4]/btcInfo[0][4]*100-100
        btcVolRate[i] = row[7]/btcInfo[0][7]
        i++
    })
    i=0
    if(!isUndefined(altInfo1) && !isNull(altInfo1)){
        if(altInfo1.length>0){
            _.forEach(altInfo1,row=>{
                //altTimeLabel[i] = new Date(row[0])
                altPrice1[i] = row[4]
                altChangeRate1[i] = row[4]/row[1]*100-100
                altCloseRate1[i] = row[4]/altInfo1[0][4]*100-100
                altVolRate1[i] = row[7]/altInfo1[0][7]
                i++
            })
        }
    }
    i=0
    if(!isUndefined(altInfo2) && !isNull(altInfo2)){
        if(altInfo2.length>0){
            _.forEach(altInfo2,row=>{
                //altTimeLabel[i] = new Date(row[0])
                altPrice2[i] = row[4]
                altChangeRate2[i] = row[4]/row[1]*100-100
                altCloseRate2[i] = row[4]/altInfo2[0][4]*100-100
                altVolRate2[i] = row[7]/altInfo2[0][7]
                i++
            })
        }
    }
    i=0
    if(!isUndefined(altInfo3) && !isNull(altInfo3)){
        if(altInfo3.length>0){
            _.forEach(altInfo3,row=>{
                //altTimeLabel[i] = new Date(row[0])
                altPrice3[i] = row[4]
                altChangeRate3[i] = row[4]/row[1]*100-100
                altCloseRate3[i] = row[4]/altInfo3[0][4]*100-100
                altVolRate3[i] = row[7]/altInfo3[0][7]
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
                label: alt1+'USDT Change Rate',
                data: altChangeRate1,
                backgroundColor: ['rgba(255, 159, 64, 0.2)',],
                borderColor: ['rgba(255, 159, 64, 1)',],
                borderWidth: 1,
            },
            {
                label: alt2+'USDT Change Rate',
                data: altChangeRate2,
                backgroundColor: ['rgba(255, 205, 86, 0.2)',],
                borderColor: ['rgba(255, 205, 86, 1)',],
                borderWidth: 1,
            },
            {
                label: alt3+'USDT Change Rate',
                data: altChangeRate3,
                backgroundColor: ['rgba(75, 192, 192, 0.2)',],
                borderColor: ['rgba(75, 1192, 192, 1)',],
                borderWidth: 1,
            },
        ]
    }
    const dataPR = {
        labels: btcTimeLabel,
        datasets: [
            {
                label: 'BTCUSDT Close Price Rate',
                data: btcCloseRate,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: 1,
            },
            {
                label: alt1+'USDT Close Price Rate',
                data: altCloseRate1,
                backgroundColor: ['rgba(255, 159, 64, 0.2)',],
                borderColor: ['rgba(255, 159, 64, 1)',],
                borderWidth: 1,
            },
            {
                label: alt2+'USDT Close Price Rate',
                data: altCloseRate2,
                backgroundColor: ['rgba(255, 205, 86, 0.2)',],
                borderColor: ['rgba(255, 205, 86, 1)',],
                borderWidth: 1,
            },
            {
                label: alt3+'USDT Close Price Rate',
                data: altCloseRate3,
                backgroundColor: ['rgba(75, 192, 192, 0.2)',],
                borderColor: ['rgba(75, 1192, 192, 1)',],
                borderWidth: 1,
            },
        ]
    }
    const dataPrice = {
        labels: btcTimeLabel,
        datasets: [
            {
                label: 'BTCUSDT Close Price',
                data: btcPrice,
                backgroundColor: ['rgba(255, 99, 132, 0.2)',],
                borderColor: ['rgba(255, 99, 132, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-btc',
            },
            {
                label: alt1+'USDT Close Price',
                data: altPrice1,
                backgroundColor: ['rgba(255, 159, 64, 0.2)',],
                borderColor: ['rgba(255, 159, 64, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-alt1',
            },
            {
                label: alt2+'USDT Close Price',
                data: altPrice2,
                backgroundColor: ['rgba(255, 205, 86, 0.2)',],
                borderColor: ['rgba(255, 205, 86, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-alt2',
            },
            {
                label: alt3+'USDT Close Price',
                data: altPrice3,
                backgroundColor: ['rgba(75, 192, 192, 0.2)',],
                borderColor: ['rgba(75, 1192, 192, 1)',],
                borderWidth: 1,
                yAxisID:'y-axis-alt3',
            },
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
                    ticks: {
                        beginAtZero: true,
                    }
                },
            ]
        }
    }
    const optionsPrice = {
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
                    id:'y-axis-btc',
                    ticks: {
                        beginAtZero: true,
                    }
                },
                {   
                    id:'y-axis-alt1',
                    ticks: {
                        beginAtZero: true,
                    }
                },
                {   
                    id:'y-axis-alt2',
                    ticks: {
                        beginAtZero: true,
                    }
                },
                {   
                    id:'y-axis-alt3',
                    ticks: {
                        beginAtZero: true,
                    }
                },
            ]
        }
    }
    return (
        <>
            <TextField required id="standard-required" label="Symbol1" defaultValue="ALICE" onChange={event=>setAlt1(event.target.value)} />
            
            <TextField required id="standard-required" label="Symbol2" defaultValue="" onChange={event=>setAlt2(event.target.value)} />
            
            <TextField required id="standard-required" label="Symbol3" defaultValue="" onChange={event=>setAlt3(event.target.value)} />
            
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
            <Typography>価格推移</Typography>
            <Line
                data={dataPrice}
                width={100}
                height={50}
                options={optionsPrice}
            />
            <Typography>変動率の比較</Typography>
            <Line
                data={dataCR}
                width={100}
                height={50}
                options={optionsCR}
            />
            <Typography>変動比較</Typography>
            期間の左端を基準0％としての価格変動推移<br/>
            <Line
                data={dataPR}
                width={100}
                height={50}
                options={optionsPR}
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
