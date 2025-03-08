import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mockProducts from "../api/mockProductData";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const storeId = localStorage.getItem("storeId");

  useEffect(() => {
    if (!storeId) {
      navigate("/");
      return;
    }

    // Load products from localStorage or use mock data
    const storedProducts = JSON.parse(localStorage.getItem("products")) || mockProducts;
    const storeProducts = storedProducts.filter((prod) => prod.storeId === storeId);
    setProducts(storeProducts);
  }, [storeId, navigate]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((p) => p.id !== productId);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEdit = (product) => {
    if (!product.id) {
      console.error("Error: Product ID is missing!", product);
      return;
    }
    navigate(`/edit-product/${product.id}`, { state: { product } }); // Ensure ID is passed in the URL
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Product Management</h2>
      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar"
      />
      <button onClick={() => navigate("/add-product")} className="add-btn">
        Add New Product
      </button>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>${Number(product.price).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleEdit(product)}>Edit</button>
                  <button onClick={() => handleDelete(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;












