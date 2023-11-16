import { Router } from "express";
import { imagesRouter } from "./images.routes.js";

export const mainRouter = Router();

mainRouter.use("/images", imagesRouter);
