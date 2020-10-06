import React from "react";
import Home from "./Home";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="./checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
