import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./view/screen/Home";
import About from "./view/screen/About";
import { menubar } from "./view/data/data";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaShoppingCart,
} from "react-icons/fa";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  NavItem,
} from "react-bootstrap";
// import Jewellery from "./view/screen/Jewellery";
import { Col, Container, Row } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Contact from "./view/screen/Contact";
import Details from "./view/screen/Details";
import Register from "./view/screen/register";
import Login from "./view/screen/Login";
import Addtocart from "./view/screen/Addtocart";
import Payment from "./view/screen/Payment";

import { useState } from "react";
import Showcart from "./view/screen/Showcart";
import OrderPlace from "./view/screen/OrderPlace";
import Profile from "./view/screen/Profile";

function App() {
 const nav= useNavigate()
  
  const [user, setUser] = useState(localStorage.getItem("user"));
  console.log(localStorage.getItem("user"));

  function logout() {
    alert("logout");
    localStorage.setItem("user", false);
    setUser(false);
    localStorage.clear();
  }

  console.log(user, "user");
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Navbar className="jewelry-navbar " expand="lg">
              <Container>
                <Navbar.Brand href="#home">Luxury Jewellery</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto ">
                    <Nav.Link href="/">Home</Nav.Link>
                    {menubar.map(function (d) {
                      return <Nav.Link href={`/${d}`}>{d}</Nav.Link>;
                    })}
                    {/* <Nav.Link href="#jewelry">Jewelry</Nav.Link>
                    <Nav.Link href="#About">About Us</Nav.Link>
                    <Nav.Link href="#contact">Contact Us</Nav.Link> */}
                  </Nav>

                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                  <Nav>
                    <NavDropdown
                      title={<FaUserCircle />}
                      id="basic-nav-dropdown"
                      className="login-icon"
                    >

                      {
                      user ? <><NavDropdown.Item onClick={()=>nav("/profile")}>Profile </NavDropdown.Item><NavDropdown.Item onClick={logout}>Logout </NavDropdown.Item></> :<>
                      <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="/Register">
                        Sign Up
                      </NavDropdown.Item>
                      </>
                      }

                      {user ? (
                        <NavDropdown.Item onClick={logout}>
                          Logout{" "}
                        </NavDropdown.Item>
                      ) : (
                        <>
                          <NavDropdown.Item href="/Login">
                            Login
                          </NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/Register">
                            Sign Up
                          </NavDropdown.Item>
                        </>
                      )}
                      {/* <NavDropdown.Divider /> */}
                      {/* {
                        user ? <NavDropdown.Item onClick={logout}>Logout </NavDropdown.Item>:null
                      } */}
                    
                    </NavDropdown>
                    <Navbar.Brand href="showcart"><img src={require('./view/img/basket-cart-icon-27.png')} style={{width:30}}/></Navbar.Brand>
                  </Nav>
                  <div className="navbar__cart">
                    <Link to="/Addtocart" className="nav-link">
                      <FaShoppingCart className="navbar__cart-icon" />
                      {/* {count > 0 && <span className="badge">{count}</span>} */}
                    </Link>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
      {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Jewellery" element={<Jewellery />} /> */}
        <Route path="/Contact" element={<Contact />} />
        <Route path="/details" element={<Details />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/showcart" element={<Showcart />} />
        <Route path="/orderplace" element={<OrderPlace />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Phone: +1-123-456-7890</li>
                <li>Email: info@luxuryjewelry.com</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Follow Us</h4>
              <div className="soci">
                <ul className="list-inline social-media">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li style={{ marginLeft: 10 }}>
                    <a href="#">
                      <FaPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Address</h4>
              <p>1234 Main Street</p>
              <p>Anytown, RAJ 12345</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 Luxury Jewelry. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
