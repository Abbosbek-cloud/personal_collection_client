import { call, takeLatest, put } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/base";
import axios from "axios";

async function getUserDetails() {}

export const getUserData = createAction("user/getAsync");

function* getUserSaga({ payload }) {
  try {
    const user = yield call(getUserDetails, payload);
    yield put(setUser(user));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(getUserData, getUserSaga);
}
