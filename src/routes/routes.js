import express from "express";
import { sendEmail } from "../controllers/controllers.js";

const router = express.Router();

router.get("/sendemail", sendEmail);
export default router;
