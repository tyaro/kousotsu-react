import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/HomePage";
import KousotsuPage from "./components/pages/KousotsuPage";
import ChangeRatePage from "./components/pages/ChangeRatePage";


const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/kousotsu" component={KousotsuPage} exact />
        <Route path="/CRList" component={ChangeRatePage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;