import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk'
import { Router, browserHistory } from 'react-router';

// import logger from 'redux-logger'
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index.js';

import AppContainer from './components/App/AppContainer';

import './assets/styles/reset.scss'
import './assets/styles/main.scss'
import './components/MyCollection/MyCollection.scss'
import './components/Search/Search.scss'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const history = createHistory();
const middleware = [routerMiddleware(history), thunk]
const store = createStore(rootReducer, devTools, applyMiddleware(...middleware))

const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={ AppContainer }/>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))


