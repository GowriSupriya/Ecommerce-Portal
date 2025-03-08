# 🛍️ Store Management Portal (React App)

## 📖 Project Overview
This project is a **Store Management Portal** that allows store owners to manage **invoices** and **product information** efficiently. The key functionalities include:

✅ **Invoice Management:** Create, view, and filter invoices.  
✅ **Product Management:** Add, edit, delete, and search for products.  
✅ **Filtering & Searching:** Search invoices by item name and filter them by date.  
✅ **Authentication & Authorization:** Store owners can log in and access only their store's data.  
✅ **PDF Generation:** Download invoices as PDF files.  
✅ **Responsive UI:** Built using **React, Material UI, and CSS** for an intuitive user experience.  

---

## 🛠️ Tech Stack
- **Frontend:** React.js, React Router, Context API  
- **Styling:** CSS, Material UI  
- **State Management:** useState, useEffect  
- **Data Handling:** Local Storage, Mock API  
- **PDF Generation:** jsPDF, react-to-pdf  

---

## 🚀 Live Demo
🔗 **[https://ecommerce-portal-app.vercel.app/](#)**

---

## 📂 Folder Structure
```
/ecommerce-portal
│── /src
│   │── /components
│   │   │── InvoiceList.js
│   │   │── InvoiceDetail.js
│   │   │── ProductList.js
│   │   │── ProductForm.js
│   │   └── Authentication.js
│   │── /pages
│   │   │── Dashboard.js
│   │   └── Dashboard.css
│   │── /api
│   │   │── mockInvoiceData.js
│   │   └── mockProductData.js
│   │── /utils
│   │   └── generatePDF.js
│   └── App.js
│── /public
│── package.json
└── README.md

```

---

##  **Installation & Setup**
Follow these steps to **clone, install, and run** the project locally:

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/ecommerce-portal.git
cd ecommerce-portal
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Application**
```sh
npm start
```
The app will be available at **http://localhost:3000/** 🚀

---

## 🔑 **Authentication**
- Store owners **must log in** to access invoices and products.
- Login credentials are stored in `localStorage`.
- use this login credentials
- store name :- techstore
- password :- password123
---

## 📝 **Features & Functionalities**

### 🎟️ **Invoice Management**
- View all invoices.
- Filter invoices by **date** and **item name**.
- Generate invoices with **item-wise tax calculations**.
- Download invoices as **PDF**.

### 📦 **Product Management**
- Add, edit, and delete products.
- Search for products by **name**.
- Filter products by **store**.

### 🔍 **Search & Filtering**
- Search invoices by item name.
- Filter invoices by **date**.

### 🔒 **Authentication & Authorization**
- Store owners must log in to manage their store’s data.
- Unauthorized users are **redirected to the login page**.

---

## 🚀 **Deployment**
### **Deploying on Netlify/Vercel**
1. **Build the Project**  
   ```sh
   npm run build
   ```
2. **Deploy to Netlify/Vercel**  
   Upload the `/build` folder to **Netlify/Vercel** for deployment.

---

## 🏆 **Future Improvements**
- Integrate a **backend API** for data persistence.
- Implement **role-based access control**.
- Add **user registration & profile management**.

---

## 🤝 **Contributing**
Contributions are welcome! Follow these steps:
1. **Fork the Repository** 🍴
2. **Create a Branch** (`git checkout -b feature-branch`)
3. **Commit Changes** (`git commit -m "Added a new feature"`)
4. **Push to GitHub** (`git push origin feature-branch`)
5. **Create a Pull Request** ✅

---

## 📧 **Contact**
👨‍💻 **Developed by:** *Gandu Gowri Supriya*  
📩 Email: [gowrisupriya10@gmail.com.com] 
🔗 GitHub: [github.com/GowriSupriya] 

🚀 **Happy Coding!** 🎉
