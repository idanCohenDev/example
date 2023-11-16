import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./images/imagesSlice";
import uiReducer from "./ui/uiSlice";
import { fetchImages } from "../utils/images.utils";

const initialImages = await fetchImages(1, "all"); // Fetching the images when initializing the store in order to fetch the initial images before the <App/> renders

export const store = configureStore({
 reducer: {
  ui: uiReducer,
  images: imagesReducer,
 },
 preloadedState: {
  images: {
   images: initialImages,
   page: 1,
   isPending: false,
   category: "all",
  },
 },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
