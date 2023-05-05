import axios from "axios"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"

export default function Showcart(){
    const[cartdata,setCartdata] = useState([])
    useEffect(()=>{
        async function show(){
try {
    let res=await axios.post("showtocart",{})
            console.log(res?.data);
            setCartdata(res?.data)
        
} catch (error) {
    
    console.log(error);
}
            }
        show()
    },[])
console.log("**********************");
    console.log(cartdata);
    console.log("**********************");
    return(
        <>
        
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
                {cartdata.map((product) => (
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
                          onClick={() => {}}
                        >
                          Remove
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
             
                 
            </div>
            <div className="card-footer">
        
             
              <Link className="btn btn-primary">Proceed to Payment</Link>

            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>
    )
    }