import { createAction } from 'redux-actions'

export const setCurrentProjectAction = createAction('SET_CURRENT_PROJECT')
export const clearCurrentProjectAction = createAction('CLEAR_CURRENT_PROJECT')

export const handleCurrentProject = {
  [setCurrentProjectAction]: (state, { payload }) => ({
    ...state,
    currentProject: payload,
  }),

  [clearCurrentProjectAction]: (state) => ({
    ...state,
    currentProject: {},
  }),
}
