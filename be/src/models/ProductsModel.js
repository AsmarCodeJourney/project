import mongoose, { Schema } from "mongoose";

const productsSchema = new mongoose.Schema({
  categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
  name: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String },
  desc2: { type: String },
  description: { type: String },
  price: { type: Number },
});
export const Product = mongoose.model("Product", productsSchema);
