import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router";
import App from "./App";

function Contents({ data }) {
  // console.log(data);
  return (
    <>
      <Container>
        <div className="d-flex justify-content-between">
          {Object.keys(data).map((title, i) => {
            return (
              <div>
                <Link key={i} to={`${title}`}>
                  {title}
                </Link>
              </div>
            );
          })}
        </div>
        <Outlet />

        <App />
      </Container>
    </>
  );
}

export default Contents;
