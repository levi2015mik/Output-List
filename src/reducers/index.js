import { combineReducers } from 'redux'
import {
  CHANGE_TEST, SET_SORT, ADD_ITEMS,
  SET_ITEMS_PP, SET_LOADER,
  ADD_ERROR, DELETE_ERROR, ADD_SORTED_ITEMS
} from '../actions'

// Sort const for reducer persons
export const NOT_SORT = 0;
export const SORT_TO_BIG = 1;
export const SORT_TO_SMALL = 2;


const persons = (state={list:[],sort:NOT_SORT,nItems:10,loader:0,sortList:[]},action)=>{
  switch (action.type) {
    case ADD_ITEMS: return {...state, list: action.payload};

    case ADD_SORTED_ITEMS:{
        let sortList;
        switch (state.sort) {
            case NOT_SORT:
                sortList = state.list;
                break;
            case SORT_TO_BIG:
                sortList = state.list.sort(
                    (el,el2)=>(new Date(el.timestamp)).getTime() - (new Date(el2.timestamp)).getTime()
                ) ; break;
            case SORT_TO_SMALL:
                sortList = state.list.sort(
                    (el,el2)=>{return ((new Date(el.timestamp)).getTime() - (new Date(el2.timestamp)).getTime()) * -1}
                ) ; break;
        }
        return {...state,sortList}
    }

    case SET_SORT: {
      let sort;
      switch(state.sort){
        case NOT_SORT: sort = SORT_TO_BIG; break;
        case SORT_TO_BIG: sort = SORT_TO_SMALL; break;
        case SORT_TO_SMALL: sort = SORT_TO_BIG; break;
      }
      return {...state, sort:sort};
    }

    case SET_ITEMS_PP: return {...state, nItems: action.payload};

    case SET_LOADER: return {...state,loader: action.payload};

    case ADD_ERROR: return {...state,error: action.payload};

    case DELETE_ERROR: {
      let stateCpy =  {...state};
      delete stateCpy.error;
      return stateCpy;
    }
    default: return state
  }
};

const rootReducer = combineReducers({
  persons
});

export default rootReducer
