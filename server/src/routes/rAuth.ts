//from modules
import { Router } from "express";
import { auth } from "express-openid-connect";
//controllers
import { login } from "../controllers/cAuth";
//configs
import config from "../configs";

const router = Router();

router.use(auth(config.authConfig));

router.get("/login", login);

export default router;
