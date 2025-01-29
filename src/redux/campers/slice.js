import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "../campers/operations.js";

const initialState = {
  items: { total: 0, items: [] },
  filters: {
    location: "",
    vehicleType: "",
    hasAC: false,
    hasKitchen: false,
    hasTV: false,
    hasBathroom: false,
    isAutomatic: false,
  },
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "campers",
  initialState: initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchCampers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilters } = slice.actions;

export const campersReducer = slice.reducer;
