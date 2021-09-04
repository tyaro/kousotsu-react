import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import KstPage from "./pages/KstPage";
import ChangeRatePage from "./pages/ChangeRatePage";
import ChangeRateSpotPage from "./pages/ChangeRateSpotPage";
import ChangeRateSpotBtcPage from "./pages/ChangeRateSpotBtcPage";
import HomePage from "./pages/HomePage";
import btcPage from "./pages/btcPage";
import HighLowAnalysisPage from "./pages/HighLowAnalysisPage";
import CompareChangeRatePage from "./pages/CompareChangeRatePage";
import TestPage from "./pages/TestPage";
import TechnicalPage from "./pages/TechnicalPage";
import EvaluationPage from "./pages/Evaluation";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Kst" component={KstPage} exact />
        <Route path="/Donate" component={btcPage} exact />
        <Route path="/CRList" component={ChangeRatePage} exact />
        <Route path="/CRListSpot" component={ChangeRateSpotPage} exact />
        <Route path="/CRListSpotBtc" component={ChangeRateSpotBtcPage} exact />
        <Route path="/HighLowAnalysis" component={HighLowAnalysisPage} exact />
        <Route path="/CompareChangeRate" component={CompareChangeRatePage} exact />
        <Route path="/Evaluation" component={EvaluationPage} exact />
        <Route path="/Test" component={TestPage} exact />
        <Route path="/Technical" component={TechnicalPage} exact />
        <Route path="/mobile" component={()=>{
          window.location.href = 'https://kousotsu-py.info/mobile';
          return null;
        }}/>
        <Route path="/" component={HomePage} exact />
        <Route component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;