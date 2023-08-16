import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get("/api/v1/greetings");
  const greeting = response.data.greeting;
  return greeting;
});

export const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    greeting: "",
    loading: false,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGreeting.pending, (state, action) => {
      state.loading = true;
    }),
    builder.addCase(fetchGreeting.fulfilled, (state,action) => {
      state.loading = false;
      state.greeting = action.payload;
    }),

    builder.addCase(fetchGreeting.rejected, (state, action) => {
      state.error = true;
    }
    )
  },
});

export default greetingSlice.reducer;