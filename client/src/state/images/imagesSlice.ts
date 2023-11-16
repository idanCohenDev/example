import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MockImageType } from "../../models/Image";
import { fetchImages } from "../../utils/images.utils";

interface ImagesState {
 images: MockImageType[];
 page: number;
 isPending: boolean;
 category: string;
}

const initialState: ImagesState = {
 images: [],
 page: 1,
 isPending: false,
 category: "all",
};

const imagesSlice = createSlice({
 name: "images",
 initialState,
 reducers: {},
 extraReducers: (builder) => {
  builder
   .addCase(getImages.pending, (state) => {
    state.isPending = true;
   })
   .addCase(
    getImages.fulfilled,
    (
     state,
     action: PayloadAction<{
      images: MockImageType[];
      page: number;
      category: string;
     }>
    ) => {
     state.isPending = false;
     state.page = action.payload.page < 1 ? 1 : action.payload.page;
     state.images = action.payload.images;
     state.category = action.payload.category;
    }
   );
 },
});

// Async function for fetching images from the API using the category and page number parameters.
export const getImages = createAsyncThunk(
 "images/fetchImages",
 async ({ page, category }: { page: number; category: string }) => {
  const images = await fetchImages(page, category);
  return { images, page, category };
 }
);

export default imagesSlice.reducer;
