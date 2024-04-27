import { Container, Row, Col, Button, Dropdown, Form } from "react-bootstrap";

const Profile = () => {
  return (
    <Container fluid>
      <Row className="flex-column align-items-center">
        <Col xs={8} md={6} xxl={4}>
          <h1 className="text-light mt-5">Edit Profile</h1>
          <hr className="text-light mt-0 mb-0" />
        </Col>
        <Col xs={8} md={6} xxl={4}>
          <Container fluid>
            <Row>
              <Col md={3} className="mt-4 position-relative">
                <button type="button" className="btn position-absolute">
                  <i className="bi bi-pencil-fill"></i>
                </button>
                <img src="../../assets/icon/avatar.png" alt="avatar" />
              </Col>
              <Col md={9} className="mt-4">
                <p className="bg-secondary text-light p-2">Strive Student</p>
                <p className="mb-2 mt-4">Language:</p>
                <Dropdown>
                  <Dropdown.Toggle variant="black" className="text-light border dropdown-toggle active px-3">
                    Italian
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#">English</Dropdown.Item>
                    <Dropdown.Item href="#">Spanish</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <hr className="text-light mt-3 mb-3" />
              </Col>
              <Col md={3}></Col>
              <Col md={9}>
                <p>Maturity Settings:</p>
                <p className="btn btn-secondary bg-costume text-light">ALL MATURITY RATINGS</p>
                <p className="p-costume text-light">Show titles of all maturity ratings for this profile.</p>
                <Button variant="outline-secondary" className="btn-costume">
                  EDIT
                </Button>
                <hr className="text-light mt-4 mb-4" />
              </Col>
              <Col md={3}></Col>
              <Col md={9}>
                <p>Autoplay Controls</p>
                <Form.Check
                  type="checkbox"
                  id="flexCheckDefault1"
                  label="Autoplay next episode in a series on all devices"
                  className="text-light"
                />
                <Form.Check
                  type="checkbox"
                  id="flexCheckDefault2"
                  label="Autoplay previews while browsing on all devices"
                  className="text-light"
                />
              </Col>
            </Row>
          </Container>
          <hr className="text-light mt-4 mb-4" />
        </Col>
        <Col xs={8} md={6} xxl={4}>
          <Container fluid>
            <Row>
              <Col lg={4} sm={12} className="d-flex align-items-center justify-content-center mb-3">
                <Button variant="outline-secondary" size="lg">
                  SAVE
                </Button>
              </Col>
              <Col lg={4} sm={12} className="d-flex align-items-center justify-content-center mb-3">
                <Button variant="outline-secondary" size="lg">
                  CANCEL
                </Button>
              </Col>
              <Col lg={4} sm={12} className="d-flex align-items-center justify-content-center mb-3">
                <Button variant="outline-secondary" size="lg">
                  DELETE PROFILE
                </Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
