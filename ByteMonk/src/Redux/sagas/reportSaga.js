// src/Redux/sagas/index.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILURE,
  FETCH_REPORTS_BY_CATEGORY_REQUEST,
} from '../actions/reportAction';

const API_URL = 'http://localhost:3001/api/reports';

function* fetchReports() {
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: FETCH_REPORTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_REPORTS_FAILURE, payload: error.message });
  }
}

function* fetchReportsByCategory(action) {
  try {
    const response = yield call(axios.get, `${API_URL}/filter?category=${action.payload}`);
    yield put({ type: FETCH_REPORTS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_REPORTS_FAILURE, payload: error.message });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_REPORTS_REQUEST, fetchReports);
  yield takeEvery(FETCH_REPORTS_BY_CATEGORY_REQUEST, fetchReportsByCategory);
}
