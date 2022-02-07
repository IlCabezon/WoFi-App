//from modules
import { Response, Request } from "express";

export const getVideo = (req: Request, res: Response) => {
  res.send("Hola");
};
