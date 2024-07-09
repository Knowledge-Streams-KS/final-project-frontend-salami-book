import React, { createContext, useState } from "react";
import axiosInstance from "../axios/axios.js";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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

  return (
    <AuthContext.Provider value={{ signup, login, logout, user }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};
