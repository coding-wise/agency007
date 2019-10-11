import { provider } from './provider'

export const removeMemberProject = (projectId: number, membershipId: number) => {
  return provider.delete(`/projects/${projectId}/memberships/${membershipId}`)
}
