import { Router } from "express";
import { ImageController } from "../controllers/images/images.controller.js";

export const imagesRouter = Router();

imagesRouter.get("/", ImageController.getImages);
imagesRouter.get("/getLatest", ImageController.getLatestImages);
imagesRouter.get("/getImageById/:id", ImageController.getImageById);
