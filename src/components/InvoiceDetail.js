import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import mockInvoices from "../api/mockInvoiceData";
import "./InvoiceDetail.css";

const InvoiceDetail = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
  
    // Find invoice by orderId
    const invoice = mockInvoices.find(inv => inv.orderId === orderId);
  
    console.log("Invoice Data:", invoice); // Debugging log
  
    if (!invoice) {
      return <h2 className="error-message">Invoice not found!</h2>;
    }
  
    return (
      <div className="invoice-detail">
        <h2>Invoice Details - {invoice.orderId}</h2>
        <p><strong>Date:</strong> {invoice.date}</p>
        <p><strong>Total Before Tax:</strong> ${invoice.totalBeforeTax ? invoice.totalBeforeTax.toFixed(2) : "0.00"}</p>
        <p><strong>Total With Tax:</strong> ${invoice.totalWithTax ? invoice.totalWithTax.toFixed(2) : "0.00"}</p>
  
        <h3>Items:</h3>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Tax</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items && invoice.items.length > 0 ? (
              invoice.items.map((item, index) => {
                console.log("Item Data:", item); // Debugging log
  
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price ? item.price.toFixed(2) : "0.00"}</td>
                    <td>{item.quantity}</td>
                    <td>${item.tax ? item.tax.toFixed(2) : "0.00"}</td>
                    <td>${((item.price && item.quantity ? item.price * item.quantity : 0) + (item.tax || 0)).toFixed(2)}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">No items found</td>
              </tr>
            )}
          </tbody>
        </table>
  
        <button className="back-button" onClick={() => navigate("/invoices")}>
          Back to Invoices
        </button>
      </div>
    );
  };
export default InvoiceDetail;
