import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Pages
import Home from "./components/Home";
import Art from "./components/Art";
import Atra from "./components/Atra";
import Nuka from "./components/Nuka";
import Sibiu from "./components/Sibiu";
import Not from "./components/Not";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/art-cafe" component={Art} />
          <Route path="/atra" component={Atra} />
          <Route path="/nuka" component={Nuka} />
          <Route path="/sibiu" component={Sibiu} />
          <Route component={Not} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
