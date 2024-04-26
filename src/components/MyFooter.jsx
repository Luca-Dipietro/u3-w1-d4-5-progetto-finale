import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row className="flex-column align-items-center">
        <Col xs={12} md={7}>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </Col>
        <Col xs={12} md={7} className="mb-3">
          <Row>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Audio and Subtitles
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Audio Description
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Help Center
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Gift Cards
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Media Center
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Investor Relations
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Jobs
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Terms of Use
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Privacy
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Legal Notices
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Cookie Preferences
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Corporate Information
            </Col>
            <Col xs={6} md={4} xxl={3} className="footer-text">
              Contact Us
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={7}>
          <span>Service Code</span>
        </Col>
        <Col xs={12} md={7} className="mt-4">
          <p>
            © 1997-2019 Netflix, Inc.{"{"}i-0d00fcda2fdf9c0de{"}"}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
