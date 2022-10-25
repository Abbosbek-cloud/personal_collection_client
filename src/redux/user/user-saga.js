import { call, takeLatest, put } from "redux-saga/effects";
import { createAction } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/base";
import axios from "axios";
import { setUser } from "./user-slice";

async function getUserDetails(token) {
  const res = await axios({
    url: `${BASE_URL}/user/profile`,
    method: "get",
    headers: {
      authorization: `1234567${token}`,
    },
  });

  console.log(res.data);
  console.log(token);

  return res.data;
}

export const getUserData = createAction("user/getAsync");

function* getUserSaga({ payload }) {
  try {
    const user = yield call(getUserDetails, payload.token);
    console.log(user);
    yield put(setUser({ ...user, token: payload?.token }));
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(getUserData, getUserSaga);
}
