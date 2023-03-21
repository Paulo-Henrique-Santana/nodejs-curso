const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const hbs = exphbs.create({ partialsDir: ["views/partials"] });
const port = 3000;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

const products = [
  { id: 1, name: "Mouse", price: 50.0, brand: "Knup" },
  { id: 2, name: "Teclado", price: 200.0, brand: "Redragon" },
  { id: 3, name: "Monitor", price: 50.0, brand: "AOC" },
  { id: 4, name: "Caixa de som", price: 50.0, brand: "Knup" },
  { id: 5, name: "Mesa", price: 50.0, brand: "Pichau" },
];

app.get("/product/:id", (req, res) => {
  const product = products[req.params.id - 1];

  res.render("product", { product });
});

app.get("/", (req, res) => {
  res.render("products", { products });
});

app.listen(port, () => {
  console.log(`Aplicação está rodando na porta ${port}`);
});
