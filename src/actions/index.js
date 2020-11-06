import axios from 'axios'

export const CHANGE_TEST = 'CHANGE_TEST';
export const SET_ITEMS_PP = 'SET_ITEMS_PP';
export const SET_SORT = 'SET_SORT';
export const ADD_ITEMS = 'ADD_ITEMS';
export const SET_LOADER = 'SET_LOADER';
export const ADD_ERROR = 'ADD_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';

const URL = `http://www.filltext.com/?id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&message=%7Blorem%7C32%7D&timestamp={date}&delay=3`;

export const changeTest = value =>({
  type: CHANGE_TEST,
  value
});

/**
 * Санка, загружающая данные с api по url, взятой из константы
 */
export const loadPersons= () => {
    return async (dispatch,getState)=>{
        const url = `${URL}&rows=${getState().persons.nItems}`;
        dispatch(startLoad());
        try {
            let list = await axios.get(url);
            dispatch(addPersons(list.data))
        } catch (e) {
            console.log(e)
        } finally {
            dispatch(endLoad())
        }

    }
};

export const addPersons = list=> ({
    type:ADD_ITEMS,
    payload:list
});

export const startLoad = ()=>({
    type: SET_LOADER,
    payload:true
});

export const endLoad = ()=>({
    type: SET_LOADER,
    payload:false
});