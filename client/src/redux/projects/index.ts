import { handleActions } from 'redux-actions'
import { handleGetProject } from './get-project'
import { handleGetProjects } from './get-projects'

export * from './get-project'
export * from './get-projects'

export const initialState = {
  projects: [],
  loading: true,
  error: null,
}

export const projects = handleActions(
  {
    ...handleGetProject,
    ...handleGetProjects,
  },
  initialState,
)
