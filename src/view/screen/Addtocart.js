import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/data";
import axios from "axios";
const Addtocart = () => {
  const [user,setUser]=useState(localStorage.getItem('user'));
  const [selectedProducts, setSelectedProducts] = useState([]);
   const [cartdata, setCartdata] = useState('');
  // Function to handle adding a product to the cart
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
