import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface LoadingModalState {
  isOpen: boolean;
}

const initialState: LoadingModalState = {
  isOpen: false,
};

export const loadingModalSlice = createSlice({
  name: "loadingModal",
  initialState,
  reducers: {
    toggleIsModalOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setIsModalOpen: (state, action) => {
      state.isOpen = action.payload
    }
  },
});

export const { toggleIsModalOpen, setIsModalOpen } =
  loadingModalSlice.actions;

export const selectIsOpen = (state: RootState) => state.loadingModal.isOpen;

export default loadingModalSlice.reducer;
