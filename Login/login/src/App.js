import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLog } from "./context/LogContext";

function App() {
  // const [username, setUsername] = useState();
  const [log, setLog] = useLog();

  // console.log({ status: "Амжилттай нэвтэрлээ." });
  let navigate = useNavigate();

  function handlerButton(e) {
    e.preventDefault();
    let value = {
      email: e.target.elements.email.value,
      password: e.target.elements.pass.value,
    };
    loginUser(value);
    setLog(value);
    localStorage.setItem("login", JSON.stringify(value));
  }

  const loginUser = async (namePass) => {
    return fetch("https://dev-api.mstars.mn/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(namePass),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status == true) {
          toast(res.status);
        } else {
          toast(res.status);
        }

        // console.log(res);
        // if (res.success == true) {
        //   navigate("/login");
        // } else {
        //   navigate("/");
        // }
      });
  };

  // const registerHandler = async (event) => {
  //   event.preventDefault();
  //   const token = await registerUser({
  //     email: username,
  //     password: password,
  //     name: "asas",
  //     address: "asas",
  //   });
  // };

  return (
    <div className="App">
      {/* <Toast /> */}
      <ToastContainer />

      <h1 className="mt-3">Login</h1>
      <form onSubmit={handlerButton}>
        <div className="form-group">
          <label htmlFor="">Email</label> <br />
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Pass</label> <br />
          <input type="text" name="pass" />
        </div>

        <button type="submit" className="mt-3 btn btn-success">
          log in
        </button>
      </form>
    </div>
  );
}

export default App;
