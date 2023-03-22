import React from "react";
import { useLocation } from "react-router-dom";

export const CartPage = () => {
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
              <button className="purchaseButton">Purchase</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
