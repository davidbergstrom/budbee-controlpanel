import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { color } from './color'

export const budbeeLightTheme = getMuiTheme({
  fontFamily: 'Open Sans, sans-serif',
  palette: {
    primary1Color: color.budbeeGreen,
    accent1Color: color.darkblue,
    textColor: color.black,
  }
})
