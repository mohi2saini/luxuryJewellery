import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Profile() {
  const loc = useLocation();
  const navigate = useNavigate();
  const userDetails = loc.state; // Get user details from location state

  // Redirect to home page if user details are not available
  if (!userDetails) {
    navigate("/");
    return null;
  }

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1>Welcome, {userDetails.name}!</h1>
          <hr />
          <h4>Profile Details:</h4>
          <p>Email: {userDetails.email}</p>
          <p>Password: {userDetails.password}</p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Go Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
