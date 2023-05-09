import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const selectedProducts = location.state?.selectedProducts ?? [];
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    name: '',
    address:'',
  });
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const totalPrice = searchParams.get('totalPrice');
    setTotalPrice(totalPrice || 0);
  }, [location.search]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you could handle submitting the payment information to a server
    // and show a confirmation message to the user
    window.alert('Payment successful! Thank you for your purchase.');
  };
  

  return (
    <div className="container my-5">
      <h1 className="mb-3">Payment</h1>
      <div className="card">
        <div className="card-header">
          <h5>Order Summary</h5>
        </div>
        <div className="card-body">
          <ul className="list-group mb-3">
            {selectedProducts.map((product) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                {product.name}
                <span className="badge badge-primary badge-pill">${product.price}</span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Total Price:
              <span id="total-price">${totalPrice ?? 0}</span>
            </li>
          </ul>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                className="form-control"
                id="cardNumber"
                name="cardNumber"
                required
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="expirationDate">Expiry Date</label>
              <input
                type="text"
                className="form-control"
                id="expirationDate"
                name="expirationDate"
                required
                value={paymentInfo.expirationDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                className="form-control"
                id="cvv"
                name="cvv"
                required
                value={paymentInfo.cvv}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={paymentInfo.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                required
                value={paymentInfo.address}
                onChange={handleInputChange}
              />
            </div>
            <Row className='pbtns'>
              
            <button type="submit" className="btn btn-primary"  id='pbtn'>
              Submit Payment
            </button>
            
            <Link to="/Addtocart" className="btn btn-secondary ml-2" id='p2btn'>
              Back to Products
            </Link>
            
            </Row>
            </form>
        </div>
      </div>
    </div>
  );
};
export default Payment;
