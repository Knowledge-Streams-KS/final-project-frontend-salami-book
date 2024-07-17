import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const TicketDetails = ({ ticket }) => {
  const navigate = useNavigate();
  console.log("ticet", ticket);
  const { user, addToCart, clearCart, cartItems } = useContext(AuthContext);

  const handleAddToCart = () => {
    if (!user) {
      // Prompt user to log in
      console.log("User is not logged in. Redirecting to login...");
      navigate("/login");
      // Implement your login redirect logic here
      return;
    }
    addToCart(ticket);
  };

  const handleCheckout = () => {
    if (!user) {
      // Prompt user to log in
      console.log("User is not logged in. Redirecting to login...");
      navigate("/login");

      return;
    }

    console.log("Proceeding to checkout with tickets:", ticket);
    clearCart();
  };

  return (
    <div className="mt-4">
      <h3 className="mb-2 text-xl font-semibold">Ticket Details</h3>
      <div className="rounded-lg bg-gray-100 p-4 text-black">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <div key={index} className="mb-2 flex items-center justify-between">
              <p>{item}</p>
              <div className="flex items-center">
                <button
                  onClick={() => decrementCartItem(item.id)}
                  className="mr-2 rounded bg-gray-300 px-3 py-1"
                >
                  -
                </button>
                <p className="mr-2">{item.quantity}</p>
                <button
                  onClick={() => incrementCartItem(item.id)}
                  className="ml-2 rounded bg-gray-300 px-3 py-1"
                >
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}

        <button
          onClick={handleAddToCart}
          className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Add to Cart
        </button>
        <button
          onClick={handleCheckout}
          className="ml-2 mt-2 rounded bg-green-500 px-4 py-2 text-white"
        >
          Checkout
        </button>
        <button
          onClick={clearCart}
          className="ml-2 mt-2 rounded bg-green-500 px-4 py-2 text-white"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default TicketDetails;
