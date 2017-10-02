import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureStore from 'store'
import Routes from 'routes'
import 'styles/global'
import { budbeeLightTheme } from 'styles'

render(
  <Provider store={configureStore()}>
    <MuiThemeProvider muiTheme={budbeeLightTheme}>
      <Routes />
    </MuiThemeProvider>
  </Provider>,
  root
)
