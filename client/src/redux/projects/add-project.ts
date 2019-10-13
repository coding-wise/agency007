import { createActionThunk } from 'redux-thunk-actions'
import { addProject } from '../../api/projects/add-project'

export const addProjectAction = createActionThunk('ADD_PROJECT', (project) => addProject(project))

export const handleAddProject = {
  [addProjectAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [addProjectAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [addProjectAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
