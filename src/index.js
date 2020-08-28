import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Styles
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

// Google analytics
import TagManager from "react-gtm-module";
const tagManagerArgs = {
  gtmId: "GTM-MFXND56",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(<App />, document.getElementById("root"));
