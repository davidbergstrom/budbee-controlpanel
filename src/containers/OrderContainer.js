import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LinearProgress from 'material-ui/LinearProgress';
import Order from 'components/Order'

import * as OrderActions from 'actions/order'

class OrderContainer extends React.Component {
  static propTypes = {
    fetchOrder: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    order: PropTypes.object.isRequired,
    error: PropTypes.object,
    saveRecipientInfo: PropTypes.func.isRequired,
    saveDeliveryAddressInfo: PropTypes.func.isRequired,
    saveAdditionalInfo: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.fetchOrder('627039')
  }

  fetchOrder = (id) => {
    this.props.fetchOrder(id)
  }

  render() {
    const {
      order,
      fetching,
      saveRecipientInfo,
      saveDeliveryAddressInfo ,
      saveAdditionalInfo
    } = this.props

    if (!fetching && Object.keys(order).length) {
      return (
        <Order
          order={order}
          saveRecipientInfo={saveRecipientInfo}
          saveDeliveryAddressInfo={saveDeliveryAddressInfo}
          saveAdditionalInfo={saveAdditionalInfo}
        />
      )
    }

    return (
      <LinearProgress mode="indeterminate" />
    )
  }
}

function mapStateToProps(state) {
  return {
    order: state.order.order,
    fetching: state.order.fetching,
    error: state.order.error,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(OrderActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer)
