import styled from 'styled-components'
import { borderRadius, color } from 'styles'

const OrderHead = styled.div`
  align-items: center;
  background-color: ${color.white};
  border-radius: ${borderRadius.base};
  display: flex;
  height: 3.5rem;
  justify-content: space-between;
  width: 100%;
`

export default OrderHead
