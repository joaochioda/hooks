import React from "react";
import CallBack from "./callBack";
import CustomHook from "./customHook";
import UseContext from "./useContext";
import UseMemo from "./useMemo";

import Header from "./header";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header>
        <Route path="/callback">
          <CallBack />
        </Route>
        <Route path="/customhook">
          <CustomHook />
        </Route>
        <Route path="/usecontext">
          <UseContext />
        </Route>
        <Route path="/usememo">
          <UseMemo />
        </Route>
      </Header>
    </Router>
  );
}

export default App;
