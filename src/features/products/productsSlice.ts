import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface MenShoes {
  sku: string,
  name: string,
  price: number,
  category: string,
  vendor: string,
  model: string,
  description: string,
  gallery: [string],
  color: string,
  weight: string,
  country: string,
  sizes: [
    {
      size: string,
      amount: string
    }
  ]
}

interface ProductsState {
  value: number;
  menShoes?: [MenShoes] | []
}

const initialState: ProductsState = {
  value: 0,
  menShoes: []
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setMenShoes: (state, action:PayloadAction<[MenShoes]>) => {
      state.menShoes = action.payload
    }
  },
});

export const { incrementByAmount, setMenShoes } = productsSlice.actions;

export const selectMenShoes = (state: RootState) => state.product.menShoes;

export default productsSlice.reducer;
