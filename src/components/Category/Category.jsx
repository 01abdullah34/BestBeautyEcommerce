import React from "react";
import Image1 from "../../assets/category/shampoo.png";
import Image2 from "../../assets/category/cream.png";
import Image3 from "../../assets/category/parfume.png";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <div className="container">
        <div className="category-grid">
          {/* First Column */}
          <div className="category-card1">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Hair Products</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img className="category-image" src={Image1} alt="Hair Products" />
          </div>

          {/* Second Column */}
          <div className="category-card2">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Creams</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img className="category-image" src={Image2} alt="Creams" />
          </div>

          {/* Third Column */}
          <div className="category-card3">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Fragrances</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img className="category-image" src={Image3} alt="Fragrances" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
