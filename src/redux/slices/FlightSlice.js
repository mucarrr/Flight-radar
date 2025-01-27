import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "../actions";

const initialState = {
  isLoading: true,
  error: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFlights.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }),
      builder.addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
      builder.addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.flights = action.payload;
      });
  },
});
export default flightSlice.reducer;
