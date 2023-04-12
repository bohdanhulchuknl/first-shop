import { configureStore } from "@reduxjs/toolkit";
import loadingModalSlice from "../features/loadingModal/loadingModalSlice";
import productsSlice from "../features/products/productsSlice";
import leftFilterNavBarSlice from "../features/leftFilterNavBar/leftFilterNavBarSlice";

export const store = configureStore({
  reducer: {
    loadingModal: loadingModalSlice,
    product: productsSlice,
    leftFilterNavBar: leftFilterNavBarSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
