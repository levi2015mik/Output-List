import { combineReducers } from 'redux'
import {
 CHANGE_TEST
} from '../actions'

const testData = (state = {test:"My test data"}, action) => {
  switch (action.type) {
    case CHANGE_TEST:
      return {...state,test: action.value};
    default:
      return state
  }
};

const rootReducer = combineReducers({
  testData
});

export default rootReducer
