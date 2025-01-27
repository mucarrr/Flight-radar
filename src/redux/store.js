import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/FlightSlice";
import detailReducer from "./slices/DetailSlice";

export default configureStore({
  reducer: {
    flight: flightReducer,
    detail: detailReducer,
  },
});
