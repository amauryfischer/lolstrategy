import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import App from "App";
import Part1 from "Part1";
import Part2 from "Part2";
import Part3 from "Part3"
import Secret from "Secret"
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
    <Route path="/app" component={App} />
    <Route path="/part1" component={Part1} />
    <Route path="/part2" component={Part2} />
    <Route path="/part3" component={Part3} />
    <Route path="/partsecret" component={Secret} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
