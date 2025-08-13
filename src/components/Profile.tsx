import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Login.module.css";

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    major: "",
    graduationDate: "",
    role: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`/api/auth/userinfo/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch user information");
        }
        const data = await response.json();
        setUserInfo(data);
      } catch (err: any) {
        setError(err.message);
      }
    };

    fetchUserInfo();
  }, [id]);

  useEffect(() => {
    // Disable scrolling when the component is mounted
    document.body.style.overflow = "hidden";

    return () => {
      // Re-enable scrolling when the component is unmounted
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`/api/auth/userinfo/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        throw new Error("Failed to update user information");
      }

      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Container
      className={`d-flex justify-content-center align-items-center ${styles["no-scroll"]}`}
      style={{ height: "100vh" }}
    >
      <div
        style={{
          backgroundColor: "#FFF",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <h2>Edit Profile</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">Profile updated successfully!</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="formMajor" className="mb-3">
            <Form.Label>Major</Form.Label>
            <Form.Control
              type="text"
              value={userInfo.major}
              onChange={(e) => setUserInfo({ ...userInfo, major: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formGraduationDate" className="mb-3">
            <Form.Label>Graduation Date</Form.Label>
            <Form.Control
              type="date"
              value={userInfo.graduationDate}
              onChange={(e) => setUserInfo({ ...userInfo, graduationDate: e.target.value })}
            />
          </Form.Group>

          <Form.Group controlId="formRole" className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Select
              value={userInfo.role}
              onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })}
            >
              <option value="student">Student</option>
              <option value="alumni">Alumni</option>
            </Form.Select>
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Profile;