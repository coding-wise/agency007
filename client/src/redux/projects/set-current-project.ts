import { createAction } from 'redux-actions'

export const setCurrentProjectAction = createAction('SET_CURRENT_PROJECT')

export const handleSetCurrentProject = {
  [setCurrentProjectAction]: (state, { payload }) => ({
    ...state,
    currentProject: payload,
  }),
}
