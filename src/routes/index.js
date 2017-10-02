import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import OrderContainer from 'containers/OrderContainer'
import Logo from 'components/Logo'
import budbeeLogo from 'assets/budbee-logo.png'

function Routes() {
  return (
    <Router>
      <Container>
        <Row>
          <Col xs={12}>
            <Logo src={budbeeLogo} alt="Budbee logotype" />
          </Col>
        </Row>
        <Route path="/" component={OrderContainer} />
      </Container>
    </Router>
  )
}

export default Routes
