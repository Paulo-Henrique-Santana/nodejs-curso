const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  const user = {
    name: "Matheus",
    surname: "Battisti",
    age: 30,
  };

  const palavra = "Teste";

  res.render("home", { user: user, palavra });
});

app.listen(3000, () => {
  console.log("App está rodando!");
});
