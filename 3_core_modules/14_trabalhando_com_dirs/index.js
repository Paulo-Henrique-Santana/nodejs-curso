const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  console.log("Não existe!");
  fs.mkdirSync("minhapasta");
} else {
  console.log("Existe!");
}
