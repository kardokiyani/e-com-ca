import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Nav } from "../UI/nav";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductSpecificPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

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

    getData();
  }, [id]);

  const handleAddToCart = () => {
    setCart([...cart, product]);
    setCartCount(cartCount + 1);
  };

  const handleRemoveFromCart = (productId) => {
    const itemIndex = cart.findIndex((item) => item.id === productId);
    const newCart = [...cart];
    newCart.splice(itemIndex, 1);
    setCart(newCart);
    setCartCount(cartCount - 1);
  };

  const handleGoToCheckout = () => {
    navigate("/checkout", { state: { cart } });
  };

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="specificProductContainer">
      <Nav handleAddToCart={handleAddToCart} cartCount={cartCount} />
      <h1>{product.title}</h1>
      <img
        className="specificImageStyle"
        src={product.imageUrl}
        alt={product.title}
      />
      <p className="descriptionStyle">{product.description}</p>
      <p className="priceStyle">{product.price}</p>

      <div className="cartContainer">
        <h2>Cart ({cartCount})</h2>
        <button className="addCartStyle" onClick={handleAddToCart}>
          Add to cart
        </button>
        <ul>
          {cart.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <div className="titlePriceStyle">
                {item.title} - {item.price}
              </div>
              <button
                className="removeCartStyle"
                onClick={() => handleRemoveFromCart(index)}
              >
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
        <div className="totalStyle">
          Total: {cart.reduce((acc, item) => acc + item.price, 0)}
        </div>

        <button onClick={handleGoToCheckout} className="checkoutButton">
          Go to checkout
        </button>
      </div>
      <div className="backHomeButtonContainer">
        <Link to="/" className="backHomeButton">
          Back home
        </Link>
      </div>
    </div>
  );
}

export default ProductSpecificPage;
