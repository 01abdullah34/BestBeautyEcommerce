import React from "react";
import Image1 from "../../assets/category/tool.png";
import Image2 from "../../assets/category/deodorant.png";
import Image3 from "../../assets/category/makeup.png";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  return (
    <div className="category-container">
      <div className="container">
        <div className="category-grid">
          {/* First Column */}
          <div className="category-card4">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Tools & Accessories</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img
              className="category-image"
              src={Image1}
              alt="Tools and Accessories"
            />
          </div>

          {/* Second Column */}
          <div className="category-card5">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Personal Cares</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img className="category-image" src={Image2} alt="Personal Cares" />
          </div>

          {/* Third Column */}
          <div className="category-card6">
            <div className="category-details">
              <p className="category-text-small">Try</p>
              <p className="category-text-medium">These</p>
              <p className="category-text-large">Makeups</p>
              <Link to="/shop" className="category-button">
                Browse
              </Link>
            </div>
            <img className="category-image" src={Image3} alt="Makeups" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
