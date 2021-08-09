import React ,{useState} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import _,{isUndefined,isNull} from 'lodash';
import Slider from '@material-ui/core/Slider';
import toast, { Toaster } from 'react-hot-toast'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
type Props = {} & RouteComponentProps<{}>;

const CRBTCDashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/ChangeRateSpotBtc'
    ,{refreshInterval:3000}
    )
  
  const percentDataStyle = (params:Number) => {
    var c = '#FFFFFF'
    if (params < 0){c = '#E35561'}
    if (params > 0){c = '#5CC686'}
    return (
      <div style={{color:c}}>{params}%</div>
    )
  }
  const linkCol = (value:string) =>{
    var url = 'https://www.binance.com/ja/trade/' + value + '_BTC'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }
  const slinePrice = (value:any) =>{
    var lastPrice = value.VALUE
    var data = value.TREND
    return(
      <Box width={100} height={40}>
        <div>{lastPrice}</div>
        <Sparklines data={data}>
          <SparklinesLine />
        </Sparklines>
      </Box>
    )
  }
  const [notifyVal,setNotifyVal] = React.useState<number | Array<number>>(3);
  const [notifyVal2,setNotifyVal2] = React.useState<number | Array<number>>(-3);

  const handleSliderChange = (event: any, newValue: number | Array<number>) => {
    setNotifyVal(newValue);
  };
  const handleSliderChange2 = (event: any, newValue: number | Array<number>) => {
    setNotifyVal2(newValue);
  };
  const [dispTime,setDispTime] = React.useState<number | Array<number>>(5000);
  const handleTimeSliderChange = (event: any, newValue: number | Array<number>) => {
    var val = Number(newValue) *1000
    setDispTime(val);
  };

  const [selectedValue, setSelectedValue] = React.useState('5min');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  // 通知設定
  const [hasSound, setHasSound] = useState(false);
 
  const audio = new Audio("./piyo.mp3")
 
  const notifySound = () =>{
    if(!audio.onplaying){
      if (hasSound) {
        // 音再生
        console.log('音声出力！！')
        audio.play();
      }
    }
  }

  var hotUp = _.filter(info,row => {
    var value = row.CRate05
    if(selectedValue==='1min'){value = row.CRate01}
    if(selectedValue==='5min'){value = row.CRate05}
    if(selectedValue==='10min'){value = row.CRate10}
    if(selectedValue==='30min'){value = row.CRate30}
    return value > Number(notifyVal)
  })
  var hotDown = _.filter(info,row => {
    var value = row.CRate05
    if(selectedValue==='1min'){value = row.CRate01}
    if(selectedValue==='5min'){value = row.CRate05}
    if(selectedValue==='10min'){value = row.CRate10}
    if(selectedValue==='30min'){value = row.CRate30}
    return row.CRate05 < Number(notifyVal2)})

  if(isUndefined(hotUp) || isNull(hotUp)){
  }else{
    if(hotUp.length>0){
      notifySound()
      console.log(hotUp)
      _.forEach(hotUp,row=>{
        var value = row.CRate05
        if(selectedValue==='1min'){value = row.CRate01}
        if(selectedValue==='5min'){value = row.CRate05}
        if(selectedValue==='10min'){value = row.CRate10}
        if(selectedValue==='30min'){value = row.CRate30}
        //var msg:string = row.pair + " " + selectedValue + " ChangeRate:" + value + "%";
        var pair = String(row.pair).replace("BTC","_BTC")
        return (
          toast.success((t)=>(
            <span>
              <a target='_blank' href={'https://www.binance.com/ja/trade/'+pair}>{row.pair}</a> {selectedValue} ChangeRate: {value} %
            </span>
          ),{duration:Number(dispTime),position:'bottom-left'})
        )
      })
    }
  }
  if(isUndefined(hotDown) || isNull(hotDown) ){
  }else{
    if(hotDown.length>0){
      notifySound()
      console.log(hotDown)
      _.forEach(hotDown,row=>{
          var msg:string = row.pair + " " + "5min ChangeRate:" + row.CRate05;
          var pair = String(row.pair).replace("BTC","_BTC")
          return (
            toast.success((t)=>(
              <span>
                <a target='_blank' href={'https://www.binance.com/ja/trade/'+pair}>{row.pair}</a> 5min ChangeRate: {row.CRate05} %
              </span>
            ),{duration:Number(dispTime),position:'bottom-left'})
          )
        }
      )
    }
  }
  
  return(
    <>
      <Toaster/>
      <MaterialTable
      columns={[
        { 
          title: 'Symbol',
          field: 'pair',
          render: row => linkCol(row.pair.replace('BTC','')),
          type:'string',
        },
        { 
          title: 'Price(BTC)', 
          field: 'price',
          render: row => slinePrice(row.price),
          customSort:(a,b)=>(a.price.VALUE - b.price.VALUE)
        },
        {
          title: '1min', 
          field: 'CRate01',
          render: row => percentDataStyle(row.CRate01),
          customSort:(a,b)=>(a.CRate01 - b.CRate01)
        },
        {
          title: '5min', 
          field: 'CRate05',
          render: row => percentDataStyle(row.CRate05),
          customSort:(a,b)=>(a.CRate05 - b.CRate05)
        },
        { 
          title: '10min', 
          field: 'CRate10',
          render: row => percentDataStyle(row.CRate10),
          customSort:(a,b)=>(a.CRate10 - b.CRate10)
        },
        { 
          title: '30min', 
          field: 'CRate30', 
          render: row => percentDataStyle(row.CRate30),
          customSort:(a,b)=>(a.CRate30 - b.CRate30)
        },
        { 
          title: '60min', 
          field: 'CRate60',
          render: row => percentDataStyle(row.CRate60),
          customSort:(a,b)=>(a.CRate60 - b.CRate60)
        },
        { 
          title: '4Hour', 
          field: 'CRate240', 
          render: row => percentDataStyle(row.CRate240),
          customSort:(a,b)=>(a.CRate240 - b.CRate240)
        },
        { 
          title: '6Hour', 
          field: 'CRate360',
          render: row => percentDataStyle(row.CRate360),
          customSort:(a,b)=>(a.CRate360 - b.CRate360)
        },
        { 
          title: '8Hour', 
          field: 'CRate480',
          render: row => percentDataStyle(row.CRate480),
          customSort:(a,b)=>(a.CRate480 - b.CRate480)
        },
        { 
          title: '12Hour', 
          field: 'CRate720', 
          render: row => percentDataStyle(row.CRate720),
          customSort:(a,b)=>(a.CRate720 - b.CRate720)
        },
        /*
        { 
          title: 'CalcTime', 
          field: 'calcTime',
          type:'datetime',
        },
        */
      ]}
      data={info}
      options={{
        showTitle: false,
        paging:false,
        rowStyle:{
          height:10,
        },
        maxBodyHeight:800,      
        headerStyle:{
          position:'sticky',top:0,
        },
        searchFieldAlignment:'left',

      }}
    />
    <br/>
    <Box style={{width:300}}>
      <Typography>Notification Change Rate Up: {notifyVal}%</Typography>
      <Slider
        defaultValue={3}
        step={0.5}
        marks
        min={0.5}
        max={10}
        valueLabelDisplay="auto"
        value={typeof notifyVal === 'number' ? notifyVal:0 }
        onChange={handleSliderChange}
      />
      <Typography>Notification Change Rate Down: {notifyVal2}%</Typography>
      <Slider
        defaultValue={-3}
        step={0.5}
        marks
        min={-10}
        max={-0.5}
        valueLabelDisplay="auto"
        value={typeof notifyVal2 === 'number' ? notifyVal2:0 }
        onChange={handleSliderChange2}
      />
      <Typography>Display Time : {Number(dispTime)/1000}</Typography>
      <Slider
        defaultValue={5}
        step={1}
        marks
        min={1}
        max={30}
        valueLabelDisplay="auto"
        value={typeof dispTime === 'number' ? Number(dispTime)/1000:0 }
        onChange={handleTimeSliderChange}
      />
      <div>
      <FormControl component="fieldset">
      <FormLabel component="legend">tartget</FormLabel>
      <RadioGroup row aria-label="target" name="1min" value={selectedValue} onChange={handleChange}>
        <FormControlLabel value="1min" control={<Radio />} label="1min" />
        <FormControlLabel value="5min" control={<Radio />} label="5min" />
        <FormControlLabel value="10min" control={<Radio />} label="10min" />
        <FormControlLabel value="30min" control={<Radio />} label="30min" />
      </RadioGroup>
    </FormControl>
        {selectedValue}
      </div>
      <div>
        <button onClick={() => setHasSound((prev) => !prev)}>
          {hasSound ? "Sound On" : "Sound Off"}
        </button>
      </div>
    </Box>
  </>
  )
}

const ChangeRateSpotBtcPage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'変動率(BTC)'}>
      <CRBTCDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(ChangeRateSpotBtcPage);

