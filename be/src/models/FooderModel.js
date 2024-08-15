import mongoose from "mongoose";

const fooderSchema = new mongoose.Schema({
  categoryId: { type: String, ref: "Category" },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number },
});

export const Fooder = mongoose.model("Fooder", fooderSchema);
