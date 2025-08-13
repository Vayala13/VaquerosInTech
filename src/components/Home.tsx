import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";

const Home: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container fluid className="mt-4" style={{ marginLeft: "250px" }}>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="mb-4 text-center">Feed</h2>

            {/* Example Feed Item */}
            <Card className="mb-4">
              <Card.Body>
                <h5>Meet People</h5>
                <p>Connect with fellow students and professionals in the tech community.</p>
                <Button variant="primary" href="#people">Explore</Button>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h5>Projects</h5>
                <p>Discover ongoing projects and find opportunities to collaborate.</p>
                <Button variant="primary" href="#projects">View Projects</Button>
              </Card.Body>
            </Card>

            <Card className="mb-4">
              <Card.Body>
                <h5>Organizations</h5>
                <p>Join organizations and clubs to expand your network and skills.</p>
                <Button variant="primary" href="#organizations">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;