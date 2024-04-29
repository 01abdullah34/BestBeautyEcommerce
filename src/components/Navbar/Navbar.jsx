import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosMenu, IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import logo from "./logo.png";
import { useSearch } from "../Shared/SearchContext";
import Popup from "../Popup/Popup";
import { useCart } from "../Shared/CartContext";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const { cartItems } = useCart();
  const [popupVisible, setPopupVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();
  const searchRef = useRef(null);
  const location = useLocation();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    // Define the toggleMenu function
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    // Define the closeMenu function
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white duration-200 relative z-40">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "250px", height: "auto" }}
            />
          </Link>
          <ul className="hidden md:flex items-center gap-4">
            {MenuLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.link}
                  className="px-4 font-semibold hover:text-black dark:hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className="md:hidden p-3" onClick={toggleMenu}>
            <IoIosMenu size={24} />
          </button>
          {menuVisible && (
            <ul className="absolute top-full left-0 bg-white dark:bg-gray-900 w-full text-center dropdown-menu">
              {MenuLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <Link
                    to={link.link}
                    className="block p-4"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center gap-4">
          {location.pathname === "/shop" && (
            <div className="relative hidden md:block" ref={searchRef}>
              <input
                type="text"
                placeholder="Search"
                className="search-bar"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600 dark:text-gray-400" />
            </div>
          )}
          <DarkMode />
          <button
            className="relative p-3"
            onClick={() => setPopupVisible(!popupVisible)}
          >
            <FaShoppingCart />
            <span className="badge">
              {cartItems.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </button>
          {popupVisible && (
            <Popup
              items={cartItems}
              handleOrderPopup={() => setPopupVisible(!popupVisible)}
            />
          )}
        </div>
      </div>
      <div
        style={{ marginTop: menuVisible ? "200px" : "0px" }}
        className="content-transition"
      ></div>
    </div>
  );
};

export default Navbar;
