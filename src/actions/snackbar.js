import { createAction } from 'redux-actions'

import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from 'constants/ActionTypes'

export const openSnackbar = createAction(OPEN_SNACKBAR)
export const closeSnackbar = createAction(CLOSE_SNACKBAR)
