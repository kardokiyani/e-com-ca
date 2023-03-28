import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useTheCart } from "../../hooks/useTheCart";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductSpecificPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const { addToCart, removeFromCart, count, items } = useTheCart();

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
    try {
      addToCart(product);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleRemoveFromCart = (productId) => {
    try {
      const itemIndex = items.findIndex((item) => item.id === productId);
      removeFromCart(itemIndex);
    } catch (error) {
      setIsError(true);
    }
  };

  const handleGoToCheckout = () => {
    navigate("/checkout", { state: { cart: items } });
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
      <img
        className="specificImageStyle"
        src={product.imageUrl}
        alt={product.title}
      />
      <p className="descriptionStyle">{product.description}</p>
      <p className="priceStyle">{product.price}</p>

      <div className="cartContainer">
        <h2>Cart ({count})</h2>
        <button className="addCartStyle" onClick={handleAddToCart}>
          Add to cart
        </button>
        <ul>
          {items.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <div className="titlePriceStyle">
                {item.title} - {item.price}
              </div>
              <button
                className="removeCartStyle"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove from cart
              </button>
            </li>
          ))}
        </ul>
        <div className="totalStyle">
          Total: {items.reduce((acc, item) => acc + item.price, 0)}
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
