import { handleActions } from 'redux-actions'
import { handleAddMemberProject } from './add-member-project'
import { handleAddProject } from './add-project'
import { handleGetProject } from './get-project'
import { handleGetProjects } from './get-projects'
import { handleRemoveMemberProject } from './remove-member-project'
import { handleCurrentProject } from './set-current-project'
import { handleUpdateProject } from './update-project'

export * from './get-project'
export * from './get-projects'

export const initialState = {
  projects: [],
  currentProject: {},
  loading: true,
  error: null,
}

export const projects = handleActions(
  {
    ...handleGetProject,
    ...handleGetProjects,
    ...handleAddMemberProject,
    ...handleRemoveMemberProject,
    ...handleAddProject,
    ...handleCurrentProject,
    ...handleUpdateProject,
  },
  initialState,
)
