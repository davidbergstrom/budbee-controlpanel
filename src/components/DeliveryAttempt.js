import React from 'react'
import PropTypes from 'prop-types'

import { Col, Row } from 'react-grid-system'
import Text from 'components-styled/Text'
import TextLabel from 'components-styled/TextLabel'
import TextStrong from 'components-styled/TextStrong'

import { spacing } from 'styles'
import { formatDate } from 'utils'

export default class DeliveryAttempt extends React.Component {
  static propTypes = {
    attemptTime: PropTypes.number.isRequired,
    cancellationTime: PropTypes.number,
    cancellationComment: PropTypes.string,
    orderCompleted: PropTypes.bool.isRequired
  }

  render() {
    const {
      attemptTime,
      cancellationTime,
      cancellationComment,
      orderCompleted
    } = this.props

    return (
      <div style={{ paddingBottom: spacing.base }}>
        <TextStrong>{formatDate(attemptTime)}</TextStrong>
        {
          !orderCompleted
            ?  <Row>
                <Col xs={6}>
                  <TextLabel>Åtgärdat</TextLabel>
                  <Text>{formatDate(cancellationTime)}</Text>
                </Col>
                <Col xs={6}>
                  <TextLabel>Kommentar</TextLabel>
                  <Text>{cancellationComment}</Text>
                </Col>
              </Row>
            : <Text>Order levererad</Text>
        }
      </div>
    )
  }
}
