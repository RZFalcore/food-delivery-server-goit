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
      console.error(err);
    }

    res.end(data);
    console.log("Read products DB");
  });
};

module.exports = products;
