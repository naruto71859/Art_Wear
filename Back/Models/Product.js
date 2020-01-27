const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { String }
});
module.exports = Product = mongoose.model("product", ProductSchema);
