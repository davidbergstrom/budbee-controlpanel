import { combineReducers } from 'redux'
import order from './order'
import snackbar from './snackbar'

const rootReducer = combineReducers({
  order,
  snackbar
})

export default rootReducer
