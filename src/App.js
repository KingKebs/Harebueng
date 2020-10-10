import React from "react";
import Home from "./Home";
import Product from "./Product";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="./checkout">
            <h2>Checkout page</h2>
            <Checkout />
          </Route>
          <Route path="./login">
            <h2>Login page</h2>
          </Route>
          {/* this is the default route  */}
          <Route path="/">
            <Header />
            <h2>Homepage</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
