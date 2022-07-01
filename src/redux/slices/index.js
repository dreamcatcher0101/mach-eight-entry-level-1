import playersSlice, { playersActions, playersInitialState } from "./players";

export const slices = {
  players: playersSlice.reducer,
};

export const actions = {
  players: playersActions,
};

export const initialState = {
  players: playersInitialState,
};
