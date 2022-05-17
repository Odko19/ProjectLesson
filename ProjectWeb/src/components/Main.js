import React from "react";

function Main() {
  const style = {
    minHeight: {
      minHeight: "calc(100vh - 150px)",
    },
  };
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={style.minHeight}
    >
      <h1>LESSONS</h1>
    </div>
  );
}

export default Main;
