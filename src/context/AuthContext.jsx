import React, { createContext, useState } from "react";
import axiosInstance from "../axios/axios.js";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();
  const signup = async (name, email, password) => {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      console.log(response.data);
      toast.success("Successfully registered!"); // Display success toast notification

      return response;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
      console.log("Response is ", response.data);

      const { data, token } = response.data;
      console.log("data is ", data);
      console.log("token is ", token);

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Set user data in state
      setUser(data);

      console.log("User logged in:", data);
      toast.success("Successfully logged in!");

      return response;
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Error logging in");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Successfully logged out!");
  };
  // const addToCart = (ticketToAdd) => {
  //   setCartItems([...cartItems, ticketToAdd]);
  //   toast.success("Ticket added to cart!");
  // };
  const addToCart = (ticketToAdd) => {
    setCartItems((prevItems) => {
      // Check if the item with the same TicketId and matchId already exists
      const existingItemIndex = prevItems.findIndex(
        (item) =>
          item.TicketId === ticketToAdd.TicketId &&
          item.matchId === ticketToAdd.matchId,
      );

      if (existingItemIndex > -1) {
        // Item already in cart, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += ticketToAdd.quantity;
        return updatedItems;
      } else {
        // Item not in cart, add new item
        return [...prevItems, ticketToAdd];
      }
    });
    toast.success("Ticket added to cart!");
  };

  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared!");
  };
  console.log("cart", cartItems);
  const incrementCartItem = (ticketId, matchId) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemToUpdate = updatedItems.find(
        (item) => item.TicketId === ticketId && item.matchId === matchId,
      );
      if (itemToUpdate) {
        itemToUpdate.quantity++;
        return updatedItems;
      }
      return prevItems;
    });
    toast.success("Item quantity increased!");
  };

  const decrementCartItem = (ticketId, matchId) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      const itemToUpdate = updatedItems.find(
        (item) => item.TicketId === ticketId && item.matchId === matchId,
      );
      if (itemToUpdate && itemToUpdate.quantity > 1) {
        itemToUpdate.quantity--;
        return updatedItems;
      }
      return prevItems;
    });
    toast.success("Item quantity decreased!");
  };
  const removeFromCart = (ticketId, matchId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(
        (item) => item.TicketId !== ticketId || item.matchId !== matchId,
      ),
    );
    toast.success("Item removed from cart!");
  };
  const handleCheckout = () => {
    if (!user) {
      console.log("User is not logged in. Redirecting to login...");
      navigate("/login");
      return;
    }

    console.log("Proceeding to checkout with tickets:", cartItems);
    navigate("/checkout"); // Navigate to the checkout page
  };
  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        user,
        cartItems,
        addToCart,
        clearCart,
        decrementCartItem,
        incrementCartItem,
        removeFromCart,
        handleCheckout,
      }}
    >
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};
