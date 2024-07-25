// src/Redux/reducers/reportReducer.js
import {
  FETCH_REPORTS_REQUEST,
  FETCH_REPORTS_SUCCESS,
  FETCH_REPORTS_FAILURE
} from '../actions/reportAction';

const initialState = {
  reports: [], // Ensure this is initialized as an empty array
  loading: false,
  error: null
};

const reportReducer = (state = initialState, action) => {
  console.log("reducer action---->", action);
  switch (action.type) {
    case FETCH_REPORTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_REPORTS_SUCCESS:
      return { ...state, loading: false, reports: action.payload };
    case FETCH_REPORTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reportReducer;
