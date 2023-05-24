//FIRST PAYMENT PAGE - NOT IN USE NOW

// import { useState, useEffect } from 'react';
// import { Col, Row } from 'react-bootstrap';
// import { Link, useLocation,useNavigate } from 'react-router-dom';

// const Payment = () => {
//   const nav =useNavigate ();
//   const location = useLocation();
//   const selectedProducts = location.state?.selectedProducts ?? [];
//   const [paymentInfo, setPaymentInfo] = useState({
//     cardNumber: '',
//     expirationDate: '',
//     cvv: '',
//     name: '',
//     address:'',
//   });
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const totalPrice = searchParams.get('totalPrice');
//     setTotalPrice(totalPrice || 0);
//   }, [location.search]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setPaymentInfo({ ...paymentInfo, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here you could handle submitting the payment information to a server
//     // and show a confirmation message to the user
//     window.alert('Payment successful! Thank you for your purchase.');
//     nav("/")
//   };
  

//   return (
//     <div className="container my-5">
//       <h1 className="mb-3">Payment</h1>
//       <div className="card">
//         <div className="card-header">
//           <h5>Order Summary</h5>
//         </div>
//         <div className="card-body">
//           <ul className="list-group mb-3">
//             {selectedProducts.map((product) => (
//               <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
//                 {product.name}
//                 <span className="badge badge-primary badge-pill">${product.price}</span>
//               </li>
//             ))}
//             <li className="list-group-item d-flex justify-content-between align-items-center">
//               Total Price:
//               <span id="total-price">${totalPrice ?? 0}</span>
//             </li>
//           </ul>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="cardNumber">Card Number</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cardNumber"
//                 name="cardNumber"
//                 required
//                 value={paymentInfo.cardNumber}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="expirationDate">Expiry Date</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="expirationDate"
//                 name="expirationDate"
//                 required
//                 value={paymentInfo.expirationDate}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="cvv">CVV</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="cvv"
//                 name="cvv"
//                 required
//                 value={paymentInfo.cvv}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="name">Name on Card</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 required
//                 value={paymentInfo.name}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="address">Delivery Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="address"
//                 name="address"
//                 required
//                 value={paymentInfo.address}
//                 onChange={handleInputChange}
//               />
//             </div>
//             <Row className='pbtns'>
              
//             <button type="submit" className="btn btn-primary"  id='pbtn'>
//               Submit Payment
//             </button>
            
//             <Link to="/Addtocart" className="btn btn-secondary ml-2" id='p2btn'>
//               Back to Products
//             </Link>
            
//             </Row>
//             </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Payment;

  //PERFECTLY WORKING PAYMENT PAGE


//   import axios from "axios";
// import { useState } from "react"
// import { Container ,Row,Col,Form,Button} from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom"


// export default function OrderPlace(){
// let nav=useNavigate()
// const loc=useLocation()
// const[pay,setPay] =useState(loc.state)
// console.log(pay);
// const [acno,setAcno]=useState('');
// const [user,setUserdata]=useState(localStorage.getItem('user'));
// const [fsc,setFsc]=useState('');
// const [acname,setAcname]=useState('');
// const [add,setAdd]=useState('');

// console.log(user);
// async function paymentpage(){
//     if(acno!==''&& fsc!==''&& acname!==''&& add!==''){
//       let params={
//         acno:acno,
//         acname:acname,
//         fsc:fsc,
//         pay:pay,
//         user:user,
//         add:add
//       }
//       let res= await axios.post("payment",params).catch(e=>console.log(e));
//       const{success,message} = res?.data
// if(success){

//   alert(message)
//   nav('/profile')
         
// let res = await axios.post('removecartitem', {}).catch(e=>console.log(e))


// }
// else{
//   alert(message)

// }
//     }
//     else{
//         alert("Fill All Input")
//     }
// }
//     return(
//         <>
//        <Container className="m-5">
//         <Row>
//             <Col>
//             <h1 className="mb-3">Payment</h1>
          
//             </Col>
//         </Row>
//         <Row>
//             <Col>
//             <div className="w-50 bg-success m-auto rounded p-3 text-light">
//             <h4>Address</h4>
//             <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
       
//         <Form.Control type="email" placeholder="enter address" value={add} onChange={d=>setAdd(d.target.value)}/>
        
//       </Form.Group>
//       </Form>
//       </div>
//       </Col>
//       </Row>
//         <Row>
//             <Col>
//             <div className="w-50 bg-success m-auto rounded p-3 text-light">
//             <h4>Bank Account Details</h4>
//             <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
       
//         <Form.Control type="email" placeholder="Bank Account Number" value={acno} onChange={d=>setAcno(d.target.value)}/>
        
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
       
//        <Form.Control type="email" placeholder="IFSC"  value={fsc} onChange={d=>setFsc(d.target.value)}/>
       
//      </Form.Group>
//      <Form.Group className="mb-3" controlId="formBasicEmail">
       
//        <Form.Control type="email" placeholder="Account Holder Name"  value={acname} onChange={d=>setAcname(d.target.value)}/>
       
//      </Form.Group>
//      <Form.Group className="mb-3" controlId="formBasicEmail">
       
//        <Form.Control type="text" value={`Rs.${pay}`}  disabled/>
       
//      </Form.Group>

//       <Button variant="primary" onClick={paymentpage} >
//         submit
//       </Button>
//     </Form>
//             </div>
//             </Col>
//         </Row>
//        </Container >
//         </>

//     )
// }