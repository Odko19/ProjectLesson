import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./components/Login";
import { useUser } from "./contexts/UserContext";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useUser();
  console.log(user);

  // return <div className="App">{user ? <Dashboard /> : <Login />}</div>;
  return <div className="App">{<Dashboard />}</div>;
}

export default App;
