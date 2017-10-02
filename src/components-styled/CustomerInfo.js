import styled from 'styled-components'
import { font, spacing } from 'styles'

const CustomerInfo = styled.div`
  align-items: center;
  display: flex;
  font-size: ${font.size.large};
  height: 100%;
  padding-right: ${spacing.base};

  img {
    height: 80%;
    margin-left: ${spacing.base};
    width: auto;
  }
`

export default CustomerInfo
