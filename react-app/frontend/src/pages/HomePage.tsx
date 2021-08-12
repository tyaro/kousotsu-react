import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import CRRank from '../components/modules/CRRanking/Ranking';
import ADRRank from '../components/modules/ADRRanking/Ranking';
import TrendInfo from '../components/modules/TrendInfo';
import CRMedian from '../components/atomos/CRMedian';
import CRInfo from '../components/atomos/CRInfoBTCALT';

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title={""}>
      <>
      <tr>
      <td><TrendInfo symbol={'BTCUSDT'}/></td>
      <td><TrendInfo symbol={'BTCDOMUSDT'}/></td>
      <td><TrendInfo symbol={'ETHUSDT'}/></td>
      </tr>
      <div><CRMedian /></div>
      <CRInfo symbol={'BTCUSDT'} />
      <tr>
      <td><CRRank /></td>
      <td><ADRRank /></td>
      </tr>
      <br/>
      <div>ホーム画面はランキング形式のダッシュボードにする予定</div>
      <div>モバイル版は<a href='https://kousotsu-py.info/mobile' style={{color:"#FFFFFF"}}>こちら</a></div>
      </>
    </GenericTemplate>
  );
};

export default HomePage;