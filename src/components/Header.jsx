import { Button, Container, Dropdown } from "react-bootstrap";

const Header = () => {
  return (
    <section className="d-flex py-1">
      <Container fluid>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <h1 className="text-light">TV Shows</h1>
            <Dropdown className="ms-4">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu data-bs-theme="dark">
                <Dropdown.Item href="/">Action</Dropdown.Item>
                <Dropdown.Item href="/">Adventure</Dropdown.Item>
                <Dropdown.Item href="/">Anime</Dropdown.Item>
                <Dropdown.Item href="/">Comedy</Dropdown.Item>
                <Dropdown.Item href="/">Documentary</Dropdown.Item>
                <Dropdown.Item href="/">Fantasy</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="btn-group border d-none d-sm-block">
            <Button variant="secondary" size="sm">
              <i className="bi bi-view-list"></i>
            </Button>
            <Button variant="secondary" size="sm">
              <i className="bi bi-border-all"></i>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Header;
