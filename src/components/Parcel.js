import React from 'react'
import PropTypes from 'prop-types'

import { Col, Row } from 'react-grid-system'
import StatusTextWithIcon from 'components/StatusTextWithIcon'
import Text from 'components-styled/Text'
import TextLabel from 'components-styled/TextLabel'

import { spacing } from 'styles'
import { formatDate } from 'utils'

export default class Parcel extends React.Component {
  static propTypes = {
    packageId: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    statusUpdated: PropTypes.number.isRequired
  }

  render() {
    const { packageId, status, statusUpdated } = this.props

    return (
      <div style={{ paddingBottom: spacing.base }}>
        <StatusTextWithIcon status={status} />
        <Row>
          <Col xs={6}>
            <TextLabel>Senast ändrad</TextLabel>
            <Text>{formatDate(statusUpdated)}</Text>
          </Col>
          <Col xs={6}>
            <TextLabel>Paket-ID</TextLabel>
            <Text>{packageId}</Text>
          </Col>
        </Row>
      </div>
    )
  }
}
