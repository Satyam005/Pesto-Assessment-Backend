const express = require("express");
const { addProduct } = require("../controllers/productController");
const { getProducts } = require("../controllers/productController");

const router = express.Router();

router.route("/getProducts").get(getProducts);

router.route("/addProduct").post(addProduct);

module.exports = router;
