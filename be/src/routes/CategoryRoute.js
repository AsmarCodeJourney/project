import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getCategory,
} from "../controllers/categoryController.js";
export const categoryRouter = Router();
categoryRouter.get("/category", getCategory);

categoryRouter.post("/category", createCategory);
categoryRouter.delete("/category/:id", deleteCategory);
