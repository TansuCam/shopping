import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auth from "./auth";

const store = configureStore({
  reducer: {
    auth: auth,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
