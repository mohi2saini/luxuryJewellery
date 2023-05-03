// import{ Button,Form,Row,Col,Container,Alert}from 'react-bootstrap';
// import { useState } from 'react';
//     // import Form from 'react-bootstrap/Form';
    
// function  Register() {

// const[name,setName] = useState('');
// const[email,setEmail] = useState('');
// const[password,setPassword] = useState('');

//   function Register(){
//         console.log(name);
//         console.log(email);
//         console.log(password);
//         Alert("Register");
//   }
//       return (
//         <Container>
//             <Row>
//                 <Col>
                
//                 <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="Name" placeholder="Enter name" value={name} onChange={(d)=>setName(d.target.value)}/>
//             <Form.Text className="text-muted" >
                
             
//             </Form.Text>
//           </Form.Group>


//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" value={email} onChange={(d)=>setEmail(d.target.value)} />
//             <Form.Text className="text-muted">
//             </Form.Text>
//           </Form.Group>
    
//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password"  value={password} onChange={(d)=>setPassword(d.target.value)}/>
//           </Form.Group>
//           {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
//             <Form.Check type="checkbox" label="Check me out" />
//           </Form.Group> */}
//           <Button variant="primary" type="Register">
//           Register
//           </Button>
//         </Form>
                
//                 </Col>
//             </Row>
//         </Container>
        
//       );
//     }
    
//     export default Register;

// working CODE

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";

// function Register() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowAlert(true);
//   };

 

//   return (
//     <div className="container mt-4">
//       <h1>Sign up</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter name" required  />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" placeholder="Enter address" required />
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
//           Signup successful!
//         </Alert>
//       )}
//     </div>
//   );
// }
// export default Register


// THIRD CODE IF IT WORKS

// import React, { useState } from "react";
// // import axios from "axios";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("password", password);
//     formData.append("address", address);

//     // axios.post("/api/register", formData).then((response) => {
//     //   console.log(response.data);
//     // });
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Sign up</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter name"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <small className="form-text text-muted">
//             We'll never share your email with anyone else.
//           </small>
//         </div>

//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="address">Address</label>
//           <input
//             type="text"
//             className="form-control"
//             id="address"
//             placeholder="Enter address"
//             required
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Register;

// FOURTH CODE TRY

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";
// import axios from "axios";

// function Register() {
//   const [showAlert, setShowAlert] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//     setShowAlert(true);
//     axios
//       .post("http://localhost:8080/", data)
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Sign up</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" placeholder="Enter name" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" placeholder="Enter email" required />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" placeholder="Password" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" placeholder="Enter address" required />
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
//           Signup successful!
//         </Alert>
//       )}
//     </div>
//   );
// }

// export default Register;

//fifth TRY working but not axios i think last working code

// import React, { useState } from "react";
// import { Alert, Button, Form } from "react-bootstrap";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Register() {
//   const nav = useNavigate()
//   const [showAlert, setShowAlert] = useState(false);
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setShowAlert(true);
    

//     const formData = new FormData(e.target);
//     const name = formData.get("name");
//     const email = formData.get("email");
//     const password = formData.get("password");
//     const address = formData.get("address");
//     let data =JSON.stringify( Object.fromEntries(formData));

//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("Address:", address);

//     axios.post(formData)
//       .then(response => console.log(response))
//       .catch(error => console.log(error));

      
//   };

//   return (
//     <div className="container mt-4">
//       <h1>Sign up</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicName">
//           <Form.Label>Name</Form.Label>
//           <Form.Control type="text" name="name" placeholder="Enter name" required  />
//         </Form.Group>

//         <Form.Group controlId="formBasicEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control type="email" name="email" placeholder="Enter email" required />
//           <Form.Text className="text-muted">
//             We'll never share your email with anyone else.
//           </Form.Text>
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="password" name="password" placeholder="Password" required />
//         </Form.Group>

//         <Form.Group controlId="formBasicAddress">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" name="address" placeholder="Enter address" required />
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
//           Signup successful!
//         </Alert>
//       )}
//     </div>
//   );
// }
// export default Register;

//nikhil code

import { Container,Row,Col,Button,Form} from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {

  const nav = useNavigate()
  // const [file, setFile] = useState("");
  // const [fileName, setFileName] = useState("")
  
const[name,setName]= useState('');
const[email,setEmail]= useState('');
const[password,setPassword]= useState('');





let submitregister=async()=>{
  // console.log(file);
  // console.log(fileName);
  
    const formdata= new FormData();
    // formdata.append("file",file)
    // formdata.append("filename",fileName)
    let data =JSON.stringify( Object.fromEntries(formdata));
  
  console.log(data);
    let params={
    username:name,
    email:email,
    password:password,
    // image:file
  }
  console.log(params);
  try {
      let res =await axios.post("register",params).catch(err=>alert(err))
      console.log(res.data);
      let {success,message} =res.data
      if(success){
        alert(message)
        nav("/Login")
     
      }
      else{
        alert(message)
      }
    } catch (error) {
      console.log("error==",error);
      alert(error)
    }
  setEmail("")
  setPassword("")
  setName("")
  }
    return (
 <>
 <Container className="register">
 <Row>
<Col>
<h1>Sign Up</h1>
<Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={name} required onChange={(d)=>setName(d.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"  name="email" placeholder="Enter email"  value={email} required onChange={(d)=>setEmail(d.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicpassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password " value={password} required onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="Password" label="Enter Password" value={password}  onChange={(d)=>setPassword(d.target.value)} />
      </Form.Group> */}
      <Button variant="primary"onClick={submitregister}>
        Submit
      </Button>
    </Form>
</Col>
 </Row>
 </Container>
 </>
)
}
 export default Register;





