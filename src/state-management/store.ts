import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import navigationReducer from "./item-explorer/navigationSlice";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
