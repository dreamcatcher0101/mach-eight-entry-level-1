import { all } from "redux-saga/effects";

import { playersSaga, playersSagaActions } from "./players";

export function* appSaga() {
  yield all([...playersSaga]);
}

const appSagaActions = {
  players: playersSagaActions,
};

export { appSagaActions };
