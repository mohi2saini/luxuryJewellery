import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let submitlogin = async () => {
    let params = {
      email: email,
      password: password,
    };

    console.log(params);
    try {
      let res = await axios.post("login", params).catch((err) => alert(err));
      console.log(res.data);

      let { success, message, data } = res.data;
      if (success) {
        alert(message);
        console.log(data);
        localStorage.setItem("user", true);
        nav("/");
        window.location.reload(true);
      } else {
        alert(message);
      }
    } catch (error) {
      alert(error);
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(d) => setEmail(d.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicpassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password "
                  required
                  value={password}
                  onChange={(d) => setPassword(d.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={submitlogin}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Login;
