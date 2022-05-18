import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Lesson from "./Lesson";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      <Lesson />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
