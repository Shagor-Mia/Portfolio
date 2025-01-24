import express from "express";
import {
  addNewSkill,
  deleteSkill,
  getAllSkills,
  updateSkill,
} from "../controller/skillController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const skillRouter = express.Router();

skillRouter.post("/add", isAuthenticated, addNewSkill);
skillRouter.delete("/delete/:id", isAuthenticated, deleteSkill);
skillRouter.put("/update/:id", isAuthenticated, updateSkill);
skillRouter.get("/getall", getAllSkills);

export default skillRouter;
