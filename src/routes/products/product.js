const fs = require("fs");
const path = require("path");

const productsDB = path.join(
  __dirname,
  "../..",
  "db",
  "products",
  "all-products.json"
);

const products = (req, res) => {
  fs.readFile(productsDB, "utf8", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log("Read products DB");

    res.end(data);
  });
};

module.exports = products;
