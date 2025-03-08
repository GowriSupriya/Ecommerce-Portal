import jsPDF from "jspdf";
import autoTable from "jspdf-autotable"; // ✅ Import autoTable separately

const generatePDF = (invoice) => {
  const doc = new jsPDF();
  doc.text("Invoice Report", 14, 10);

  const columns = ["Item Name", "Quantity", "Price"];
  const rows = invoice.items.map((item) => [item.name, item.quantity, `$${item.price.toFixed(2)}`]);

  // ✅ Use autoTable function properly
  autoTable(doc, {
    startY: 20,
    head: [columns],
    body: rows,
  });

  doc.save(`Invoice_${invoice.id}.pdf`);
};

export default generatePDF;


