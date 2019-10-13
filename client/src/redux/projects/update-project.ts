import { createActionThunk } from 'redux-thunk-actions'
import { updateProject } from '../../api/projects/update-project'

export const updateProjectAction = createActionThunk('UPDATE_PROJECT', (project) => updateProject(project))

export const handleUpdateProject = {
  [updateProjectAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [updateProjectAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [updateProjectAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
