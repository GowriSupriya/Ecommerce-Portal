import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockProducts from "../api/mockProductData"; // Ensure mock data is correct
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Load products
  const storedProducts = JSON.parse(localStorage.getItem("products")) || mockProducts;

  console.log("All Products:", storedProducts); // ✅ Log all products
  console.log("Product ID from URL:", id); // ✅ Log the ID

  // Find the product
  const product = storedProducts.find((prod) => prod.id.toString() === id);

  console.log("Found Product:", product); // ✅ Log the found product

  useEffect(() => {
    if (!product) {
      alert("Product not found!");
      navigate("/products");
    }
  }, [product, navigate]);

  if (!product) return null;

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>
      <p><strong>Description:</strong> {product.description || "No description available"}</p>
      <button onClick={() => navigate("/products")}>Back to Products</button>
    </div>
  );
};

export default ProductDetails;

