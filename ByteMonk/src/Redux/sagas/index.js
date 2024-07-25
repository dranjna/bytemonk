import { combineReducers } from 'redux';
import Reducer from '../reducers/reportReducer';

const rootReducer = combineReducers({
  reports: Reducer,
});

export default rootReducer;
