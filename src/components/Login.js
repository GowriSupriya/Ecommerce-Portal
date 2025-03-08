import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const mockUsers = [
  { storeId: "store123", username: "techstore", password: "password123", storeName: "Tech Store" },
  { storeId: "store456", username: "gadgethub", password: "password456", storeName: "Gadget Hub" }
];

const Login = ({ setAuth }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(u => u.username === credentials.username && u.password === credentials.password);
    if (user) {
      localStorage.setItem("storeId", user.storeId);
      localStorage.setItem("storeName", user.storeName);
      setAuth(true);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Store Owner Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

