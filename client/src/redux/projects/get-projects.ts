import { createActionThunk } from 'redux-thunk-actions'
import { getProjects } from '../../api/projects/get-projects'

export const getProjectsAction = createActionThunk('GET_PROJECTS', () => getProjects())

export const handleGetProjects = {
  [getProjectsAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [getProjectsAction.SUCCEEDED]: (state, action) => ({
    ...state,
    data: action.payload.data,
  }),
  [getProjectsAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [getProjectsAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
