import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import TagManager from "react-gtm-module";
import Aos from "aos";

// Pages
import Home from "./components/Home";
import Not from "./components/Not";
import Masterclass from "./components/Masterclass";
import WatchMasterclass from "./components/WatchMasterclass";

Aos.init({
	delay: 100,
	offset: 150,
	once: true,
	duration: 1000,
});

const tagManagerArgs = {
	gtmId: "GTM-MFXND56",
};
TagManager.initialize(tagManagerArgs);

class App extends React.Component {
	render() {
    return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/masterclass" component={Masterclass} />
				<Route exact path="/masterclass/:id" component={WatchMasterclass} />
				<Route component={Not} />
			</Switch>
		</BrowserRouter>
	);
}
}

export default App;
