import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  productbycategory,
  productwithcategory,
  updateProduct,
} from "../controllers/productController.js";
export const productRouter = Router();

productRouter.get("/productbycategory/:id", productbycategory);

productRouter.get("/productwithcategory", productwithcategory);

productRouter.get("/products", getAllProducts);

productRouter.get("/products/:id", getProductById);

productRouter.delete("/products/:id", deleteProduct);
productRouter.post("/products", createProduct);

productRouter.put("/products/:id", updateProduct);
