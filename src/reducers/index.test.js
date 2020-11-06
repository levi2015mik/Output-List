import reducer from './index'
import {
    NOT_SORT,
    SORT_TO_BIG,
    SORT_TO_SMALL
} from './index'

import {
    SET_SORT, ADD_ITEMS, SET_ITEMS_PP, SET_LOADER, ADD_ERROR, DELETE_ERROR
} from '../actions'

const templatePersons = [{
    "id": 503,
    "firstName": "{firstName }",
    "lastName": "Vanhoose",
    "email": "RGoodwin@scelerisque.ly",
    "phone": "(738)459-5729",
    "message": "etiam adipiscing molestie et sed lacus placerat lorem nunc scelerisque ac vel etiam nec odio porttitor nunc tincidunt fringilla fringilla amet neque vestibulum placerat massa ac dui mattis elit id mattis facilisis",
    "timestamp": "2077-03-12T12:54:42.059Z"
},
{
    "id": 635,
    "firstName": "{firstName }",
    "lastName": "Clements",
    "email": "AElshoff@elementum.ly",
    "phone": "(777)934-1300",
    "message": "eros non vitae morbi hendrerit pharetra sed eget pulvinar aenean egestas risus nullam massa sit orci rutrum odio tincidunt sed sed in amet vel nec aliquam sed nec orci porttitor nec neque",
    "timestamp": "2053-08-12T23:41:28.750Z"
}];

describe('reducer persons',()=>{

    test("default load",()=>{
        const state = reducer({},{type:"EMPTY"});
        expect(state.persons).toEqual({ list: [], sort: 0, nItems: 10, loader: 0, "sortList": [] })
    });

    test("ADD_ITEMS",()=>{
        const state = reducer({},{type:ADD_ITEMS,payload:templatePersons});
        expect(state.persons.list.length).toBe(2);
        expect(state.persons.list[0].id).toBe(503);
    });

    test("ADD_SORT",()=>{
        let state = reducer({},{type:SET_SORT});
        expect(state.persons.sort).toBe(SORT_TO_BIG);

        state = reducer(state,{type:SET_SORT});
        expect(state.persons.sort).toBe(SORT_TO_SMALL);

        state = reducer(state,{type:SET_SORT});
        expect(state.persons.sort).toBe(SORT_TO_BIG);
    });

    test("SET_ITEMS_PP",()=>{
        const state = reducer({},{type:SET_ITEMS_PP,payload: 20});
        expect(state.persons.nItems).toBe(20);
    });

    test("SET_LOADER",()=>{
        const state = reducer({},{type:SET_LOADER,payload: 20});
        expect(state.persons.loader).toBe(20);
    });

    test("ERROR",()=>{
        let state = reducer({},{type:ADD_ERROR,payload: {code:404,description:"Not found"}});
        expect(state.persons.error).toEqual({code:404,description:"Not found"});
        state = reducer(state,{type:DELETE_ERROR});
        expect(state.persons.error).toBeUndefined()
    });



});