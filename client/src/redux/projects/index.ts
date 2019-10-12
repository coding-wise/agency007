import { handleActions } from 'redux-actions'
import { handleGetProject } from './get-project'
import { handleGetProjects } from './get-projects'
import { handleAddMemberProject } from './add-member-project'
import { handleRemoveMemberProject } from './remove-member-project'

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
    ...handleAddMemberProject,
    ...handleRemoveMemberProject,
  },
  initialState,
)
