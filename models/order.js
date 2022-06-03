const mongoose = require("mongoose");

const schema = mongoose.Schema({
  products: {
    type: Array,
    required: true,
  },
  bill: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model("order", schema);
