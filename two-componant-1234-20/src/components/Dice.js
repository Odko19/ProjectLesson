import react from "react";
import { useState } from "react";

const style = {
  back: {
    backgroundColor: "black",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    height: "100vh",
    padding: "100px",
  },
  back1: {
    backgroundColor: "#ADE8C6",
    padding: "100px",
    with: "100vw",
    height: "80vh",
    margin: "auto",
    boxSizing: "border-box",
    borderRadius: "20px 0 0 20px",
  },
  back2: {
    backgroundColor: "#7DE8AA",
    padding: "100px",
    with: "100vw",
    height: "80vh",
    margin: "auto",
    boxSizing: "border-box",
    borderRadius: "0 20px 20px 0",
  },
  btn: {
    position: "absolute",
    bottom: "120px",
    margin: "auto",
  },
  btnWidth: {
    width: "200px",
    height: "40px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgb(0,0,0,0.8)",
    color: "white",
  },
  number: {
    width: "200px",
    height: "200px",
    backgroundColor: "rgb(255,255,255,0.8)",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    borderRadius: "10px",
    marginBottom: "50px",
    color: "white",
  },
  image: {
    width: "100%",
  },
  current: {
    backgroundColor: "rgb(0,0,0,0.8)",
    color: "white",
    padding: "20px",
    marginTop: "50px",
    textAlign: "center",
    borderRadius: "20px",
  },
  span: {
    fontSize: "50px",
  },
};

export default function Dice() {
  const [randomNum, setRandomNum] = useState(1);

  //   callback function
  //   function handler() {
  //     setRandomNum(Math.floor(Math.random() * 6) + 1);
  //   }

  return (
    <div style={style.back}>
      <div style={style.btn}>
        <div style={style.number}>
          <img src={`image/dice-${randomNum}.png`} alt="" style={style.image} />
        </div>
        <button
          style={style.btnWidth}
          onClick={() => setRandomNum(Math.floor(Math.random() * 6) + 1)}
          //   ene bol anonymous function buyu nergui function
        >
          DICE
        </button>
      </div>
      <div style={style.back1}>
        <h4>PlAYER 1</h4>
        <p>
          toglogch ehled shoogoo hayh heregtei tereed duussani daraa ih onootoi
          ni hojno
        </p>
        <div style={style.current}>
          CURRENT <br />
          <span style={style.span}>{randomNum}</span>
        </div>
      </div>
      <div style={style.back2}>
        <h4>PlAYER 2</h4>
        <p>
          toglogch ehled shoogoo hayh heregtei tereed duussani daraa ih onootoi
          ni hojno
        </p>
        <div style={style.current}>
          CURRENT <br />
          <span style={style.span}>{randomNum}</span>
        </div>
      </div>
    </div>
  );
}
