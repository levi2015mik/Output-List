import { combineReducers } from 'redux'
import {
 CHANGE_TEST, SET_SORT, ADD_ITEMS, SET_ITEMS_PP, SET_LOADER
} from '../actions'

// Sort const for reducer persons
const NOT_SORT = 0;
const SORT_TO_BIG = 1;
const SORT_TO_SMALL = 1;

const testData = (state = {test:"My test data"}, action) => {
  switch (action.type) {
    case CHANGE_TEST:
      return {...state,test: action.value};
    default:
      return state
  }
};
const persons = (state={list:[],sort:NOT_SORT,nItems:10,loader:0},action)=>{
  switch (action.type) {
    case ADD_ITEMS: return {...state, list: action.payload};
    case SET_SORT: {
      let sort;
      switch(state.sort){
        case NOT_SORT: sort = SORT_TO_BIG; break;
        case SORT_TO_BIG: sort = SORT_TO_SMALL; break;
        case SORT_TO_SMALL: sort = NOT_SORT; break;
      }
      return {...state, sort:sort};
    }
    case SET_ITEMS_PP: return {...state, nItems: action.payload};
    case SET_LOADER: return {...state,loader: action.payload};
    default: return state
  }
};

const rootReducer = combineReducers({
  testData,
  persons
});

export default rootReducer
