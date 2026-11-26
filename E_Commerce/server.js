const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let products = [
  { id: 1, name: "T-Shirt", price: 499, description: "Cotton regular fit" },
  { id: 2, name: "Running Shoes", price: 1999, description: "Lightweight sports shoes" }
];
let orders = [];

// Get all products
app.get("/api/products", (req, res) => res.json(products));

// Seller: Add product
app.post("/api/products", (req, res) => {
  const newProd = {
    id: products.length + 1,
    name: req.body.name,
    price: Number(req.body.price),
    description: req.body.description
  };
  products.push(newProd);
  res.json(newProd);
});

// Seller: Edit product
app.put("/api/products/:id", (req, res) => {
  const prod = products.find(p => p.id == req.params.id);
  if (!prod) return res.status(404).json({ message: "Not found" });
  prod.name = req.body.name;
  prod.price = Number(req.body.price);
  prod.description = req.body.description;
  res.json(prod);
});

// Place order (after payment)
app.post("/api/orders", (req, res) => {
  const order = {
    orderId: "ORD" + Math.floor(1000 + Math.random() * 9000),
    items: req.body.items,
    total: req.body.total,
    paymentMethod: req.body.paymentMethod,
    date: new Date().toLocaleString()
  };
  orders.push(order);
  res.json(order);
});

// View successful orders
app.get("/api/orders", (req, res) => res.json(orders));

app.listen(3000, () => console.log("E-Commerce app on http://localhost:3000"));