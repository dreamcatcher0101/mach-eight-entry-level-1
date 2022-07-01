import { createAction } from "@reduxjs/toolkit";
import { call, takeLatest, fork, put } from "redux-saga/effects";

import { actions } from "../../slices";

import { Request } from "../../../utils";

export const getPlayersAction = createAction("/player/getPlayers");

function* getPlayers(action) {
  yield put(actions.players.setLoading());

  const responseData = yield call(
    Request,
    "https://mach-eight.uc.r.appspot.com",
    "GET",
    action.payload.data,
    false,
    false
  );

  if (responseData) {
    yield put(actions.players.setPlayers(responseData.values));
    if (action.payload.next) {
      action.payload.next();
    }
  }

  yield put(actions.players.finishLoading());
}

function* getPlayersWatcher() {
  yield takeLatest(getPlayersAction.type, getPlayers);
}

export const getPlayersSaga = fork(getPlayersWatcher);
