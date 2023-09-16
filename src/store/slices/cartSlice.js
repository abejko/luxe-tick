import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    itemAmount: 0,
    total: 0,
  },
  reducers: {
    //////////////////////////////////////////////
    ////////////////////////////////////////////

    addToCart: (state, action) => {
      console.log("addToCart:", action.payload);
      const { product } = action.payload;
      const cart = state.data;

      // Check if the product is already in the cart
      const existingItem = cart.find((item) => item.id === product.id);

      if (existingItem) {
        // If the item exists, increase its amount
        const updatedCart = cart.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
        state.data = updatedCart;
      } else {
        // If the item doesn't exist, add it to the cart
        const newItem = { ...product, amount: 1 };
        const newData = [...cart, newItem];
        state.data = newData;
      }
    },

    ////////////////////////////////////////////
    ////////////////////////////////////////////

    // update item amount
    setItemAmount: (state, action) => {
      const cart = state.data;

      if (cart) {
        const amount = cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
        state.itemAmount = amount;
      }
    },

    //////////////////////////////////////////////
    ////////////////////////////////////////////

    increaseAmount: (state, action) => {
      const { id } = action.payload;
      const cart = state.data;
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      state.data = updatedCart;
      state.itemAmount += 1;
    },

    //////////////////////////////////////////////
    ////////////////////////////////////////////

    decreaseAmount: (state, action) => {
      const { id } = action.payload;
      const cart = state.data;

      // Find the item in the cart
      const cartItem = cart.find((item) => item.id === id);

      if (cartItem) {
        // If the item exists, decrease its amount
        if (cartItem.amount > 1) {
          const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, amount: item.amount - 1 } : item
          );
          state.data = updatedCart;
        } else {
          // If the amount is 1, remove the item from the cart
          const updatedCart = cart.filter((item) => item.id !== id);
          state.data = updatedCart;
        }
      }
      state.itemAmount -= 1;
    },

    //////////////////////////////////////////////
    ////////////////////////////////////////////

    removeFromCart: (state, action) => {
      console.log("removeFromCart:", action.payload);
      const { id } = action.payload;
      const cart = state.data;

      // Use Array.filter to create a new array with the item removed
      const updatedCart = cart.filter((item) => item.id !== id);

      // Calculate the new itemAmount based on updatedCart
      const newItemAmount = updatedCart.reduce(
        (total, item) => total + item.amount,
        0
      );

      // Update the state with the new data and itemAmount
      state.data = updatedCart;
      state.itemAmount = newItemAmount;
    },
  },
});

export const {
  addToCart,
  setItemAmount,
  increaseAmount,
  decreaseAmount,
  removeFromCart,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
