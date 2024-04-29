import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductLanding.css";
import productData from "../../../../db.json";
import { FaStar } from "react-icons/fa";

const ProductLanding = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const findProduct = (id) => {
      for (const category in productData) {
        const product = productData[category].find(
          (item) => item.id === parseInt(id)
        );
        if (product) return product;
      }
      return null;
    };

    setProduct(findProduct(id));
  }, [id]);

  return product ? (
    <div className="product-container">
      <div className="image-container">
        <img className="image" src={product.img} alt={product.title} />
      </div>
      <div className="details-container">
        <h1 className="title">{product.title}</h1>
        <p className="price">${product.price}</p>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={`star ${index < product.rating ? "filled" : ""}`}
            />
          ))}
        </div>
        <p className="description">{product.description}</p>
      </div>
    </div>
  ) : (
    <p>Product not found.</p>
  );
};

export default ProductLanding;
