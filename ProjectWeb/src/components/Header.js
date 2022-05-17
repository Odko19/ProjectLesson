import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ data }) {
  // console.log(data);
  const style = {
    bg: {
      backgroundColor: "#263238",
    },
    c1: {
      color: "white",
    },
  };
  return (
    <>
      <Navbar style={style.bg}>
        <Container>
          <Navbar.Brand href="/" style={style.c1}>
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            {data &&
              Object.keys(data).map((e, i) => {
                return (
                  <Nav.Link key={i} href={`/${e}`} style={style.c1}>
                    {`${e}`}
                  </Nav.Link>
                );
              })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
