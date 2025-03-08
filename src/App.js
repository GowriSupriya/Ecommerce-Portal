import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard"; 
import ProductList from "./components/ProductList";
import InvoiceList from "./components/InvoiceList";
import ProtectedRoute from "./components/ProtectedRoute";
import ProductForm from "./components/ProductForm";
import ProductDetails from "./components/ProductDetails";
import InvoiceDetail from "./components/InvoiceDetail"; 


const App = () => {
  const [auth, setAuth] = useState(!!localStorage.getItem("storeId"));

  return (
    <Router>
      {auth && <Navbar />}
      <Routes>
        <Route path="/" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
        <Route path="/invoices" element={<ProtectedRoute><InvoiceList /></ProtectedRoute>} />
        <Route path="/invoice/:orderId" element={<InvoiceDetail />} />

        <Route path="/add-product" element={<ProductForm isEdit={false} />} />
        <Route path="/edit-product/:productId" element={<ProductForm isEdit={true} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;




