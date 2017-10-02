import React from 'react'
import PropTypes from 'prop-types'

import Text from 'components-styled/Text'
import TextLabel from 'components-styled/TextLabel'
import TextStrong from 'components-styled/TextStrong'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class CollectionPoint extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  }

  render() {
    const {
      name,
      reference,
      phoneNumber,
      street,
      postalCode,
      city,
    } = this.props

    return (
      <div>
        <TitleRow>
          <Title>Upphämtningsplats</Title>
        </TitleRow>
        <TextStrong>{name}</TextStrong>
        <Text>{street} <br /> {postalCode} {city}</Text>
        <TextLabel>Referens</TextLabel>
        <Text>{reference}</Text>
        <TextLabel>Anteckning</TextLabel>
        <Text>{phoneNumber}</Text>
      </div>
    );
  }
}
