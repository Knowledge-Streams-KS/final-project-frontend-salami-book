import React, { createContext } from "react";
import axiosInstance from "../axios/axios.js";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
      console.error("Error signing up:", error);
      toast.error("Error signing up");
    }
  };

  return (
    <AuthContext.Provider value={{ signup }}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
};
