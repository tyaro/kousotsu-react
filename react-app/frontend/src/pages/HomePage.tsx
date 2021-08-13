import React from "react";
import GenericTemplate from "../templates/GenericTemplate";
import CRRank from '../components/modules/CRRanking/Ranking';
import ADRRank from '../components/modules/ADRRanking/Ranking';
import TrendInfo from '../components/modules/TrendInfo';
import CRMedian from '../components/modules/CRRatio/CRRatio';
import CRInfo from '../components/atomos/CRInfoBTCALT';
import CRMTrend from '../components/modules/CRMEvaluation/Dashboard';
import { Typography } from "@material-ui/core";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title={""}>
      <tr>
          <td>
            <tr>
              <td><TrendInfo symbol={'BTCUSDT'}/></td>
              <td><TrendInfo symbol={'BTCDOMUSDT'}/></td>
              <td><TrendInfo symbol={'ETHUSDT'}/></td>
            </tr>
            <tr >
              <td colSpan={3}>
              <CRMedian />
              <CRInfo symbol={'BTCUSDT'} />
              </td>
            </tr>
          </td>
          <td rowSpan={1}>
          <CRMTrend />
          </td>
      </tr>
      <tr>
      <td><CRRank /></td>
      <td><ADRRank /></td>
      </tr>
      <br/><Typography>
      モバイル版は<a href='https://kousotsu-py.info/mobile' style={{color:"#FFFFFF"}}>こちら</a>
      </Typography>
    </GenericTemplate>
  );
};

export default HomePage;