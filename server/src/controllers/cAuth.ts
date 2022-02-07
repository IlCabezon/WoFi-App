//from modules
import { Response, Request } from "express";

export const login = (req: Request, res: Response) => {
  res.send(req.oidc.isAuthenticated() ? "Logged In" : "Logged Out");
};
