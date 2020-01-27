const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.get("/product", async (req, res) => {
  let product = await Product.find({});
  res.json(product);
});


router.get("/name", async (req, res) => {
    let product = await Product.find({name:req.body.name});
    res.json(product);
  });






  
router.post("/product", async (req, res) => {
  let product = new Product({
    name: req.body.name
  });
  let newproduct = await product.save();
  res.json({ newproduct });
});

module.exports = router