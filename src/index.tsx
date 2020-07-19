import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import WebFont from "webfontloader";
import { App } from "./App";

WebFont.load({
  google: {
    families: ["Work Sans"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
