import {createStore, combineReducers, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import promisesMiddleware from  './middlewares/promises';
import *  as reducers from './redusers';

const reducer = combineReducers(reducers);
const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    promisesMiddleware,
    logger
)(createStore);

const store = createStoreWithMiddleware(reducer, {
    issues: [],
    repository: '',
    counter: 0
});

export default store;