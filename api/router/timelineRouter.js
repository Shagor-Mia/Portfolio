import express from "express";
import {
  deleteTimeline,
  getAllTimelines,
  postTimeline,
  // updateTimeline,
} from "../controller/timelineController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const timelineRouter = express.Router();

timelineRouter.post("/add", isAuthenticated, postTimeline);
timelineRouter.delete("/delete/:id", isAuthenticated, deleteTimeline);
timelineRouter.get("/getall", getAllTimelines);

export default timelineRouter;
