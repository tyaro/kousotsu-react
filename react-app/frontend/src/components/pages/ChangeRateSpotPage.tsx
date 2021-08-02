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


type Props = {} & RouteComponentProps<{}>;

const CRDashBoard = () => {
  const {data : info} = useSWR(
    'https://kousotsu-py.info/cryptoinfo/json/ChangeRateSpot'
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
    var url = 'https://www.binance.com/ja/trade/' + value + '_USDT'
    return (
      <a target='_blank' href={url} style={{color:"#FFFFFF"}}>{value}</a>
    )
  }

  const [notifyVal,setNotifyVal] = React.useState<number | Array<number>>(3);

  const handleSliderChange = (event: any, newValue: number | Array<number>) => {
    setNotifyVal(newValue);
  };
  const [dispTime,setDispTime] = React.useState<number | Array<number>>(5000);
  const handleTimeSliderChange = (event: any, newValue: number | Array<number>) => {
    var val = Number(newValue) *1000
    setDispTime(val);
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

  var hotUp = _.filter(info,row => {return row.CRate05 > Number(notifyVal)})
  var hotDown = _.filter(info,row => {return row.CRate05 < -1*Number(notifyVal)})
  console.log(dispTime)
  if(isUndefined(hotUp) || isNull(hotUp)){
  }else{
    if(hotUp.length>0){
      notifySound()
      console.log(hotUp)
      _.forEach(hotUp,row=>{
          var msg:string = row.pair + " " + "5min ChangeRate:" + row.CRate05;
          var pair = String(row.pair).replace("USDT","_USDT")
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
  if(isUndefined(hotDown) || isNull(hotDown) ){
  }else{
    if(hotDown.length>0){
      notifySound()
      console.log(hotDown)
      _.forEach(hotDown,row=>{
          var msg:string = row.pair + " " + "5min ChangeRate:" + row.CRate05;
          var pair = String(row.pair).replace("USDT","_USDT")
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
          render: row => linkCol(row.pair.replace('USDT','')),
          type:'string',
        },
        { 
          title: 'Price', 
          field: 'price',
          render: row => ('$'+row.price),
          customSort:(a,b)=>(a.price - b.price)
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

const ChangeRatePage: React.FC<Props> = (props) => {
  
  return (
    <GenericTemplate title={'変動率(現物)'}>
      <CRDashBoard/>
    </GenericTemplate>
  );
};

export default withRouter(ChangeRatePage);

