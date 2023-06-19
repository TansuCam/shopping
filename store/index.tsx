// Redux
// ---------
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// Reducers
// ---------
import auth from "./auth";
import products from "./products";

// Store
// ---------
const store = configureStore({
  reducer: {
    auth: auth,
    products: products,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// Types
// ---------
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
