import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mockInvoices from "../api/mockInvoiceData";
import "./InvoiceList.css";
import generatePDF from "../utils/generatePDF";

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate();
  const storeId = localStorage.getItem("storeId");

  useEffect(() => {
    if (!storeId) {
      navigate("/");
      return;
    }

    const storeInvoices = mockInvoices.filter(inv => inv.storeId === storeId);
    setInvoices(storeInvoices);
    setFilteredInvoices(storeInvoices);
  }, [storeId, navigate]);

  const handleDateFilter = (e) => {
    setSelectedDate(e.target.value);
    filterInvoices(e.target.value, searchItem);
  };

  const handleItemSearch = (e) => {
    setSearchItem(e.target.value);
    filterInvoices(selectedDate, e.target.value);
  };

  const filterInvoices = (date, item) => {
    let filtered = invoices;
    if (date) {
      filtered = filtered.filter(inv => inv.date === date);
    }
    if (item) {
      filtered = filtered.filter(inv => inv.items.some(i => i.name.toLowerCase().includes(item.toLowerCase())));
    }
    setFilteredInvoices(filtered);
  };

  return (
    <div className="invoice-list">
      <h2>Invoices</h2>
      <div className="filters">
        <input type="date" value={selectedDate} onChange={handleDateFilter} />
        <input type="text" placeholder="Search Item..." value={searchItem} onChange={handleItemSearch} />
      </div>

      {filteredInvoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Store</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
  {filteredInvoices.map((invoice) => (
    <tr key={invoice.id}>
      <td>{invoice.orderId}</td>
      <td>{invoice.date}</td>
      <td>{invoice.storeName}</td>
      <td>${invoice.total ? invoice.total.toFixed(2) : "0.00"}</td>
      <td>
        <button onClick={() => navigate(`/invoice/${invoice.orderId}`)}>View</button>
        <button onClick={() => generatePDF(invoice)}>Download PDF</button>
      </td>
    </tr>
  ))}
</tbody>

        </table>
      )}
    </div>
  );
};

export default InvoiceList;



