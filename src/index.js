import React from "react";
import ReactDOM from "react-dom";
import "./animations/animations.css";
import App from "./App";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
