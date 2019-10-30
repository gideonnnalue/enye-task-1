import {
  ADD_USER,
  REFRESH_USER,
  LOADING_USER,
  LOAD_USERS,
  SAVING_USER,
  SAVED_USER,
  ERROR_USER,
  CLEAR_SAVING_USER
} from "../actions/types";
import { firebaseUsers } from "../firebaseConfig";
import { takeEvery, put, fork, take } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
import axios from "axios";

const delay = ms => new Promise(res => setTimeout(res, ms));

function* addUserAsync(user) {
  try {
    yield put({ type: SAVING_USER });
    // yield firebaseUsers.push(user.payload);
    yield axios.post(
      "https://us-central1-enye-user-form.cloudfunctions.net/users",
      user.payload
    );
    yield put({ type: SAVED_USER });
    yield delay(2000);
    yield put({ type: CLEAR_SAVING_USER });
  } catch (err) {
    yield put({ type: ERROR_USER });
    console.log("something went wrong");
  }
}

function* loadingUser() {
  yield put({ type: LOADING_USER });
}

function* startListener() {
  const channel = new eventChannel(emiter => {
    const listener = firebaseUsers.on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });

    return () => {
      listener.off();
    };
  });

  while (true) {
    const { data } = yield take(channel);
    const newData = Object.keys(data).map((el, i) => data[el]);
    yield put({ type: REFRESH_USER, payload: newData.reverse() });
  }
}

export default function* root() {
  yield takeEvery(ADD_USER, addUserAsync);
  yield takeEvery(LOAD_USERS, loadingUser);
  yield fork(startListener);
}
