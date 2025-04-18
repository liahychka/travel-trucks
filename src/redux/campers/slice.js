import { createSlice } from "@reduxjs/toolkit";
import { fetchCampersWithFilters } from "../campers/operations.js";

const initialState = {
  items: { total: 0, items: [] },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersWithFilters.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampersWithFilters.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampersWithFilters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = slice.reducer;
