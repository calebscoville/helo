import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './userReducer'
// import toyReducer from './toyReducer'

const rootReducer = combineReducers({
    user: reducer,
    // toy: toyReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));