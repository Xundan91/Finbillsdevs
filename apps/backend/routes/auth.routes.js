import express from "express";
import {
  signupController,
  loginController,
  logoutController,
  checkAuthController,
  forgetPassController,
  resetPassController,
  verifyEmailController,
  verifyEmailVerificationCodeController,
  deleteUserAccount,
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/signup", signupController);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/check-auth", verifyToken, checkAuthController);
router.post("/forget-password", forgetPassController);
router.post("/reset-password/:token", resetPassController);
router.post("/verify-email", verifyEmailController);
router.post("/verify-email-verification-code", verifyEmailVerificationCodeController);
router.delete("/delete-account", verifyToken, deleteUserAccount);

export default router;
