const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String, 
});
module.exports = Product = mongoose.model("product", ProductSchema);
