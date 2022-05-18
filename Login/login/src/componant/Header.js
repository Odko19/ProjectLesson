import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="me-auto text-right">
          <Nav.Link href="/login">login</Nav.Link>
          <Nav.Link href="/register">register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
