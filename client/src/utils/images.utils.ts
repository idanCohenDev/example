import axios from "axios";
import { MockImageType } from "../models/Image";

export const fetchImages = async (
 page: number,
 category: string
): Promise<MockImageType[]> => {
 try {
  const images = await axios.get(
   import.meta.env.VITE_API_URL + `/images?page=${page}&category=${category}`
  );
  console.log(images);
  return images.data as MockImageType[];
 } catch (error) {
  console.log(error);
  return [];
 }
};
