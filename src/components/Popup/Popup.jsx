import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";
import { useCart } from "../Shared/CartContext";
import "./Popup.css";

const Popup = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const { cartItems, onIncreaseQuantity, onDecreaseQuantity, onDeleteItem } =
    useCart();

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleNavigateToCheckout = () => {
    navigate("/checkout", { state: { cartItems } });
    handleOrderPopup();
  };

  return (
    <div className="checkout-popup">
      <div className="popup-container">
        <div className="popup-header">
          <h1 className="text-lg font-bold">CHECK OUT</h1>
          <IoCloseOutline
            onClick={handleOrderPopup}
            className="popup-close-icon"
          />
        </div>
        <div className="flex flex-col">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="popup-item">
                <img src={item.img} alt={item.title} />
                <div className="popup-item-info">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
                <div className="flex items-center">
                  <button
                    className="quantity-button decrease"
                    onClick={() => onDecreaseQuantity(item)}
                  >
                    -
                  </button>
                  <span className="quantity-text">Qty: {item.quantity}</span>
                  <button
                    className="quantity-button increase"
                    onClick={() => onIncreaseQuantity(item)}
                  >
                    +
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => onDeleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No items in your cart.</p>
          )}
          <div className="popup-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
          <div className="popup-order-button-container">
            <Button
              text="Go To Checkout"
              bgColor="bg-primary"
              textColor="text-white"
              handler={handleNavigateToCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
