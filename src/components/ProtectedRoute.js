import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storeId = localStorage.getItem("storeId");
  return storeId ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
