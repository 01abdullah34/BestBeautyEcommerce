import React, { useState, useMemo, useLayoutEffect } from "react";
import { useSearch } from "../../Shared/SearchContext";
import data from "../../../../db.json";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";
import Popup from "../../Popup/Popup";
import "./ShopPage.css";

const ShopPage = () => {
  const { searchTerm } = useSearch();
  const allProducts = useMemo(() => Object.values(data).flat(), []);
  const categories = Object.keys(data);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedReview, setSelectedReview] = useState(0);
  const [sortOption, setSortOption] = useState("default");
  const [starSortOption, setStarSortOption] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const itemsPerPage = 8;

  const priceRanges = {
    "Under $25": [0, 25],
    "$25 to $50": [25, 50],
    "$50 to $100": [50, 100],
    "$100 to $200": [100, 200],
    "$200 & Above": [200, Infinity],
  };

  // Use Layout Effect to scroll to the top
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleCategorySelection = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handlePriceRangeChange = (e) => setSelectedPriceRange(e.target.value);
  const handleReviewChange = (e) =>
    setSelectedReview(parseInt(e.target.value, 10));

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowPopup(true);
  };

  const handleOrderPopup = () => {
    setShowPopup(!showPopup);
  };

  const handleIncreaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.max(0, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const filterByCategory = (product) =>
    selectedCategories.length === 0 ||
    selectedCategories.some((cat) => data[cat].includes(product));

  const filterByPrice = (product) => {
    if (!selectedPriceRange) return true;
    const range = priceRanges[selectedPriceRange];
    return product.price >= range[0] && product.price <= range[1];
  };

  const filterByRating = (product) => product.rating >= selectedReview;

  const filteredProducts = useMemo(() => {
    let products = allProducts
      .filter(filterByCategory)
      .filter(filterByPrice)
      .filter(filterByRating)
      .filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

    if (starSortOption) {
      products = products.filter(
        (product) =>
          parseInt(product.rating, 10) === parseInt(starSortOption, 10)
      );
    }

    return products.sort((a, b) => {
      switch (sortOption) {
        case "priceLowHigh":
          return a.price - b.price;
        case "priceHighLow":
          return b.price - a.price;
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
  }, [
    allProducts,
    selectedCategories,
    selectedPriceRange,
    selectedReview,
    starSortOption,
    searchTerm,
    sortOption,
  ]);

  const handlePageChange = (page) => setCurrentPage(page);

  const currentPageProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filteredProducts]);

  return (
    <div className="shop-container">
      <Sidebar
        categories={categories}
        selectedCategories={selectedCategories}
        toggleCategorySelection={toggleCategorySelection}
        sortOption={sortOption}
        setSortOption={setSortOption}
        selectedPriceRange={selectedPriceRange}
        handlePriceRangeChange={handlePriceRangeChange}
        selectedReview={selectedReview}
        handleReviewChange={handleReviewChange}
        starSortOption={starSortOption}
        setStarSortOption={setStarSortOption}
        priceRanges={priceRanges}
      />
      <div className="product-display">
        <ProductGrid
          currentPageProducts={currentPageProducts}
          onAddToCart={handleAddToCart}
        />
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {showPopup && (
        <Popup
          items={cartItems}
          handleOrderPopup={handleOrderPopup}
          onIncreaseQuantity={handleIncreaseQuantity}
          onDecreaseQuantity={handleDecreaseQuantity}
        />
      )}
    </div>
  );
};

export default ShopPage;
