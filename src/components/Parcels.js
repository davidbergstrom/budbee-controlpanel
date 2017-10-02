import React from 'react'
import PropTypes from 'prop-types'

import Parcel from 'components/Parcel'
import Title from 'components-styled/Title'
import TitleRow from 'components-styled/TitleRow'

export default class Parcels extends React.Component {
  static propTypes = {
    parcels: PropTypes.array.isRequired
  }

  render() {
    const { parcels } = this.props

    return (
      <div>
        <TitleRow>
          <Title>Kollin</Title>
        </TitleRow>
        {
          parcels.map(parcel => (
            <Parcel
              key={parcel.id}
              packageId={parcel.packageId}
              status={parcel.parcelStatusUpdates[parcel.parcelStatusUpdates.length-1].status}
              statusUpdated={parcel.parcelStatusUpdates[parcel.parcelStatusUpdates.length-1].date}
            />
          ))
        }
      </div>
    );
  }
}
