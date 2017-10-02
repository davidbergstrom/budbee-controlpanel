import {
  FETCH_ORDER_PENDING,
  FETCH_ORDER_FULFILLED,
  FETCH_ORDER_REJECTED,
  UPDATE_ORDER_FULFILLED,
  UPDATE_ORDER_OPTIMISTICALLY
} from 'constants/ActionTypes'

export const initialState = {
  fetching: false,
  order: {},
  error: null
}

export default function order(state = initialState, action) {
  switch (action.type) {
    case FETCH_ORDER_PENDING:
      return {
        ...state,
        fetching: true
      }
    case FETCH_ORDER_FULFILLED:
      return {
        ...state,
        fetching: false,
        order: action.payload.data[0]
      }
    case FETCH_ORDER_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    case UPDATE_ORDER_OPTIMISTICALLY:
      return {
        ...state,
        order: action.payload
      }
    case UPDATE_ORDER_FULFILLED:
      let order = action.payload.data;

      order = {
        ...order,
        updatedAt: Date.now()
      }

      return {
        ...state,
        order: order
      }
    default:
      return state
  }
}
