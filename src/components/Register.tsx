import React, { useState, useEffect } from "react";
import { Form, Button, Container, Alert, Toast } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import VIcon from "../assets/V.svg";
import { registerUser } from "../auth/api/auth";
import logincss from "../styles/Login.module.css";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [graduationDate, setGraduationDate] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

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
      await registerUser(email, password, name, major, graduationDate, role);

      // Optionally store extra user info for later use
      

      setShowToast(true);
      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    } catch (error: any) {
      setError(error.message || "Registration failed.");
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
          position: "relative"
        }}
      >
        <img src={VIcon} alt="V Icon" width="80" height="80" className="mb-4" />
        <h2 className="text-white mb-4">Create your VaquerosInTech Account</h2>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email"
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

          <Form.Group controlId="formMajor" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Major"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formGraduationDate" className="mb-3">
            <Form.Control
              type="date"
              value={graduationDate}
              onChange={(e) => setGraduationDate(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Select
            value={role}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setRole(e.target.value)
            }
            required
            className="mb-3"
          >
            <option value="student">Student</option>
            <option value="alumni">Alumni</option>
          </Form.Select>

          <Button variant="light" type="submit" className="w-100">
            Register
          </Button>
        </Form>

        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
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
          <Toast.Body>Registration successful! Please login.</Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default Register;