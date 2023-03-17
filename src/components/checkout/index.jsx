import React from "react";
import { Link } from "react-router-dom";

function CheckoutPage({ cart }) {
  return (
    <div className="checkoutContainer">
      <h1>Checkout</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price}
          </li>
        ))}
      </ul>
      <Link to="/" className="backHomeButton">
        Back home
      </Link>
    </div>
  );
}

export default CheckoutPage;
