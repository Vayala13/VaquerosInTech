import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import VIcon from "../assets/V.svg";

const Header: React.FC = () => {
  const handleSignOut = () => {
    // Clear user authentication (e.g., remove token from localStorage)
    localStorage.removeItem("authToken");
    // Redirect to login page
    window.location.href = "/login";
  };

  return (
    <Navbar style={{ backgroundColor: "#F05023" }} variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/home">
          <img
            src={VIcon}
            alt="V Icon"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          VaquerosInTech
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="/profile" className="text-white">
            <FontAwesomeIcon icon={faCircleUser} size="lg" />
          </Nav.Link>
          <Nav.Link onClick={handleSignOut} className="text-white">
            Sign Out
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;