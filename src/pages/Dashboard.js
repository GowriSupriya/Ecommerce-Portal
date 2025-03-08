import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import mockInvoices from "../api/mockInvoiceData";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const storeName = localStorage.getItem("storeName") || "User";
  const storeId = localStorage.getItem("storeId");

  const [invoices, setInvoices] = useState([]);
  const [productCount, setProductCount] = useState(0);

  // Use useCallback to avoid function recreation
  const updateProductCount = useCallback(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    console.log("Stored Products:", storedProducts); // Debugging line

    if (!Array.isArray(storedProducts)) {
      console.error("Invalid product data in localStorage.");
      return;
    }

    const filteredProducts = storedProducts.filter(prod => prod.storeId === storeId);
    console.log("Filtered Products:", filteredProducts); // Debugging line

    setProductCount(filteredProducts.length);
  }, [storeId]); // Dependencies updated

  useEffect(() => {
    if (!storeId) {
      navigate("/");
      return;
    }

    // Load invoices from mock data
    const filteredInvoices = mockInvoices.filter(inv => inv.storeId === storeId);
    setInvoices(filteredInvoices);

    // Call updateProductCount to load product count
    updateProductCount();

    // Listen for localStorage changes
    const handleStorageChange = () => updateProductCount();
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [storeId, navigate, updateProductCount]); // Fixed dependency array

  return (
    <div className="dashboard-container">
      <h2>Welcome, {storeName}</h2>
      <div className="dashboard-grid">
        <div className="card" onClick={() => navigate("/invoices")}>
          <h3>Total Invoices</h3>
          <p>{invoices.length}</p>
        </div>
        <div className="card" onClick={() => navigate("/products")}>
          <h3>Total Products</h3>
          <p>{productCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;













