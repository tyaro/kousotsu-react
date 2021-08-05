import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import KstPage from "./components/pages/KstPage";
import ChangeRatePage from "./components/pages/ChangeRatePage";
import ChangeRateSpotPage from "./components/pages/ChangeRateSpotPage";
import HomePage from "./components/pages/HomePage";
import btcPage from "./components/pages/btcPage";
import HighLowAnalysisPage from "./components/pages/HighLowAnalysisPage";
import CompareChangeRatePage from "./components/pages/CompareChangeRatePage";
import TestPage from "./components/pages/TestPage";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Kst" component={KstPage} exact />
        <Route path="/kojiki" component={btcPage} exact />
        <Route path="/CRList" component={ChangeRatePage} exact />
        <Route path="/CRListSpot" component={ChangeRateSpotPage} exact />
        <Route path="/HighLowAnalysis" component={HighLowAnalysisPage} exact />
        <Route path="/CompareChangeRate" component={CompareChangeRatePage} exact />
        <Route path="/Test" component={TestPage} exact />
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