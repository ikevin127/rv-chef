import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

// Helmet Async
import { HelmetProvider } from "react-helmet-async";

// Pages
import Home from "./components/Home";
import Not from "./components/Not";

class App extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Not} />
          </Switch>
        </BrowserRouter>
      </HelmetProvider>
    );
  }
}

export default App;
