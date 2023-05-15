import { Col, Container, Row, Carousel } from "react-bootstrap";
import "../style/style.css";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { products } from "../data/data";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();
  return (
    <>
      <Container className="container1" fluid>
        <Row>
          <Col>
            <Carousel className="slidersize">
              <Carousel.Item>
                <img
                  className="sliderimg"
                  src={require("../img/slider-jewellery.jpg")}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Luxury</h3>
                  <p>Jewelry that tells your story.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="sliderimg"
                  src={require("../img/jewellery-ga660c5852_1920.jpg")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Luxury</h3>
                  <p>Add a touch of elegance to your style.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="sliderimg"
                  src={require("../img/a.jpg")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Luxury</h3>
                  <p>
                    Create lasting memories with our unique and timeless
                    jewellery.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="sliderimg"
                  src={require("../img/crown-gfc362782e_1920.jpg")}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3 style={{ color: "gold" }}>Luxury</h3>
                  <p style={{ color: "gold" }}>
                    Add sparkle to your life with our exquisite jewellery
                    pieces.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="sliderimg"
                  src={require("../img/still-2608539.jpg")}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Luxury</h3>
                  <p>Be the envy of all with our glamorous jewelry.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col className="third">
            <h1>Our Products</h1>
          </Col>
        </Row>

        {/* product gallery */}

        <Row className="rp-1">
          {products.map(function (d) {
            return (
              <Col className="r1-products">
                <Card
                  style={{ width: "18rem" }}
                  className="crd"
                  onClick={() => nav("/details", { state: d })}
                >
                  <Card.Img variant="top" src={d.image} />
                  <Card.Body>
                    <Card.Title>{d.name}</Card.Title>
                    <Card.Text>{d.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>${d.price}</ListGroup.Item>
                    <ListGroup.Item>${d.mrp}</ListGroup.Item>
                    <ListGroup.Item>{d.category}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Card.Link href="/details">Details</Card.Link>
                    {/* <Card.Link href="#">Add to Cart</Card.Link> */}
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
