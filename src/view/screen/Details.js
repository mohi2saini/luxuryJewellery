import { useLocation, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
function Details() {
  const nav = useNavigate();
  const loc = useLocation();
  const [products, setProducts] = useState(loc.state);
  console.log(products);
  function addtocart(d) {
    nav("/Addtocart", { state: d });
  }
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
                <button className="btn btn-primary mr-2">Buy Now</button>
                <button
                  className="btn btn-outline-primary"
                  id="btn1"
                  onClick={() => addtocart(products)}
                >
                  Go to cart
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Details;
