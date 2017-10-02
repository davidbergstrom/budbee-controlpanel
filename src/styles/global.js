import { injectGlobal } from 'styled-components'
import { font, color } from './'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
    width: 100%;
  }

  body {
    background-color: ${color.lightgray};
    font-family: ${font.family.body};
    font-size: ${font.size.base};
    font-weight: ${font.weight.normal};
    margin: 32px 0;
    padding: 0;
  }
`
