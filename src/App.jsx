import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { SearchProvider } from "./components/Shared/SearchContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Partners from "./components/Partners/Partners";
import Shop from "./components/Pages/Shop/Shop";
import About from "./components/Pages/About/About";
import Blog1 from "./components/Blogs/Blog1";
import Blog2 from "./components/Blogs/Blog2";
import Blog3 from "./components/Blogs/Blog3";
import ProductLanding from "./components/Pages/ProductLanding/ProductLanding";
import CheckoutPage from "./components/Pages/Checkout/CheckOut";
import { CartProvider } from "./components/Shared/CartContext";
import shampoo from "./assets/hero/shampoo.png";
import mencream from "./assets/category/mencream.png";

const BannerData = {
  discount: "30% OFF",
  title: "Spring into Savings!",
  date: "10 March to 28 March",
  image: shampoo,
  title2: "Shampoo",
  title3: "Spring Sale Alert",
  title4:
    "Get ready to elevate your beauty game with our Spring Sale! Explore a wide range of skincare, makeup, and hair care essentials at amazing prices. DON'T WAIT-SHOP NOW!🌷💄✨",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Spring into Savings!",
  date: "14 March to 28 Jan",
  image: mencream,
  title2: "Cream",
  title3: "Spring Sale",
  title4:
    "Revamp your beauty routine with our exclusive Spring Sale! Discover must-have skincare, makeup, and hair care products at unbeatable prices. DON'T MISS OUT-SHOP NOW AND BLOOM INTO BEAUTY!",
  bgColor: "#2dcc6f",
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleOrderPopup = () => setOrderPopup(!orderPopup);

  const addToCart = (item) => {
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);
    if (exists) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }
    handleOrderPopup();
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
  }, []);

  return (
    <CartProvider>
      <SearchProvider>
        <Router>
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Category />
                    <Category2 />
                    <Services />
                    <Banner data={BannerData} />
                    <Products />
                    <Banner data={BannerData2} />
                    <Blogs />
                    <Partners />
                  </>
                }
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog/1" element={<Blog1 />} />
              <Route path="/blog/2" element={<Blog2 />} />
              <Route path="/blog/3" element={<Blog3 />} />
              <Route path="/product/:id" element={<ProductLanding />} />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
            {orderPopup && <Popup handleOrderPopup={handleOrderPopup} />}
            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </CartProvider>
  );
};

export default App;
