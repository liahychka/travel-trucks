import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const generalApi = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/",
});

export const fetchCampers = createAsyncThunk(
  "fetchData",
  async (_, thunkApi) => {
    try {
      const { data } = await generalApi.get("/campers");
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
