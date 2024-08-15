import { Router } from "express";
import {
  deleteFood,
  getAllFood,
  getFoodByCategory,
  postFood,
  updateFood,
} from "../controllers/fooderController.js";
export const fooderRouter = Router();

fooderRouter.get("/fooder", getAllFood);

// fooderRouter.get("/fooder/:id", getFoodById);

fooderRouter.delete("/fooder/:id", deleteFood);
fooderRouter.post("/fooder", postFood);

fooderRouter.put("/fooder/:id", updateFood);
fooderRouter.get("/fooder/:id", getFoodByCategory);
