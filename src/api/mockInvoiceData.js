const mockInvoices = [
    {
      orderId: "INV001",
      date: "2025-03-07",
      storeName: "SuperMart",
      storeId: "store123",
      totalBeforeTax: 140.00, 
      totalWithTax: 150.75,
      items: [
        { name: "Laptop", quantity: 1, price: 1000 },
        { name: "Mouse", quantity: 2, price: 25 },
      ],
    },
    {
      orderId: "INV002",
      date: "2025-03-06",
      storeName: "ElectroWorld",
      storeId: "store456",
      totalBeforeTax: 200.00, 
      totalWithTax: 150.75,
      items: [
        { name: "Keyboard", quantity: 1, price: 50 },
        { name: "Monitor", quantity: 1, price: 150 },
      ],
    },
  ];
  
  export default mockInvoices;
  
  