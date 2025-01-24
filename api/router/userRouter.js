import express from "express";
import {
  getUser,
  login,
  logout,
  register,
  updatePassword,
  updateProfile,
  forgotPassword,
  resetPassword,
  getUserForPortfolio,
} from "../controller/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const UserRouter = express.Router();

UserRouter.post("/register", register);
UserRouter.post("/login", login);
UserRouter.get("/me", isAuthenticated, getUser);
UserRouter.get("/logout", isAuthenticated, logout);
UserRouter.get("/portfolio/me", getUserForPortfolio);
UserRouter.put("/password/update", isAuthenticated, updatePassword);
UserRouter.put("/me/profile/update", isAuthenticated, updateProfile);
UserRouter.post("/password/forgot", forgotPassword);
UserRouter.put("/password/reset/:token", resetPassword);

export default UserRouter;
