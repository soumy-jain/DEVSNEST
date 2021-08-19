import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navv = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Indian Tourism</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link ><NavLink to='/' style={{fontWeight:"bold", textDecoration:"none"}}>Home</NavLink></Nav.Link>
                <Nav.Link style={{ marginLeft: "1000px" }}>
                  <NavLink to="/about" style={{fontWeight:"bold", textDecoration:"none"}}>About</NavLink>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navv;
