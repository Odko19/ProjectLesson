import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import App from "./App";

function Contents({ data }) {
  // console.log(data);
  const style = {
    bg: {
      backgroundColor: "#1f2023",
      borderRadius: "10px",
    },
    a: {
      textDecorationLine: "none",
      color: "white",
    },
  };
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between">
          {Object.keys(data).map((title, i) => {
            return (
              <div style={style.bg} className="my-3 p-3">
                <Link key={i} to={`${title}`} style={style.a}>
                  {title}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="my-3">
          <Outlet />
        </div>
        <App />
      </Container>
    </>
  );
}

export default Contents;
