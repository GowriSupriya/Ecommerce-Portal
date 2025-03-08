import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mockInvoices from "../api/mockInvoiceData"; // Importing mock invoice data
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  const storeName = localStorage.getItem("storeName") || "User";
  const storeId = localStorage.getItem("storeId"); // Get store ID

  const [invoices, setInvoices] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (!storeId) {
      navigate("/");
      return;
    }

    //  Get invoices from mock data & filter by storeId
    const filteredInvoices = mockInvoices.filter(inv => inv.storeId === storeId);
    setInvoices(filteredInvoices);

    //  Get products from localStorage & filter by storeId
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const filteredProducts = storedProducts.filter(prod => prod.storeId === storeId);
    setProductCount(filteredProducts.length);

  }, [storeId, navigate]);

  return (
    <div className="dashboard-container">
      <h2>Welcome, {storeName}</h2>
      <div className="dashboard-grid">
        <div className="card" onClick={() => navigate("/invoices")}>
          <h3>Total Invoices</h3>
          <p>{invoices.length}</p> {/* Shows filtered invoice count from mock data */}
        </div>
        <div className="card" onClick={() => navigate("/products")}>
          <h3>Total Products</h3>
          <p>{productCount}</p> {/* Shows filtered product count from localStorage */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;





