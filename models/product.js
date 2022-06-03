const mongoose = require("mongoose");

const schema = mongoose.Schema({
    productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("products", schema);
