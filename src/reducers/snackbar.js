import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
  UPDATE_ORDER_FULFILLED
} from 'constants/ActionTypes'

const initialState = {
  open: false,
  message: ''
}

export default function snackbar(state = initialState, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return {
        ...state,
        open: true,
        message: action.payload
      }
    case CLOSE_SNACKBAR:
      return {
        ...state,
        open: false,
        message: ''
      }
    case UPDATE_ORDER_FULFILLED:
      return {
        ...state,
        open: true,
        message: 'Ändringar sparade'
      }
    default:
      return state
  }
}
