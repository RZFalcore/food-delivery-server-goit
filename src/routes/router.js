const products = require("./products/product");
const signUp = require("./singUp/signUp");

const router = {
  "/products": products,
  "/singup": signUp
};

module.exports = router;
