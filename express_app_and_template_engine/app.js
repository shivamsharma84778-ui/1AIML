const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let users = ["Shivam Sharma", "Kartik Sharma"];

app.get("/", (req, res) => {
  res.render("index", { title: "Home Page" });
});

app.get("/about", (req, res) => {
  res.send("<h2>About Us</h2><p>This is a simple Express app with EJS.</p>");
});

app.get("/contact", (req, res) => {
  res.render("contact", { message: "" });
});

app.post("/contact", (req, res) => {
  const { name, msg } = req.body;
  res.render("contact", { message: `Thanks ${name}, we received: "${msg}"` });
});

app.get("/users", (req, res) => {
  res.render("users", { users });
});

app.post("/users", (req, res) => {
  if (req.body.username) {
    users.push(req.body.username);
  }
  res.redirect("/users");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));