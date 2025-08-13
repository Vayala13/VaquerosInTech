import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert, Toast } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import VIcon from "../assets/V.svg";
import logincss from "../styles/Login.module.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add(logincss["no-scroll"]);
    return () => {
      document.body.classList.remove(logincss["no-scroll"]);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Login failed");
      }

      const token = await response.text();
      localStorage.setItem("authToken", token);

      // Show toast, then redirect after 2 seconds
      setShowToast(true);
      setTimeout(() => {
        navigate("/home");
      }, 2000);

    } catch (err: any) {
      setError(err.message || "Unknown error");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div
        style={{
          backgroundColor: "#F05023",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <img
          src={VIcon}
          alt="V Icon"
          width="80"
          height="80"
          className="mb-4"
        />
        <h2 className="text-white mb-4">Welcome to VaquerosInTech</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="light" type="submit" className="w-100 mb-3">
            Login
          </Button>
          <Button
            variant="outline-light"
            className="w-100"
            onClick={() => navigate("/register")}
          >
            Create Account
          </Button>
        </Form>

        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            minWidth: "250px",
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body>Login successful! Redirecting...</Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default Login;