import axios from "axios";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderPlace() {
  let nav = useNavigate();
  const loc = useLocation();
  const [pay, setPay] = useState(loc.state);
  console.log(pay);
  const [acno, setAcno] = useState("");
  const [user, setUserdata] = useState(localStorage.getItem("user"));
  const [fsc, setFsc] = useState("");
  const [acname, setAcname] = useState("");
  const [add, setAdd] = useState("");

  console.log(user);
  async function paymentpage() {
    if (acno !== "" && fsc !== "" && acname !== "" && add !== "") {
      let params = {
        acno: acno,
        acname: acname,
        fsc: fsc,
        pay: pay,
        user: user,
        add: add,
      };
      let res = await axios
        .post("payment", params)
        .catch((e) => console.log(e));
      const { success, message } = res?.data;
      if (success) {
        alert(message);
        nav("/profile");

        let res = await axios
          .post("removecartitem", {})
          .catch((e) => console.log(e));
      } else {
        alert(message);
      }
    } else {
      alert("Fill All Input");
    }
  }
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col>
            <h1 className="text-center mb-3">Payment</h1>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <div className="bg-light rounded p-3">
              <h4>Address</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Enter delivery address"
                    value={add}
                    onChange={(d) => setAdd(d.target.value)}
                  />
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <div className="bg-light rounded p-3">
              <h4>Bank Account Details</h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Bank Account Number"
                    value={acno}
                    onChange={(d) => setAcno(d.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="IFSC"
                    value={fsc}
                    onChange={(d) => setFsc(d.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Account Holder Name"
                    value={acname}
                    onChange={(d) => setAcname(d.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    value={`Total price = $${pay}`}
                    disabled
                  />
                </Form.Group>

                <Button variant="primary" onClick={paymentpage}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
