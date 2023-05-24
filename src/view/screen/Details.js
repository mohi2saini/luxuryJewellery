// FIRST DETAILS PAGE

// import { useLocation, Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Row, Col } from "react-bootstrap";
// function Details() {
//   const nav = useNavigate();
//   const loc = useLocation();
//   const [products, setProducts] = useState(loc.state);
//   console.log(products);
//   function addtocart(d) {
//     nav("/Addtocart", { state: d });
//   }
//   return (
//     <>
//       <Row>
//         <Col>
//           <div className="container py-5">
//             <div className="row">
//               <div className="col-md-6">
//                 <img
//                   src={products.image}
//                   alt={products.name}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <h3>{products.name}</h3>
//                 <p>Category: {products.category}</p>
//                 <p>Description: {products.description}</p>
//                 <h4 className="text-danger">${products.price}</h4>
//                 <del className="text-muted">${products.mrp}</del>
//                 <br />
//                 <br />
//                 <Link
//                   to={{
//                     pathname: "/payment",
//                     search: `?totalPrice=${products.price}`,
//                   }}
//                   className="btn btn-primary"
//                 >
//                   Buy Now
//                 </Link>
//                 <button
//                   className="btn btn-outline-primary"
//                   id="btn1"
//                   onClick={() => addtocart(products)}
//                 >
//                   Go to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </>
//   );
// }
// export default Details;

//TRY EDIT

// import { useLocation, Link, useNavigate, Navigate } from "react-router-dom";
// import { useState } from "react";
// import { Row, Col, Button } from "react-bootstrap";
// import axios from "axios";
// export default function Details() {
//   const nav = useNavigate();
//   const loc = useLocation();
//   const [products, setProducts] = useState(loc.state);
//   console.log(products);

//   // function addtocart(d) {
//   //   nav("/showcart", { state: d });
//   // }
//   function Addtocart() {
//     const nav = useNavigate();
//     const [selectedProducts, setSelectedProducts] = useState([]);
//     const [cartdata, setCartdata] = useState("");
    
//   }

//   // Function to handle adding a product to the cart
//   const handleAddtocart = async (product) => {
//     // setSelectedProducts([...selectedProducts, product]);

//     let res = await axios.post("addtocart", product);
//     console.log(res.data);
//     const { message, success } = res.data;
//     let [user, setUser] = useState(localStorage.getItem('user'));
//     if(user){
//       if (success) {
//       window.alert(message);
//       nav("/showcart");}
//     }
//      else {
//       alert("Login user")
//         nav('/login')
//     }
  
//   };
//   return (
//     <>
//       <Row>
//         <Col>
//           <div className="container py-5">
//             <div className="row">
//               <div className="col-md-6">
//                 <img
//                   src={products.image}
//                   alt={products.name}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <h3>{products.name}</h3>
//                 <p>Category: {products.category}</p>
//                 <p>Description: {products.description}</p>
//                 <h4 className="text-danger">${products.price}</h4>
//                 <del className="text-muted">${products.mrp}</del>
//                 <br />
//                 <br />
//                 {/* <Link
//                   to={{
//                     pathname: "/orderplace",
//                     search: `?pay=${products.price}`,
//                   }}
//                   className="btn btn-primary"
//                 >
//                   Buy Now
//                 </Link> */}
//                 <Button
//                   variant="primary"
//                   onClick={() => handleAddtocart(products)}
//                 >
//                   Buy Now
//                 </Button>

//                 <button
//                   className="btn btn-outline-primary"
//                   id="btn1"
//                   onClick={() => handleAddtocart(products)}
//                 >
//                   Add to cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//     </>
//   );
// }

// USER LOGIN required

import { useLocation, Link, useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export default function Details() {
  const nav = useNavigate();
  const loc = useLocation();
  const [products, setProducts] = useState(loc.state);
  const [cartdata, setCartdata] = useState("");

  console.log(products);

  // Function to handle adding a product to the cart
  const handleAddtocart = async (product) => {
    let res = await axios.post("addtocart", product);
    console.log(res.data);
    const { message, success } = res.data;
    let user = localStorage.getItem("user");

    if (user) {
      if (success) {
        window.alert(message);
        nav("/showcart");
      }
    } else {
      alert("Login required");
      nav("/login");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-6">
                <img
                  src={products.image}
                  alt={products.name}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6">
                <h3>{products.name}</h3>
                <p>Category: {products.category}</p>
                <p>Description: {products.description}</p>
                <h4 className="text-danger">${products.price}</h4>
                <del className="text-muted">${products.mrp}</del>
                <br />
                <br />
                <Button
                  variant="primary"
                  onClick={() => handleAddtocart(products)}
                >
                  Buy Now
                </Button>

                <button
                  className="btn btn-outline-primary"
                  id="btn1"
                  onClick={() => handleAddtocart(products)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}




