import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalsType } from "../../models/Modals";
import { MockImageType } from "../../models/Image";

interface UIState {
 isModalOpen: ModalsType;
 selectedImage: MockImageType | null;
}

const initialState: UIState = {
 isModalOpen: "NONE",
 selectedImage: null,
};

const uiSlice = createSlice({
 name: "ui",
 initialState,
 reducers: {
  toggleModal: (state, action: PayloadAction<ModalsType>) => {
   state.isModalOpen = action.payload;
  },
  selectImage: (state, action: PayloadAction<MockImageType>) => {
   state.selectedImage = action.payload;
  },
 },
});

export const { toggleModal, selectImage } = uiSlice.actions;

export default uiSlice.reducer;
