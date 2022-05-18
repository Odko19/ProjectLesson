import { Routes, Route } from "react-router-dom";
import App from "./App";
import Main1 from "./Main1";
import Header from "./componant/Header";
import Register from "./componant/Register";

function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main1 />}></Route>
        <Route path="/login" element={<App />}></Route>
        <Route path="/Register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default Main;
