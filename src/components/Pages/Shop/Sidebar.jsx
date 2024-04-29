import React from "react";

const Sidebar = ({
  categories,
  selectedCategories,
  toggleCategorySelection,
  sortOption,
  setSortOption,
  starSortOption,
  setStarSortOption,
  selectedPriceRange,
  handlePriceRangeChange,
  priceRanges,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Product Categories</h3>
        <ul className="category-list">
          {categories.map((category) => (
            <li
              key={category}
              className={`category-item ${
                selectedCategories.includes(category) ? "selected" : ""
              }`}
              onClick={() => toggleCategorySelection(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>Sort By</h3>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>

      <div className="sidebar-section">
        <h3>Sort by Star Rating</h3>
        <select
          value={starSortOption}
          onChange={(e) => setStarSortOption(e.target.value)}
        >
          <option value="">Default</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div className="sidebar-section">
        <h3>Price</h3>
        <select value={selectedPriceRange} onChange={handlePriceRangeChange}>
          <option value="">All Prices</option>
          {Object.keys(priceRanges).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
