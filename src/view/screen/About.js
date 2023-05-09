import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function About() {
  return (
    <div className="about">
      <Container>
        <Row>
          <Col>
            <h1>About Us</h1>
            <p className="lead">
              We are a family-owned jewelry store located in the heart of the
              city. Our team of skilled artisans is dedicated to creating unique
              and beautiful pieces that will last a lifetime.
            </p>
            <p>
              Our journey began over 50 years ago when our grandfather started
              crafting jewelry by hand. Since then, we have grown into a trusted
              brand known for our exceptional craftsmanship and customer
              service.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide our customers with the highest quality
              jewelry and personalized service. We believe that every piece of
              jewelry tells a story and we want to help you tell yours.
            </p>
          </Col>
          <Col md={6}>
            <h2>Our Values</h2>
            <ul>
              <li>Quality craftsmanship</li>
              <li>Exceptional customer service</li>
              <li>Honesty and integrity</li>
              <li>Respect for our customers and employees</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default About;
