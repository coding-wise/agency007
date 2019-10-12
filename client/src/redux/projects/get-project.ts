import { createActionThunk } from 'redux-thunk-actions'
import { getProject } from '../../api/projects/get-project'

export const getProjectAction = createActionThunk('GET_PROJECT', (id) => getProject(id))

export const handleGetProject = {
  [getProjectAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [getProjectAction.SUCCEEDED]: (state, action) => ({
    ...state,
    data: action.payload.data,
  }),
  [getProjectAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [getProjectAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
