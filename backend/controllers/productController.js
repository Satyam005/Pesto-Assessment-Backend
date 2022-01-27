const products = require("../database/productDB");
const Joi = require("joi");

exports.getProducts = (req, res) => {
  res.send(products);
};

exports.addProduct = (req, res) => {
  const schema = Joi.object({
    product_name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
  });

  const validation = schema.validate(req.body);

  if (validation.error) {
    //400 Bad request
    res.status(400).send(validation.error.details[0].message);
    return;
  }

  const product = {
    id: products.length + 1,
    product_name: req.body.product_name,
    price: req.body.price,
    description: req.body.description,
  };
  products.push(product);
  res.send(products);
};
