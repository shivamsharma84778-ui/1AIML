const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let products = [
  { id: 1, name: "Headphones", price: 1500, rating: 4.5 },
  { id: 2, name: "Smartwatch", price: 3200, rating: 4.2 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: Number(req.body.price),
    rating: Number(req.body.rating)
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(3000, () => console.log("Running at http://localhost:3000")); 