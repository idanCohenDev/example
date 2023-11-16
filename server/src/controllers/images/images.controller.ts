import { Request, Response } from "express";
import axios from "axios";
import { ImagesUtils } from "./images.utils.js";
export class ImageController {
 //  Fetching images from the Pixabay API by category and page
 public static async getImages(req: Request, res: Response) {
  try {
   console.log(req.query);

   const page = Number(req.query.page);
   const category = req.query.category ? req.query.category.toString() : "all";
   const validationError = ImagesUtils.validateQueryParams(page);
   if (validationError) {
    console.log(validationError);

    console.log(validationError);

    return res.status(400).send({ message: validationError });
   }
   const images = await axios.get(
    `https://pixabay.com/api/?key=${
     process.env.PIXABAY_API_KEY
    }&q=${encodeURIComponent(category!)}&page=${page < 1 ? 1 : page}&per_page=9`
   );
   if (images.data.hits.length === 0)
    return res.status(404).send({ message: "No images found" });
   return res.send(images.data.hits);
  } catch (error) {
   console.log(error);
   return res.status(500).send({ message: "Internal server error" });
  }
 }

 //  Fetching the latest images from the Pixabay API
 public static async getLatestImages(req: Request, res: Response) {
  try {
   const images = await axios.get(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=latest&per_page=9`
   );
   return res.send(images.data.hits);
  } catch (error) {
   console.log(error);
   return res.status(500).send({ message: "Internal server error" });
  }
 }

 //  Fetching images by id from the Pixabay API
 public static async getImageById(req: Request, res: Response) {
  try {
   const id = req.params.id;
   if (!id) return res.status(400).send({ message: "Id is required" });
   const images = await axios.get(
    `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&id=${req.params.id}`
   );
   return res.send(images.data.hits);
  } catch (error) {
   console.log(error);
   return res.status(500).send({ message: "Internal server error" });
  }
 }
}
