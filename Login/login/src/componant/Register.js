import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const [username, setUsername] = useState();
  // console.log({ status: "Амжилттай нэвтэрлээ." });
  let navigate = useNavigate();

  //   function registerUser(e) {
  //     e.preventDefault();
  //     let value = {
  //       email: e.target.elements.email.value,
  //       password: e.target.elements.pass.value,
  //       name: e.target.elements.name.value,
  //       address: e.target.elements.address.value,
  //     };
  //   }

  const registerHandler = async (e) => {
    e.preventDefault();
    const token = {
      email: e.target.elements.email.value,
      password: e.target.elements.pass.value,
      name: e.target.elements.name.value,
      address: e.target.elements.address.value,
    };
    loginUser(token);
  };

  const loginUser = async (namePass) => {
    return fetch("https://dev-api.mstars.mn/admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(namePass),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="App">
      {/* <Toast /> */}
      <ToastContainer />

      <h1 className="mt-3">Register</h1>
      <form onSubmit={registerHandler}>
        <div className="form-group">
          <label htmlFor="">Name</label> <br />
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label> <br />
          <input type="text" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Pass</label> <br />
          <input type="text" name="pass" />
        </div>
        <div className="form-group">
          <label htmlFor="">Address</label> <br />
          <input type="text" name="address" />
        </div>
        <button type="submit" className="mt-3 btn btn-success">
          log in
        </button>
      </form>
    </div>
  );
}

export default Register;
