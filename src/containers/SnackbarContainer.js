import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Snackbar from 'material-ui/Snackbar'

import * as SnackbarActions from 'actions/snackbar'

class SnackbarContainer extends React.Component {
  static propTypes = {
    openSnackbar: PropTypes.func.isRequired,
    closeSnackbar: PropTypes.func.isRequired,
  }

  handleRequestClose = () => {
    this.props.closeSnackbar();
  }

  render() {
    const { open, message } = this.props

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={4000}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    open: state.snackbar.open,
    message: state.snackbar.message
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SnackbarActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SnackbarContainer)
