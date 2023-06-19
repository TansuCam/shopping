// Firebase
// --------------
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";

// Redux Toolkit
// --------------
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

/**
 * Returns the products in the products collection in the Firestore database.
 */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const query = await getDocs(collection(db, "products"));
    const products = query.docs.map((doc: any) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return products;
  }
);

const initialState: any = {
  filteredProducts: [],
  allProducts: [],
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProducts: (state, action) => {
      return {
        ...state,
        filteredProducts: [
          ...state.allProducts.filter((product: any) =>
            product.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        ],
      };
    },
    filterByCategory: (state, action) => {
      const payload = action.payload
        ? {
            ...state,
            filteredProducts: [
              ...state.allProducts.filter(
                (product: any) =>
                  product.category.toLowerCase() ===
                  action.payload.toLowerCase()
              ),
            ],
          }
        : {
            ...state,
            filteredProducts: [...state.allProducts],
          };
      return payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    });
  },
});

export const { searchProducts, filterByCategory } = products.actions;
export default products.reducer;
