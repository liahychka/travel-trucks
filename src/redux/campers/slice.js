import { createSlice } from "@reduxjs/toolkit";
import { fetchCamperById, fetchCampers } from "../campers/operations.js";

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
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload; // оновлюємо всі кемпери
        state.loading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.items = { total: 1, items: [action.payload] }; // зберігаємо тільки один кемпер
        state.loading = false;
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = slice.reducer;
