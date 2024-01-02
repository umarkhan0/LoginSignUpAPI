import express from "express";
const router  = express.Router();
import signUp from "./signUp.js"
router.use("/signup" , signUp);
export default router;