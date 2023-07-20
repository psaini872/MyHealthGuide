import express from "express";
import { protect } from "../controllers/authControllers.js";

import {
  getFoodByDate,
  postFoodByDate,
  updateFoodByDate,
} from "../controllers/foodControllers.js";

const router = express.Router();
router.route("/").post(protect, postFoodByDate);
router.route("/:id").get(protect, getFoodByDate);

export default router;
