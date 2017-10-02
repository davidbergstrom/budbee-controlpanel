import styled from 'styled-components'
import { color, font, spacing, borderRadius } from 'styles'

const OrderIdBox = styled.div`
  align-items: center;
  background-color: ${color.darkblue};
  border-radius: ${borderRadius.base} 0 0 ${borderRadius.base};
  color: ${color.white};
  display: flex;
  font-size: ${font.size.large};
  font-weight: ${font.weight.heavy};
  height: 100%;
  padding: 0 ${spacing.base};
`

export default OrderIdBox
