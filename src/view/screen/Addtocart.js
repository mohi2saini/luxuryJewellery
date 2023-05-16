
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import React from "react";
// import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
// export default function Addtocart() {
//   const [count, setCount] = useState(0);
//   function addtocart() {
//     setCount(count + 1);
//   }
//   const loc = useLocation();
//   const [product, setProduct] = useState(loc.state);
//   console.log(product);
//   return (
//     <>
//       <Row>
//         <Col>
//           <div className="container py-5">
//             <div className="row">
//               <div className="col-md-6">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="img-fluid"
//                 />
//               </div>
//               <div className="col-md-6">
//                 <h3>{product.name}</h3>
//                 <p>Category: {product.category}</p>
//                 <p>Description: {product.description}</p>
//                 <h4 className="text-danger">${product.price}</h4>
//                 <del className="text-muted">${product.mrp}</del>
//                 <br />
//                 <br />
//                 <button className="btn btn-primary mr-2">Buy Now</button>

//               </div>
//             </div>
//           </div>
//         </Col>
//       </Row>
//       <div>
//         <h2>Cart</h2>
//         <p>Number of items in cart: {count}</p>
//         {/* <button onClick={addtocart}>Add to cart</button> */}
//         <button
//                   className="btn btn-outline-primary"
//                   id="btn1"
//                   onClick={addtocart}>
//                   Add to cart
//                 </button>
//       </div>
//     </>
//   );
// }
/*CHAT GPT CODE */
import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { products } from "../data/data";
import axios from "axios";
const Addtocart = () => {
  const nav =useNavigate();
  const [user,setUser]=useState(localStorage.getItem('user'));
  const [selectedProducts, setSelectedProducts] = useState([]);
   const [cartdata, setCartdata] = useState('');
  // Function to handle adding a product to the cart
 /*  const handleAddtocart = async(product) => {
    setSelectedProducts([...selectedProducts, product]);

      let res = await axios.post('addtocart',product)
      console.log(res.data); 
      const {message,success} =res.data
      if(success){
        window.alert(message);
        nav('/')
  
      }else{
        window.alert(message);
  
      }
    }; */
  useEffect(()=>{
async function showcart(){

  let res = await axios.post('showtocart',{username:user}).catch(s=>console.log(s))

  console.log(res?.data);
  setCartdata(res?.data)
}
showcart()

  },[])

  async function showcart(){

    let res = await axios.post('showtocart',{username:user}).catch(s=>console.log(s))
  
    console.log(res?.data);
    setCartdata(res?.data)
  }
  
  


  const handleAddtocart = async(product) => {
    setSelectedProducts([...selectedProducts, product]);
let params={
  ...product,
  username:user
}    
console.log(params);

let res= await axios.post('',params).catch(s=>console.log(s))
    console.log(res?.data);
    window.alert("Item added to cart.");

    showcart()

  };

  // Function to handle removing a product from the cart
  const handleRemoveFromCart = (product) => {
    const updatedProducts = cartdata.filter(
      (selectedProduct) => selectedProduct.id !== product.id
    );
    console.log(updatedProducts);
    setCartdata(updatedProducts);
    window.alert("Item removed from cart.");
  };

  const totalPrice = cartdata.length>0&&cartdata.reduce((acc, curr) => {
    return typeof curr.price === "number" ? acc + curr.price : acc;
  }, 0);

  console.log(totalPrice);
  console.log(selectedProducts)

  return (
    <div className="container my-5">
      <h1 className="mb-3">Add to Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h5>Select Products</h5>
            </div>
            <div className="card-body">
              <div className="row">
                {products.map((product) => (
                  <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.category}</p>
                        <p className="card-text">${product.price}</p>
                      </div>
                      <div className="card-footer">
                        <button
                          className="btn btn-primary"
                          onClick={() => handleAddtocart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Cart</h5>
            </div>
            <div className="card-body">
              {
                cartdata.length>0&&
                    cartdata.map(d=>(
                      <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={d.id}
                    >
                      {d.name} = ${d.price}
                     
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(d)}
                      >
                        Remove
                      </button>
                    </li>
                  

                    ))
                    
                
              }
               <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price = ${totalPrice}
                   
                  </li>
              {/* {selectedProducts.length > 0 ? (
                <ul className="list-group">
                  {selectedProducts.map((product) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      key={product.id}
                    >
                      {product.name} = ${product.price}
                     
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleRemoveFromCart(product)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Total Price = ${totalPrice}
                   
                  </li>
                </ul>
              ) : (
                <p>No items in cart</p>
              )} */}
            </div>
            <div className="card-footer">
              <Link
                to={{
                  pathname: "/payment",
                  search: `?totalPrice=${totalPrice}`,
                  state: { selectedProducts },
                }}
                className="btn btn-primary"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocart;
