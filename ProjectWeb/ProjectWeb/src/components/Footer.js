import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Footer() {
  const style = {
    bg: {
      backgroundColor: "#263238",
    },
    c1: {
      color: "white",
    },
  };
  return (
    <Navbar style={style.bg} className="mt-5 ">
      <Container>
        <Navbar.Brand href="/" style={style.c1}>
          GoodLuck
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
