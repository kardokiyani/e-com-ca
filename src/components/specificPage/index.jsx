import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CartPage from "../cartFunctionality";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductSpecificPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(`${url}/${id}`);
        const json = await response.json();
        setProduct(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData(`https://api.noroff.dev/api/v1/online-shop/${id}`);
  }, [id]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
    setCartCount(cartCount - 1);
  };

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="specificProductContainer">
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <p className="descriptionStyle">{product.description}</p>
      <p className="priceStyle">{product.price}</p>
      <CartPage />
      <Link to="/" className="backHomeButton">
        Back home
      </Link>

      <div className="cartContainer">
        <h2>Cart ({cartCount})</h2>
        <button onClick={handleAddToCart}>Add to cart</button>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - {item.price}
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
        <Link to="/cartPage" className="checkoutButton">
          Go to checkout
        </Link>
      </div>
    </div>
  );
}

export default ProductSpecificPage;