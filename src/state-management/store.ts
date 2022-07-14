import { configureStore } from "@reduxjs/toolkit";
import navigationItemsReducer from "../state-management/item-explorer/navigationItemsSlice";

export const store = configureStore({
  reducer: {
    navigationItems: navigationItemsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
