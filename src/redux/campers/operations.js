import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const generalApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampersWithFilters = createAsyncThunk(
  "fetchCampersWithFilters",
  async ({ location, equipment, vehicleType }, thunkApi) => {
    try {
      const params = {};

      if (location) {
        params.location = location;
      }
      if (equipment.ac) {
        params.AC = "true";
      }
      if (equipment.kitchen) {
        params.kitchen = "true";
      }
      if (equipment.tv) {
        params.TV = "true";
      }
      if (equipment.bathroom) {
        params.bathroom = "true";
      }
      if (equipment.automatic) {
        params.automatic = "true";
      }
      if (vehicleType) {
        params.form = vehicleType;
      }

      const { data } = await generalApi.get("/campers", { params });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "fetchCamperById",
  async (id, thunkApi) => {
    try {
      const { data } = await generalApi.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
