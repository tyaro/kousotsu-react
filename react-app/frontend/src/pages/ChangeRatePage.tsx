import React ,{useState,useEffect} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import GenericTemplate from '../templates/GenericTemplate';
import useSWR  from 'swr';
import _, { isNull, isUndefined, values } from 'lodash';
import {Box,Card,Slider,Typography} from '@material-ui/core'
import toast, { Toaster } from 'react-hot-toast'
import CRList from '../components/block/CRList';
import TrendInfo from '../components/modules/TrendInfo';

type Props = {} & RouteComponentProps<{}>;

const CRDashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/API/CR'
    ,{refreshInterval:3000}
  )
  const [notifyVal,setNotifyVal] = React.useState<number | Array<number>>(3);

  const handleSliderChange = (event: any, newValue: number | Array<number>) => {
    setNotifyVal(newValue);
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

  const [dispTime,setDispTime] = React.useState<number | Array<number>>(5000);
  const handleTimeSliderChange = (event: any, newValue: number | Array<number>) => {
    var val = Number(newValue) *1000
    setDispTime(val);
  };

  var btcInfo = _.filter(info,row => {return row.pair === 'BTCUSDT'})
  var hotUp = _.filter(info,row => {return row.CRate05 > Number(notifyVal)})
  var hotDown = _.filter(info,row => {return row.CRate05 < -1*Number(notifyVal)})

  if(isUndefined(hotUp) || isNull(hotUp)){
  }else{
    if(hotUp.length>0){
      notifySound()
      console.log(hotUp)
      _.forEach(hotUp,row=>{
          var msg:string = row.pair + " " + "5min ChangeRate:" + row.CRate05;
          return (
            toast.success((t)=>(
              <span>
                <a target='_blank' href={'https://www.binance.com/ja/futures/'+row.pair}>{row.pair}</a> 5min ChangeRate: {row.CRate05} %
              </span>
            ),{duration:Number(dispTime),position:'bottom-left'})
          )
        }
      )
    }
  }
  if(isUndefined(hotDown) || isNull(hotDown) ){
  }else{
    if(hotDown.length>0){
      notifySound()
      console.log(hotDown)
      _.forEach(hotDown,row=>{
          var msg:string = row.pair + " " + "5min ChangeRate:" + row.CRate05;
          return (
            toast.success((t)=>(
              <span>
                <a target='_blank' href={'https://www.binance.com/ja/futures/'+row.pair}>{row.pair}</a> 5min ChangeRate: {row.CRate05} %
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
      <td>
      <Card style={{width:200,padding:5,backgroundColor:'#111111'}}><TrendInfo symbol={'BTCUSDT'}/></Card>
      </td>
      <td>　</td>
      <td><Card style={{width:200,padding:5,backgroundColor:'#111111'}}><TrendInfo symbol={'ETHUSDT'}/></Card>
      </td><br/>
      <CRList data={info}/>
    <br/>
    <Box style={{width:300}}>
    <Typography>Notification Change Rate : {notifyVal}%</Typography>
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
        <button onClick={() => setHasSound((prev) => !prev)}>
          {hasSound ? "Sound On" : "Sound Off"}
        </button>
      </div>

    </Box>
  </>
  )
}

const ChangeRateSpotPage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'変動率(先物)'}>
      <CRDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(ChangeRateSpotPage);

