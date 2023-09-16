import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    brandSearchTerm: "",
    searchByPrice: 0,
    sortBy: "",
  },
  reducers: {
    searchByBrand: (state, action) => {
      state.brandSearchTerm = action.payload;
    },
    setPriceChange: (state, action) => {
      state.searchByPrice = action.payload;
    },
    clearInputs: (state, action) => {
      state.brandSearchTerm = "";
      state.searchByPrice = "";
      state.sortBy = "";
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { searchByBrand, setPriceChange, clearInputs, setSortBy } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
