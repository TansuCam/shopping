import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cartItems: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );
      index >= 0
        ? (state.cartItems[index].quantity += 1)
        : state.cartItems.push({ ...action.payload, quantity: 1 });

      state.totalQuantity = state.cartItems.reduce((acc: any, obj: any) => {
        return acc + obj.quantity;
      }, 0);

      state.totalAmount = state.cartItems.reduce((acc: any, obj: any) => {
        if (obj.quantity > 1) return acc + obj.price * obj.quantity;
        return acc + obj.price;
      }, 0);
    },
    removeCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item: any) => item.id === action.payload.id
      );

      action.payload.quantity >= 2
        ? (state.cartItems[index].quantity -= 1)
        : state.cartItems.splice(index, 1);

      state.totalQuantity = state.cartItems.reduce((acc: any, obj: any) => {
        return acc + obj.quantity;
      }, 0);

      state.totalAmount = state.cartItems.reduce((acc: any, obj: any) => {
        if (obj.quantity > 1) return acc + obj.price * obj.quantity;
        return acc + obj.price;
      }, 0);
    },
  },
});

export const { addCart, removeCart } = cart.actions;
export default cart.reducer;
