import axios from 'axios'

import {
  FETCH_ORDER,
  UPDATE_ORDER,
  UPDATE_ORDER_OPTIMISTICALLY
} from 'constants/ActionTypes'

export const fetchOrder = (id) => {
  return {
    type: FETCH_ORDER,
    payload: axios.get(`http://localhost:3001/orders?id=${id}`)
  }
}

export const updateOrder = (order) => {
  return (dispatch, getState) => {
    order = {
      ...order,
      updatedAt: Date.now()
    }

    dispatch(updateOrderOptimistically(order));
    dispatch({
      type: UPDATE_ORDER,
      payload: axios.put(`http://localhost:3001/orders/${order.id}`, order)
    })
  }
}

export const updateOrderOptimistically = (order) => {
  return {
    type: UPDATE_ORDER_OPTIMISTICALLY,
    payload: order
  }
}

export const saveRecipientInfo = (recipient) => {
  return (dispatch, getState) => {
      let order = getState().order.order;
      let endCustomer = {
        ...order.endCustomer,
        name: recipient.name,
        phoneNumber: recipient.phoneNumber,
        email: recipient.email
      }

      order = {
        ...order,
        endCustomer: endCustomer
      }

      dispatch(updateOrder(order));
  }
}

export const saveDeliveryAddressInfo = (newDeliveryAddress) => {
  return (dispatch, getState) => {
      let order = getState().order.order;
      let deliveryAddressSettings = {
        ...order.deliveryAddress.settings,
        doorCode: newDeliveryAddress.doorCode,
        floor: newDeliveryAddress.floor
      }
      let deliveryAddress = {
        ...order.deliveryAddress,
        street: newDeliveryAddress.street,
        postalCode: newDeliveryAddress.postalCode,
        city: newDeliveryAddress.city,
        settings: deliveryAddressSettings
      }

      order = {
        ...order,
        deliveryAddress: deliveryAddress
      }

      dispatch(updateOrder(order));
  }
}

export const saveAdditionalInfo = (info) => {
  return (dispatch, getState) => {
      let order = getState().order.order;
      let settings = {
        ...order.settings,
        outsideDoorOk: info.outsideDoorOk,
        signatureRequired: info.signatureRequired,
        identificationCheckRequired: info.idCheckRequired,
        recipientMustMatchEndCustomer: info.recipientMustMatch
      }

      order = {
        ...order,
        settings: settings
      }

      dispatch(updateOrder(order));
  }
}
