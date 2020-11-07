import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([ thunk ]);

import * as actions from './index'

let store;
const persons = [
    {
        id: 173,
        firstName: 'Syed',
        lastName: 'Hippert',
        email: 'JDelellis@et.net',
        phone: '(314)870-7813',
        message: 'libero vel eros libero porta nullam lorem pretium lacus morbi mattis pulvinar et sagittis hendrerit porttitor sed ipsum mattis convallis non placerat hendrerit malesuada lacus molestie curabitur ac ipsum elit tempor tempor',
        timestamp: '2082-02-26T08:46:37.562Z'
    },
    {
        id: 417,
        firstName: 'Michele',
        lastName: 'Vanburen',
        email: 'MHancock@sollicitudin.gov',
        phone: '(494)276-2945',
        message: 'facilisis porttitor sed suspendisse sollicitudin turpis augue scelerisque nec mi elementum sed et donec dolor vitae sed velit dolor magna etiam sed ac id convallis vitae lorem sit sagittis egestas dolor convallis',
        timestamp: '2003-04-24T17:43:10.464Z'
    },
    {
        id: 283,
        firstName: 'Jia',
        lastName: 'Keene',
        email: 'CJacobs@in.net',
        phone: '(785)326-9688',
        message: 'amet nullam magna fringilla hendrerit augue non malesuada tincidunt aenean rutrum fringilla dui ac non et lacus aliquam eros donec tortor vitae dolor pretium elementum lorem non massa dolor vestibulum vitae pharetra',
        timestamp: '1927-02-15T02:31:48.488Z'
    },
    {
        id: 407,
        firstName: 'Andy',
        lastName: 'Leeman',
        email: 'MWillms@consectetur.com',
        phone: '(591)571-6817',
        message: 'non sollicitudin dolor sagittis magna fringilla sed sed placerat lorem ipsum dolor scelerisque non consectetur at amet sollicitudin tincidunt pulvinar vestibulum elit molestie mi magna mattis convallis ipsum vestibulum vestibulum nec in',
        timestamp: '2033-02-14T10:50:55.098Z'
    },
    {
        id: 109,
        firstName: 'Trinelveli',
        lastName: 'Ney',
        email: 'BEvert@porta.ly',
        phone: '(389)654-1575',
        message: 'pulvinar suspendisse scelerisque et odio magna at aliquam ac morbi tincidunt sollicitudin at nec dolor pulvinar elit odio in et tortor etiam donec curabitur odio nec mi vestibulum vitae lacus amet odio',
        timestamp: '1904-11-08T07:11:25.149Z'
    }
];

beforeEach(()=>{
    store = mockStore({
        persons: {
            list: [],
                sort: 0,
                nItems: '5',
                loader: false,
                sortList: [],
                httpError: 0
        }
    })
});
describe("actions",()=>{
    test("addPersons",()=>{
        store.dispatch(actions.addPersons(persons));
        expect(store.getActions()[0].type).toBe('ADD_ITEMS');
        expect(store.getActions()[0].payload.length).toBe(5)
    });
});