import React from 'react'
import PropTypes from 'prop-types'

import DeliveryAttempt from 'components/DeliveryAttempt'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class DeliveryAttempts extends React.Component {
  static propTypes = {
    deliveryAttempts: PropTypes.array.isRequired
  }

  render() {
    const { deliveryAttempts } = this.props

    return (
      <div>
        <TitleRow>
          <Title>Leveransförsök</Title>
        </TitleRow>
        {
          deliveryAttempts.map(attempt => (
            <DeliveryAttempt
              key={attempt.id}
              attemptTime={attempt.createdAt}
              cancellationTime={attempt.cancellation ? attempt.cancellation.date : null}
              cancellationComment={attempt.cancellation ? attempt.cancellation.comment : null}
              orderCompleted={!attempt.cancellation}
            />
          ))
        }
      </div>
    );
  }
}
