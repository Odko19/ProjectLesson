import logo from "./logo.svg";
import "./App.css";

export const MyApp = (props) => {
  console.log(props);
  return <>{props.data}</>;
};

function Lesson20() {
  return (
    <div className="App">
      <p>HI</p>
      <MyApp data="MyApp componants" />
    </div>
  );
}

export default Lesson20;
