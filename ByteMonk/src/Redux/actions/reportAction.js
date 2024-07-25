// src/Redux/actions/reportAction.js
export const FETCH_REPORTS_REQUEST = 'FETCH_REPORTS_REQUEST';
export const FETCH_REPORTS_SUCCESS = 'FETCH_REPORTS_SUCCESS';
export const FETCH_REPORTS_FAILURE = 'FETCH_REPORTS_FAILURE';
export const FETCH_REPORTS_BY_CATEGORY_REQUEST = 'FETCH_REPORTS_BY_CATEGORY_REQUEST';

export const fetchReportsRequest = () => {
  console.log("fetchReportsRequest action called");
  return {
    type: FETCH_REPORTS_REQUEST
  };
};

export const fetchReportsSuccess = (reports) => ({
  type: FETCH_REPORTS_SUCCESS,
  payload: reports
});

export const fetchReportsFailure = (error) => ({
  type: FETCH_REPORTS_FAILURE,
  payload: error
});
export const fetchReportsByCategoryRequest = (category) => ({
  type: FETCH_REPORTS_BY_CATEGORY_REQUEST,
  payload: category
});



