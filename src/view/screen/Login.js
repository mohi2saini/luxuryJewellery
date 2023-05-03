// import { useState } from 'react';
// import { Alert, Button, Form } from 'react-bootstrap';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // your login logic here
//     // example: checking if email and password are correct
//     if (email === 'example@example.com' && password === 'password') {
//       // successful login
//       console.log('Login successful');
//     } else {
//       // failed login
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Login</h1>
//       {showAlert && (
//         <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
//           <Alert.Heading>Incorrect email or password</Alert.Heading>
//           <p>Please check your email and password and try again.</p>
//         </Alert>
//       )}
//       <Form onSubmit={handleLogin}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button  className='lbtn' variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Login;

// 2 ATTEMPT it is working 

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//     setShowAlert(true);

//     // Send form data to server using Axios
//     axios.post("http://example.com/login", { email, password })
//       .then(response => {
//         console.log("Server response:", response.data);
//       })
//       .catch(error => {
//         console.log("Error:", error.response.data);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required onChange={(e) => setEmail(e.target.value)} />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
//         </Form.Group>

//         <Button  className="rbtn" variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//       {showAlert && (
//         <Alert
//           className="mt-4"
//           variant="success"
//           onClose={() => setShowAlert(false)}
//           dismissible
//         >
//           Login successful!
//         </Alert>
//       )}
//     </div>
//   );
// }
// export default Login;


// 3 attempt

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";

// function Login() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;
//     if (email === "test@test.com" && password === "password") {
//       setShowAlert(true);
//       setErrorMessage("");
//       console.log("Login successful");
//     } else {
//       setShowAlert(false);
//       setErrorMessage("Email or password is incorrect");
//       console.log("Login failed");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" placeholder="Enter email" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" placeholder="Password" required />
//         </Form.Group>

//         <Button className="rbtn" variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//       {showAlert && (
//         <Alert
//           className="mt-4"
//           variant="success"
//           onClose={() => setShowAlert(false)}
//           dismissible
//         >
//           Login successful!
//         </Alert>
//       )}
//       {errorMessage !== "" && (
//         <Alert
//           className="mt-4"
//           variant="danger"
//           onClose={() => setErrorMessage("")}
//           dismissible
//         >
//           {errorMessage}
//         </Alert>
//       )}
//     </div>
//   );
// }

// export default Login;

//4 attempt

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";
// import axios from "axios";

// function Login() {
//   const [showAlert, setShowAlert] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const email = e.target.elements.email.value;
//     const password = e.target.elements.password.value;

//     axios.post("http://localhost:8080/", { email, password })
//       .then((response) => {
//         setShowAlert(true);
//         setErrorMessage("");
//         console.log("Login successful");
//       })
//       .catch((error) => {
//         setShowAlert(false);
//         setErrorMessage("Email or password is incorrect");
//         console.log("Login failed");
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" placeholder="Enter email" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" placeholder="Password" required />
//         </Form.Group>

//         <Button className="rbtn" variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>

//       {showAlert && (
//         <Alert
//           className="mt-4"
//           variant="success"
//           onClose={() => setShowAlert(false)}
//           dismissible
//         >
//           Login successful!
//         </Alert>
//       )}
//       {errorMessage !== "" && (
//         <Alert
//           className="mt-4"
//           variant="danger"
//           onClose={() => setErrorMessage("")}
//           dismissible
//         >
//           {errorMessage}
//         </Alert>
//       )}
//     </div>
//   );
// }
// export default Login;


// nikhil

import { Container,Row,Col,Button,Form} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function Login() {

  const nav = useNavigate();
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');





let submitlogin=async()=>{
    
  let params={
    email:email,
    password:password
  }
  
  console.log(params);
  try {
    let res =await axios.post("login",params).catch(err=>alert(err))
    console.log(res.data);
    
    let {success,message,data} =res.data
    if(success){
    alert(message)
 console.log(data);
   localStorage.setItem('user',true);
    nav("/")
    }
    else{
      alert(message)
     }
     } catch (error) {
    alert(error)
  }
  setEmail("")
  setPassword("")
}
    return (
 <>
 <Container>
 <Row>
<Col>
<h1>Login</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email"  value={email} required onChange={(d)=>setEmail(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password " value={password} required onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" required/>
      </Form.Group>
      <Button variant="primary" onClick={submitlogin}>
        Submit
      </Button>
    </Form>
</Col>
 </Row>
 </Container>
 </>
)
}
 export default Login;

