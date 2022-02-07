//from modules
import { Router, Response, Request } from "express";
//controllers
import { getVideo } from "../controllers/cVideo";

const router = Router();

router.get("/video", getVideo);

export default router;
