import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export const Checkout = () => {
  const { state } = useLocation();
  const cart = state && state.cart ? state.cart : [];
  let total = 0;

  return (
    <div className="cartProductContainer">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p className="cartEmptyStyle">Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((item) => {
            total += item.price;
            return (
              <li key={item.id}>
                <h2>{item.title}</h2>
                <img
                  className="cartImageStyle"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <p className="descriptionStyle">{item.description}</p>
                <p className="priceStyle">{item.price}</p>
                <Link to="/checkoutSuccess" className="purchaseButton">
                  Purchase
                </Link>
              </li>
            );
          })}
          <li>
            <div className="totalStyle">
              <h2>Total:</h2>
              <p>{total}</p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};
