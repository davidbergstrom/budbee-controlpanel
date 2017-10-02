import React from 'react'
import PropTypes from 'prop-types'

import FontIcon from 'material-ui/FontIcon'

import { color, font, spacing } from 'styles'

const statusTypes = {
  NotStarted: {
    text: 'Ej påbörjad',
    icon: 'do_not_disturb_on',
    color: color.red
  },
  Collected: {
    text: 'Upphämtad',
    icon: 'file_upload',
    color: color.blue
  },
  OnRouteDelivery: {
    text: 'Transporteras',
    icon: 'local_shipping',
    color: color.darkblue
  },
  Delivered: {
    text: 'Levererad',
    icon: 'check_circle',
    color: color.budbeeGreen
  }
}

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    fontWeight: font.weight.heavy,
    marginTop: 0
  },
  icon: {
    marginRight: spacing.icon,
    color: color.darkblue
  }
}

export default class StatusTextWithIcon extends React.Component {
  static propTypes = {
    status: PropTypes.string.isRequired
  }

  getIconType = (status) => statusTypes[status].icon
  getIconColor = (status) => statusTypes[status].color
  getStatusText = (status) => statusTypes[status].text

  render() {
    const { status } = this.props

    styles.icon = {
      ...styles.icon,
      color: this.getIconColor(status)
    }

    return (
      <p style={styles.container}>
        <FontIcon className="material-icons" style={styles.icon}>
          {this.getIconType(status)}
        </FontIcon>
        {this.getStatusText(status)}
      </p>
    )
  }
}
