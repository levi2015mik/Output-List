import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers'
import App from './containers/App'

const middleware = [ thunk ];
const store = createStore(
  reducer,composeWithDevTools(
  applyMiddleware(...middleware))
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
