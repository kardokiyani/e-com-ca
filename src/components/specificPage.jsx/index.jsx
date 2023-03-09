import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SpecificPage } from "../../App";

const url = "https://api.noroff.dev/api/v1/online-shop";

function ProductSpecificPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

    getData((`https://api.noroff.dev/api/v1/online-shop/${id}`));
  }, [id]);

  if (isLoading) {
    return <div>Loading product details...</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.description}</h3>
      {/* Display more product details as needed */}
    </div>
  );
}

export default ProductSpecificPage;

