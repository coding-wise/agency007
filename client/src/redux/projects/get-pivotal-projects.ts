import { handleActions } from 'redux-actions'
import { createActionThunk } from 'redux-thunk-actions'
import { getPivotalProjects } from '../../api/projects/get-pivotal-projects'

export const initialState = {
  pivotalProjects: [],
  loading: true,
  error: null,
}

export const getPivotalProjectsAction = createActionThunk('GET_PIVOTAL_PROJECTS', () => getPivotalProjects())

export const pivotalProjects = handleActions(
  {
    [getPivotalProjectsAction.STARTED]: (state) => ({
      ...state,
      loading: true,
    }),
    [getPivotalProjectsAction.SUCCEEDED]: (state, action) => ({
      ...state,
      data: action.payload.data,
    }),
    [getPivotalProjectsAction.FAILED]: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload.error,
    }),
    [getPivotalProjectsAction.ENDED]: (state) => ({
      ...state,
      loading: false,
    }),
  },
  initialState,
)
