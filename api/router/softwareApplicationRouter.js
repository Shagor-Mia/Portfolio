import express from "express";
import {
  addNewApplication,
  deleteApplication,
  getAllApplications,
} from "../controller/softwareApplicationController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const softwareApplicationRouter = express.Router();

softwareApplicationRouter.post("/add", isAuthenticated, addNewApplication);
softwareApplicationRouter.delete(
  "/delete/:id",
  isAuthenticated,
  deleteApplication
);
softwareApplicationRouter.get("/getall", getAllApplications);

export default softwareApplicationRouter;
