import { getPlayersSaga, getPlayersAction } from "./getPlayers";

export const playersSaga = [getPlayersSaga];

export const playersSagaActions = {
  getPlayers: getPlayersAction,
};
