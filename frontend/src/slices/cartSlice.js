import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      let index = -1;
      let i = 0;
      let q = 0;

      state.cart.forEach((data) => {
        if (data.id === product.id) {
          index = i;
          q = data.quantity;
        }
        i++;
      });

      console.log(index);

      if (index !== -1) {
        product.quantity = q + 1;
        state.cart[index] = product;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        toast.success("item added");
        return;
      }

      // If the course is not in the cart, add it to the cart
      state.cart.push(product);
      // Update to localstorage
      localStorage.setItem("cart", JSON.stringify(state.cart));

      // show toast
      toast.success("Item added to cart");
    },
    removeOneToCart: (state, action) => {
      const product = action.payload;
      let index = -1;
      let i = 0;
      let q = 0;

      state.cart.forEach((data) => {
        if (data.id === product.id) {
          index = i;
          q = data.quantity;
        }
        i++;
      });

      console.log(index);

      if (index !== -1) {
        product.quantity = q - 1;
        state.cart[index] = product;
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return;
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;

      let index = -1;
      let i = 0;

      state.cart.forEach((data) => {
        if (data.id === productId) {
          index = i;
        }
        i++;
      });

      if (index !== -1) {
        state.cart.splice(index, 1);
        // Update to localstorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        // show toast
        toast.success("Item removed from cart");
      }
    },
    resetCart: (state) => {
      state.cart = [];

      // Update to localstorage
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, removeFromCart, resetCart, removeOneToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
