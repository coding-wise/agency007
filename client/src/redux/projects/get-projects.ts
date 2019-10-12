import { handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'
import { getProjects } from '../../api/projects/get-projects'

export const initialState = {
  projects: [],
  loading: true,
  error: null,
}

export const getProjectsAction = createActionThunk('GET_PROJECTS', () => getProjects())

export const projects = handleActions(
  {
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
  },
  initialState,
)
