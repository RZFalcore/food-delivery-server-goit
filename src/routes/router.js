const products = require("./products/product");
const signUp = require("./singUp/signUp");
const mainRoute = require('./main/main');

const router = {
  "/products": products,
  "/singup": signUp,
  default: mainRoute
};

module.exports = router;
