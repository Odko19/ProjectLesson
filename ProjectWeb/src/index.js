import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import Lesson from "./Lesson";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import UseParam from "../src/UseParam";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* <App /> */}
      {/* <Lesson /> */}
      <UseParam />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
