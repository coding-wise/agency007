import { createActionThunk } from 'redux-thunk-actions'
import { removeMemberPivotal } from '../../api/projects/remove-member-pivotal'

export const removeMemberProjectAction = createActionThunk('REMOVE_MEMBER_PROJECT', (id, membershipId) =>
  removeMemberPivotal(id, membershipId),
)

export const handleGetProject = {
  [removeMemberProjectAction.STARTED]: (state) => ({
    ...state,
    loading: true,
  }),
  [removeMemberProjectAction.SUCCEEDED]: (state, action) => ({
    ...state,
    data: action.payload.data,
  }),
  [removeMemberProjectAction.FAILED]: (state, action) => ({
    ...state,
    loading: false,
    error: action.payload.error,
  }),
  [removeMemberProjectAction.ENDED]: (state) => ({
    ...state,
    loading: false,
  }),
}
