import { createSlice } from "@reduxjs/toolkit";

export const playersInitialState = {
  data: [],
  loading: false,
};

const playersSlice = createSlice({
  name: "players",
  initialState: playersInitialState,
  reducers: {
    setPlayers(state, action) {
      state.data = action.payload;
    },
    setLoading(state, action) {
      state.loading = true;
    },
    finishLoading(state, action) {
      state.loading = false;
    },
  },
});

export const playersActions = playersSlice.actions;

export default playersSlice;
