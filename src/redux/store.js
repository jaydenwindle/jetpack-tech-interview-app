// @flow
import { compose, applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import epics from './epics';
import reducer from './reducers';


const middleware = [
    thunk,
    createEpicMiddleware(epics),
];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// $FlowFixMe
export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
