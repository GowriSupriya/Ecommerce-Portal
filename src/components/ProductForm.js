import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import mockProducts from "../api/mockProductData";
import "./ProductForm.css";

const ProductForm = ({ isEdit }) => {
  const navigate = useNavigate();
  const { productId } = useParams(); // Get product ID from URL
  const storeId = localStorage.getItem("storeId");

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    if (isEdit && productId) {
      const storedProducts = JSON.parse(localStorage.getItem("products")) || mockProducts;
      
      // Ensure both are compared as the same type
      const existingProduct = storedProducts.find(p => p.id === Number(productId));

      if (existingProduct) {
        setProduct(existingProduct);
      }
    }
  }, [isEdit, productId]); // Dependencies ensure this runs only when needed

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      alert("Please fill all fields!");
      return;
    }

    let updatedProducts = JSON.parse(localStorage.getItem("products")) || mockProducts;

    if (isEdit) {
      updatedProducts = updatedProducts.map(p =>
        p.id === Number(productId) ? { ...product, id: Number(productId) } : p
      );
    } else {
      const newProduct = { ...product, id: updatedProducts.length + 1, storeId };
      updatedProducts.push(newProduct);
    }

    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/products");
  };

  return (
    <div className="product-form">
      <h2>{isEdit ? "Edit Product" : "Add Product"}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
        <div className="button-container">
            <button type="submit">{isEdit ? "Update Product" : "Add Product"}</button>
            <button type="button" onClick={() => navigate("/products")} className="cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;





