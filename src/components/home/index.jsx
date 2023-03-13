import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/online-shop";

export function ProductPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="productPageContainer">
      <div className="searchContainer">
        <input
        className="searchInputStyle"
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="productContainer">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt={product.title} />
            <h3>{product.description}</h3>
            <h3>{product.price}</h3>
            <Link to={`/product/${product.id}`} className="viewDetailsButton">
              View product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
