import { provider } from './provider'

export const removeMemberProject = async (projectId: number, membershipId: number) => {
  await provider.delete(`/projects/${projectId}/memberships/${membershipId}`)
}
