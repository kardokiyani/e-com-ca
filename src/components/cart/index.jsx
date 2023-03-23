import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Checkout = () => {
  const { state } = useLocation();

  return (
    <div className="cartProductContainer">
      <h1>Your Cart</h1>
      {state.cart.length === 0 ? (
        <p className="cartEmptyStyle">Your cart is empty!</p>
      ) : (
        <ul>
          {state.cart.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.imageUrl} alt={item.title} />
              <p className="descriptionStyle">{item.description}</p>
              <p className="priceStyle">{item.price}</p>
              <Link to="/checkoutSuccess" className="purchaseButton">
                Purchase
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
