import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CheckOut.css";

const CheckoutItem = ({
  item,
  onIncreaseQuantity,
  onDecreaseQuantity,
  onDeleteItem,
}) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      onDecreaseQuantity(item);
    } else {
      onDeleteItem(item);
    }
  };

  return (
    <div className="checkout-item">
      <img src={item.img} alt={item.title} />
      <div>
        <div>{item.title}</div>
        <div>${Number(item.price).toFixed(2)}</div>
      </div>
      <div className="quantity-controls">
        <button className="decrease" onClick={handleDecrease}>
          -
        </button>
        <span>Qty: {item.quantity}</span>
        <button className="increase" onClick={() => onIncreaseQuantity(item)}>
          +
        </button>
        <button className="delete" onClick={() => onDeleteItem(item)}>
          Delete
        </button>
      </div>
      <div>Total: ${(item.quantity * item.price).toFixed(2)}</div>
    </div>
  );
};

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const items = location.state?.cartItems || [];
    return items.map((item) => ({ ...item }));
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleDeleteItem = (productToDelete) => {
    setCartItems(cartItems.filter((item) => item.id !== productToDelete.id));
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const [totalPrice, setTotalPrice] = useState(calculateTotal());

  useEffect(() => {
    setTotalPrice(calculateTotal());
  }, [cartItems]);

  const handleIncreaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (product) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      )
    );
  };

  const handleSubmit = () => {
    setOrderPlaced(true); // This should trigger the alert display
  };

  const handleContinue = () => {
    navigate("/"); // Navigate to home on continue
  };

  return (
    <div className="checkout-page">
      <h1>Proceed to Checkout</h1>
      {orderPlaced && (
        <div className="order-warning">
          Your order is placed
          <button className="continue" onClick={handleContinue}>
            Continue
          </button>
        </div>
      )}
      <div className="shipping-address">
        <h2>Shipping Address</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State/Province/Region" required />
          <input type="text" placeholder="Postal Code" required />
          <input type="text" placeholder="Country" required />
        </form>
      </div>
      <div className="payment-method">
        <h2>Payment Method</h2>
        <form>
          <input type="text" placeholder="Name on Card" required />
          <input type="number" placeholder="Card Number" required />
          <input type="date" placeholder="Expiration Date" required />
          <input type="number" placeholder="CVV" required />
        </form>
      </div>
      <div className="review-items">
        <h2>Review Items and Shipping</h2>
        {cartItems.map((item) => (
          <CheckoutItem
            key={item.id}
            item={item}
            onIncreaseQuantity={handleIncreaseQuantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onDeleteItem={handleDeleteItem}
          />
        ))}
        <div className="total-price">Total Price: ${totalPrice}</div>
        <button className="place-order" onClick={handleSubmit}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
