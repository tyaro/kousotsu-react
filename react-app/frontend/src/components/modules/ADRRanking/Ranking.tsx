import { Card } from '@material-ui/core';
import { Accordion,AccordionDetails,AccordionSummary,Typography } from '@material-ui/core';
import useSWR from 'swr';
import Ranking from './Dashboard';
import Ranking2 from './List';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Dashboard = () => {
    const {data : info} = useSWR(
      'https://kousotsu-py.info/cryptoinfo/API/ADRRank/ARR0'
      ,{refreshInterval:30000}
  )
  return (
    <>
    <Card style={{padding:5,backgroundColor:'#111111',width:800}}>
        <Typography style={{padding:5,fontSize:'1.5em'}}>ボラティリティランキング</Typography>
        <tr>
        <td>
        <Card style={{backgroundColor:"black",padding:5}}>
        <Typography style={{backgroundColor:'blue',paddingLeft:5}}>本日の最大ボラティリティ(%)</Typography>
        <Ranking data={info}/>
        </Card>
        </td>
        <td>
        <Card style={{backgroundColor:"black",padding:5}}>
        <Ranking2 />
        </Card>
        </td>
        </tr>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography style={{paddingLeft:5,fontSize:'1em'}}>
          <div>Today(%)：日本時間9時〜の最大ボラティリティ率</div>
          <div>AVG(%)：最大ボラティリティ率の平均値</div>
          <div>計算方法：ADRインジケータ(1日足)を％表記にして表示</div>
          <div>ADR:1日足の高値ー安値の平均値</div>
          <div>ADRE：平均処理を指数平滑化させて計算したもの(直近の変動が強く反映される)</div>
          <div>---グラフについて---</div>
          <div>Today(%):1時間の価格トレンド(30時間)</div>
          <div>AVG(％):1日の価格トレンド(30日)</div>
          <div>最終値が平均より上だと緑、下だと赤にグラフの色が変わる</div>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </Card>
    </>
  )
}

export default Dashboard;