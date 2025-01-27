import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "34.995899",
    bl_lng: "15.655271",
    tr_lat: "46.209873",
    tr_lng: "30.192381",
    speed: "2,9999",
  };
  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  return formatted;
});

export const getDetails = createAsyncThunk("/detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };
  const res = await api.get("/flights/detail", { params });
  console.log(res);
  return res.data;
});
