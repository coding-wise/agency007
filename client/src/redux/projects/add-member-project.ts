import { createActionThunk } from 'redux-thunk-actions'
import { addMemberPivotal } from '../../api/projects/add-member-pivotal'

export const addMemberProjectAction = createActionThunk('ADD_MEMBER_PROJECT', (id, email) =>
  addMemberPivotal(id, email),
)

export const handleGetProject = {
  [addMemberProjectAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [addMemberProjectAction.SUCCEEDED]: (state, action) => ({
    ...state,
    data: action.payload.data,
  }),
  [addMemberProjectAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [addMemberProjectAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
