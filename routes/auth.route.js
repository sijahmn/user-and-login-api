import { Router } from "express";
import auth from "../../middleware/auth";
import { loginUser, registerUser } from "../controller/auth.controller";

const router = Router();

/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

router.post("/login", auth, loginUser);

/**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */

router.post("/register", registerUser);

export default router;
