import React from 'react'
import PropTypes from 'prop-types'

import { spacing } from 'styles'

const styles = {
  height: '30px',
  marginBottom: spacing.base
}

export default class Logo extends React.Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  }

  render() {
    const { src, alt } = this.props

    return (
      <img src={src} alt={alt} style={styles} />
    )
  }
}
