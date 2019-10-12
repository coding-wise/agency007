import { createAction, handleActions } from 'redux-actions'

export const initialState = {
  token: '',
  authenticated: false,
}

export const authenticateAction = createAction('AUTHENTICATE')
export const logoutAction = createAction('LOGOUT')

export const authentication = handleActions(
  {
    [authenticateAction](state, action) {
      return { ...state, token: action.payload.token, authenticated: true }
    },
    LOGOUT: () => initialState,
  },
  initialState,
)

export const authenticate = (token: string) => {
  return authenticateAction({ token })
}
