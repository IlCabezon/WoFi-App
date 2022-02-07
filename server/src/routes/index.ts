//from modules
import { Router } from "express";
//routes
import rAuth from "./rAuth";

const router = Router();

router.use("/", rAuth);

export default router;
