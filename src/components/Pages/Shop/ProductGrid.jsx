import React from "react";
import { FaStar } from "react-icons/fa";
import Button from "../../Shared/Button";
import { Link } from "react-router-dom";
import { useCart } from "../../Shared/CartContext";

const ProductGrid = ({ currentPageProducts, onAddToCart }) => {
  const { addToCart } = useCart();
  const handleAddToCart = (product) => {
    onAddToCart(product);
  };

  return (
    <div className="product-grid">
      {currentPageProducts.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-image">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.img}
                alt={product.title}
                className="image-hover"
              />
            </Link>
          </div>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar
                key={index}
                className={`star ${index < product.rating ? "filled" : ""}`}
              />
            ))}
          </div>
          <div className="button">
            <Button
              text="Add to cart"
              bgColor="bg-primary"
              textColor="text-white"
              handler={() => addToCart(product)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
