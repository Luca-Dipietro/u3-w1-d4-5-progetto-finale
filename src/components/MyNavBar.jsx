import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const MyNavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="../../assets/icon/netflix_logo.png" alt="netflix_logo" width="100" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/" active>
              TV Shows
            </Nav.Link>
            <Nav.Link href="/">Movies</Nav.Link>
            <Nav.Link href="/">Recently Added</Nav.Link>
            <Nav.Link href="/">My List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">
              <i className="bi bi-search"></i>
            </Nav.Link>
            <Nav.Link href="/">
              <img src="../../assets/icon/kids_icon.png" alt="kids_icon" width="35" height="35" />
            </Nav.Link>
            <Nav.Link href="/">
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <NavDropdown
              title={<img src="../../assets/icon/avatar.png" alt="avatar" width="35" height="35" />}
              id="basic-nav-dropdown"
              data-bs-theme="dark"
            >
              <NavDropdown.Item href="/">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">Setting</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavBar;
