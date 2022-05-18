import { Routes, Route } from "react-router-dom";
import App from "./App";

function Main1() {
  const style = {
    main: {
      height: "100vh",
      textAlign: "center",
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    },
  };
  return (
    <div>
      <h1 style={style.main}>Main</h1>
    </div>
  );
}

export default Main1;
