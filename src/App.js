import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Not from "./components/Not";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Not} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
