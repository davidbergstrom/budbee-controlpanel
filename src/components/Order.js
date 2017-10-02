import React from 'react'
import PropTypes from 'prop-types'

import { Col, Row } from 'react-grid-system'
import AdditionalInfo from 'components/AdditionalInfo'
import CollectionPoint from 'components/CollectionPoint'
import CustomerInfo from 'components-styled/CustomerInfo'
import DeliveryAddress from 'components/DeliveryAddress'
import DeliveryAttempts from 'components/DeliveryAttempts'
import InfoContainer from 'components-styled/InfoContainer'
import OrderHead from 'components-styled/OrderHead'
import OrderIdBox from 'components-styled/OrderIdBox'
import Parcels from 'components/Parcels'
import Recipient from 'components/Recipient'
import SnackbarContainer from 'containers/SnackbarContainer'
import Status from 'components/Status'

export default class Order extends React.Component {
  static propTypes = {
    order: PropTypes.object.isRequired,
    saveRecipientInfo: PropTypes.func.isRequired,
    saveDeliveryAddressInfo: PropTypes.func.isRequired,
    saveAdditionalInfo: PropTypes.func.isRequired,
  }

  render() {
    const {
      order,
      saveRecipientInfo,
      saveDeliveryAddressInfo,
      saveAdditionalInfo
    } = this.props

    return (
      <div>
        <Row>
          <Col xs={12}>
            <OrderHead>
              <OrderIdBox>{order.id}</OrderIdBox>
              <CustomerInfo>
                {order.buyer.name}
                <img src={order.buyer.logo.url} alt="" />
              </CustomerInfo>
            </OrderHead>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <InfoContainer>
              <Status
                orderStatus={order.orderStatusUpdates[order.orderStatusUpdates.length-1].status}
                createdAt={order.createdAt}
                updatedAt={order.updatedAt}
              />
            </InfoContainer>
            <InfoContainer>
              <Parcels
                parcels={order.parcels}
              />
            </InfoContainer>
          </Col>
          <Col lg={4}>
            <InfoContainer>
              <CollectionPoint
                name={order.collectionPoint.name}
                reference={order.collectionPoint.referencePerson}
                phoneNumber={order.collectionPoint.phoneNumber}
                street={order.collectionPoint.address.street}
                postalCode={order.collectionPoint.address.postalCode}
                city={order.collectionPoint.address.city}
              />
            </InfoContainer>
            <InfoContainer>
              <DeliveryAttempts
                deliveryAttempts={order.deliveryAttempts}
              />
            </InfoContainer>
          </Col>
          <Col lg={4}>
            <InfoContainer>
              <Recipient
                name={order.endCustomer.name}
                phoneNumber={order.endCustomer.phoneNumber}
                email={order.endCustomer.email}
                save={saveRecipientInfo}
              />
            </InfoContainer>
            <InfoContainer>
              <DeliveryAddress
                street={order.deliveryAddress.street}
                postalCode={order.deliveryAddress.postalCode}
                city={order.deliveryAddress.city}
                doorCode={order.deliveryAddress.settings.doorCode}
                floor={order.deliveryAddress.settings.floor}
                save={saveDeliveryAddressInfo}
              />
            </InfoContainer>
            <InfoContainer>
              <AdditionalInfo
                outsideDoorOk={order.settings.outsideDoorOk}
                signatureRequired={order.settings.signatureRequired}
                idCheckRequired={order.settings.identificationCheckRequired}
                recipientMustMatch={order.settings.recipientMustMatchEndCustomer}
                save={saveAdditionalInfo}
              />
            </InfoContainer>
          </Col>
        </Row>
        <SnackbarContainer />
      </div>
    )
  }
}
