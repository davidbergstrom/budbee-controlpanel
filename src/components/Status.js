import React from 'react'
import PropTypes from 'prop-types'

import StatusTextWithIcon from 'components/StatusTextWithIcon'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'
import Text from 'components-styled/Text'
import TextLabel from 'components-styled/TextLabel'
import { formatDate } from 'utils'

export default class Status extends React.Component {
  static propTypes = {
    orderStatus: PropTypes.string.isRequired,
    updatedAt: PropTypes.number.isRequired
  }

  render() {
    const { orderStatus, updatedAt } = this.props

    return (
      <div>
        <TitleRow>
          <Title>Status</Title>
        </TitleRow>
        <StatusTextWithIcon status={orderStatus} />
        <TextLabel>Senast ändrad</TextLabel>
        <Text>{formatDate(updatedAt)}</Text>
      </div>
    );
  }
}
