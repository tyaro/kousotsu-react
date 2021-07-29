import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import KstPage from "./components/pages/KstPage";
import ChangeRatePage from "./components/pages/ChangeRatePage";
import ChangeRateSpotPage from "./components/pages/ChangeRateSpotPage";
import HomePage from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Kst" component={KstPage} exact />
        <Route path="/CRList" component={ChangeRatePage} exact />
        <Route path="/CRListSpot" component={ChangeRateSpotPage} exact />
        <Route path="/" component={HomePage} exact />
        <Route component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;