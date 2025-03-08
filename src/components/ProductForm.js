import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./ProductForm.css";

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const location = useLocation();
  const existingProduct = location.state?.product || null;

  const [formData, setFormData] = useState({
    id: existingProduct?.id || id || "",
    name: existingProduct?.name || "",
    price: existingProduct?.price || "",
    storeId: localStorage.getItem("storeId"),
  });

  useEffect(() => {
    if (!existingProduct && id) {
      // Fetch product from localStorage if not in state
      const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
      const productToEdit = storedProducts.find((p) => p.id === id);
      if (productToEdit) {
        setFormData(productToEdit);
      } else {
        console.error("Error: Product not found in localStorage!");
      }
    }
  }, [existingProduct, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let storedProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (existingProduct || id) {
      // Update existing product
      storedProducts = storedProducts.map((p) =>
        p.id === formData.id ? formData : p
      );
    } else {
      // Generate a unique ID for the new product
      const newProduct = { ...formData, id: `P${Date.now()}` };
      storedProducts.push(newProduct);
    }

    localStorage.setItem("products", JSON.stringify(storedProducts));
    navigate("/products");
  };

  return (
    <div className="product-form">
      <h2>{existingProduct || id ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <div>
          <button type="submit">Save</button>
          <button type="button" className="cancel-btn" onClick={() => navigate("/products")}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;


















