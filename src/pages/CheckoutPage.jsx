import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "../axios/axios";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    clearCart,
    incrementCartItem,
    decrementCartItem,
    removeFromCart,
  } = useContext(AuthContext);

  const [userDetails, setUserDetails] = useState({
    name: "",
    address: "",
    contact: "",
  });

  // Calculate subtotal for each item
  const getSubtotal = (price, quantity) => price * quantity;

  // Calculate total cost
  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + getSubtotal(item.price, item.quantity),
      0,
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirm = async () => {
    try {
      await axiosInstance.post("/sale", {
        userDetails: {
          name: userDetails.name,
          address: userDetails.address,
          contact: userDetails.contact,
        },
        cartItems: cartItems.map((item) => ({
          TicketId: item.TicketId,
          quantity: item.quantity,
          price: item.price,
          MatchId: item.matchId,
        })),
      });

      console.log("Proceeding with payment...", userDetails);
      toast.success("Your order has been placed");
      clearCart();
      navigate("/");
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("There was an issue during checkout. Please try again.");
    }
  };

  return (
    <div className="mt-4 flex w-full items-start justify-center">
      <div className="flex w-full max-w-screen-lg">
        {/* User Details Form */}
        <div
          className="mr-4 flex w-1/2 flex-col justify-between rounded-lg bg-white p-4"
          style={{ minHeight: "300px" }}
        >
          <div>
            <h2 className="mb-4 text-2xl font-semibold">User Details</h2>
            <div className="mb-4">
              <label className="mb-1 block font-semibold text-black">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleInputChange}
                className="w-full rounded border p-2 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block font-semibold text-black">
                Address
              </label>
              <input
                type="text"
                name="address"
                value={userDetails.address}
                onChange={handleInputChange}
                className="w-full rounded border p-2 text-black"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block font-semibold text-black">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                value={userDetails.contact}
                onChange={handleInputChange}
                className="w-full rounded border p-2 text-black"
              />
            </div>
          </div>
          <button
            onClick={handleConfirm}
            className="mt-4 w-full rounded bg-green-500 px-4 py-2 text-white"
          >
            Confirm and Pay
          </button>
        </div>

        {/* Checkout Summary */}
        <div
          className="flex w-1/2 flex-col rounded-lg bg-[#08723e] p-4 text-white"
          style={{ minHeight: "300px" }}
        >
          <h2 className="mb-4 text-2xl font-semibold">Checkout Summary</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="mb-4 flex items-center justify-between"
                >
                  <div className="flex-1 text-lg">
                    <p>Ticket: {item.name}</p>
                    <p>
                      Match: {item.team1} vs {item.team2}
                    </p>
                    <p>Price: ${item.price}</p>
                    <p>Subtotal: ${getSubtotal(item.price, item.quantity)}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg">Quantity :</p>
                    <span className="mr-4 text-lg">{item.quantity}</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          decrementCartItem(item.TicketId, item.matchId)
                        }
                        className="rounded bg-black px-2 py-1 text-2xl text-white hover:bg-white hover:text-black hover:transition-all"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          incrementCartItem(item.TicketId, item.matchId)
                        }
                        className="rounded bg-black px-2 py-1 text-2xl text-white hover:bg-white hover:text-black hover:transition-all"
                      >
                        +
                      </button>
                      <button
                        onClick={() =>
                          removeFromCart(item.TicketId, item.matchId)
                        }
                        className="rounded bg-red-500 px-2 py-1 text-2xl text-black hover:bg-red-800 hover:text-black hover:transition-all"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-xl font-semibold">Total: ${getTotal()}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;


