const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    ProductName: {
      type: String,
      required: true,
    },
    ProductCode: {
      type: String,
    },
    Img: {
      type: String,
    },
    UnitPrice: {
      type: String,
      required: true,
    },
    Quantity: {
      type: String,
      required: true,
    },
    TotalPrice: {
      type: String,
    },
    CreateDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { versionKey: false }
);
const ProductModel = mongoose.model("Product", ProductSchema);
module.exports = ProductModel;
