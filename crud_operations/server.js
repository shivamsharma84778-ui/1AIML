const express = require("express");
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: "Mouse", price: 500, description: "Wireless optical mouse" },
  { id: 2, name: "Keyboard", price: 1200, description: "Mechanical keyboard" }
];

// READ all products
app.get("/products", (req, res) => {
  res.json(products);
});

// READ single product
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// CREATE product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    description: req.body.description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// UPDATE product
app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.description = req.body.description || product.description;

  res.json(product);
});

// DELETE product
app.delete("/products/:id", (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.json({ message: "Product deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000")); 