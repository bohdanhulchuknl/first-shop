import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

interface LeftFilterNavBarState {
  values: {
    min: number;
    max: number;
  };
  minValue: number;
  maxValue: number;
  selectedCategories: string[];
  selectedCountries: string[];
  selectedSizes: string[];
  selectedVendors: string[];
}

const initialState: LeftFilterNavBarState = {
  values: {
    min: 0,
    max: 5,
  },
  minValue: 0,
  maxValue: 100,
  selectedCategories: [],
  selectedCountries: [],
  selectedSizes: [],
  selectedVendors: [],
};

export const leftFilterNavBarSlice = createSlice({
  name: "leftFilterNavBar",
  initialState,
  reducers: {
    setValues: (state, action) => {
      state.values.min = action.payload.min;
      state.values.max = action.payload.max;
    },
    setMinMaxValues: (state, action) => {
      state.minValue = action.payload.minValue;
      state.maxValue = action.payload.maxValue;
    },
    toggleSelectedCategories: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      if (state.selectedCategories.includes(action.payload.value)) {
        state.selectedCategories = [
          ...state.selectedCategories.filter(
            (el) => el !== action.payload.value
          ),
        ];
      } else {
        state.selectedCategories.push(action.payload.value);
      }
    },
    toggleSelectedCountries: (
      state,
      action: PayloadAction<{ value: string }>
    ) => {
      if (state.selectedCountries.includes(action.payload.value)) {
        state.selectedCountries = [
          ...state.selectedCountries.filter(
            (el) => el !== action.payload.value
          ),
        ];
      } else {
        state.selectedCountries.push(action.payload.value);
      }
    },
    toggleSelectedSize: (state, action: PayloadAction<{ value: string }>) => {
      if (state.selectedSizes.includes(action.payload.value)) {
        state.selectedSizes = [
          ...state.selectedSizes.filter((el) => el !== action.payload.value),
        ];
      } else {
        state.selectedSizes.push(action.payload.value);
      }
    },
    toggleSelectedVendor: (state, action: PayloadAction<{ value: string }>) => {
      if (state.selectedVendors.includes(action.payload.value)) {
        state.selectedVendors = [
          ...state.selectedVendors.filter((el) => el !== action.payload.value),
        ];
      } else {
        state.selectedVendors.push(action.payload.value);
      }
    },
  },
});

export const {
  setValues,
  setMinMaxValues,
  toggleSelectedCategories,
  toggleSelectedCountries,
  toggleSelectedSize,
  toggleSelectedVendor,
} = leftFilterNavBarSlice.actions;

export default leftFilterNavBarSlice.reducer;
