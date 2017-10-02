import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import rootReducer from 'reducers'

const middleware = [promiseMiddleware(), thunk]

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(...middleware))
}
